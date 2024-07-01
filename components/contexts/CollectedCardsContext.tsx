import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Card } from '../../data/cardsData';

interface CollectedCardsContextType {
  collectedCards: Card[];
  addCollectedCards: (cards: Card[]) => void;
  clearCollectedCards: () => void;
}

const CollectedCardsContext = createContext<CollectedCardsContextType>({
  collectedCards: [],
  addCollectedCards: () => {},
  clearCollectedCards: () => {},
});

export const CollectedCardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collectedCards, setCollectedCards] = useState<Card[]>([]);

  useEffect(() => {
    // Clear collected cards on initial load
    setCollectedCards([]);
  }, []);

  const addCollectedCards = (cards: Card[]) => {
    setCollectedCards((prevCards) => {
      const newCards = cards.filter((card) => !prevCards.some((prevCard) => prevCard.id === card.id));
      return [...prevCards, ...newCards];
    });
  };

  const clearCollectedCards = () => {
    setCollectedCards([]);
  };

  return (
    <CollectedCardsContext.Provider value={{ collectedCards, addCollectedCards, clearCollectedCards }}>
      {children}
    </CollectedCardsContext.Provider>
  );
};

export const useCollectedCards = () => {
  return useContext(CollectedCardsContext);
};
