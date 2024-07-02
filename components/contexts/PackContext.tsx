import React, { createContext, useContext, useState, useCallback } from 'react';
import { CreatePackModal } from '../CreatePackModal';
import { Theme } from '@radix-ui/themes';

interface Pack {
  id: string;
  title: string;
  cardIds: string[];
}

interface PackContextType {
  packs: Pack[];
  addToPack: (cardId: string) => void;
  createPack: (title: string, cardId: string) => void;
  getPackById: (packId: string) => Pack | undefined;
}

const PackContext = createContext<PackContextType | undefined>(undefined);

export const PackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [packs, setPacks] = useState<Pack[]>([]);

  const createPack = useCallback((title: string, cardId: string) => {
    setPacks(prevPacks => [...prevPacks, { id: Date.now().toString(), title, cardIds: [cardId] }]);
  }, []);

  const [isCreatePackModalOpen, setIsCreatePackModalOpen] = useState(false);
  const [pendingCardId, setPendingCardId] = useState<string | null>(null);

  const addToPack = useCallback((cardId: string) => {
    setIsCreatePackModalOpen(true);
    setPendingCardId(cardId);
  }, []);

  const handleCreatePack = (title: string) => {
    if (pendingCardId) {
      createPack(title, pendingCardId);
      setPendingCardId(null);
    }
  };

  const handleAddToPack = (packId: string) => {
    if (pendingCardId) {
      const pack = packs.find(p => p.id === packId);
      if (pack) {
        setPacks(prevPacks => prevPacks.map(p => 
          p.id === packId ? { ...p, cardIds: [...p.cardIds, pendingCardId] } : p
        ));
      }
      setPendingCardId(null);
    }
  };

  const getPackById = useCallback((packId: string) => {
    return packs.find(pack => pack.id === packId);
  }, [packs]);

  return (
    <PackContext.Provider value={{ packs, addToPack, createPack, getPackById }}>
      {children}
      <Theme>
        <CreatePackModal
          isOpen={isCreatePackModalOpen}
          onClose={() => setIsCreatePackModalOpen(false)}
          onCreatePack={handleCreatePack}
          onAddToPack={handleAddToPack}
          existingPacks={packs.map(p => ({ id: p.id, title: p.title }))}
        />
      </Theme>
    </PackContext.Provider>
  );
};

export const usePackContext = () => {
  const context = useContext(PackContext);
  if (context === undefined) {
    throw new Error('usePackContext must be used within a PackProvider');
  }
  return context;
};
