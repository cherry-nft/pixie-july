import { useRouter } from 'next/router';
import { usePackContext } from '@components/contexts/PackContext';
import { BaseMinimalCard } from '@components/BaseMinimalCard';
import { cards, Card } from '@data/cardsData';
import { useCollectedCards } from '@components/contexts/CollectedCardsContext';
import React from 'react';
import { Comment } from '@components/CommentsDrawer';

const PackPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getPackById } = usePackContext();
  const { collectedCards, addCollectedCards } = useCollectedCards();

  const pack = getPackById(id as string);

  if (!pack) {
    return <div>Pack not found</div>;
  }

  const handleCollect = (cardId: string) => {
    const cardToCollect = cards.find(c => c.id === cardId);
    if (cardToCollect) {
      addCollectedCards([cardToCollect]);
    }
  };

  const handleCommentsClick = () => {
    // Implement comments functionality if needed
  };

  const handleAddToPack = () => {
    // Implement add to pack functionality if needed
  };

  const handleAddComment = (cardId: string, comment: Omit<Comment, 'id'>) => {
    // Implement add comment functionality if needed
  };

  return (
    <div>
      <h1>{pack.title}</h1>
      {pack.cardIds.map((cardId) => {
        const cardData = cards.find((c) => c.id === cardId);
        if (cardData) {
          const isUnlocked = collectedCards.some(card => card.id === cardId);
          return (
            <BaseMinimalCard
              key={cardId}
              {...cardData}
              onCollect={() => handleCollect(cardId)}
              onCommentsClick={handleCommentsClick}
              onAddToPack={handleAddToPack}
              isUnlocked={isUnlocked}
              initialComments={cardData.comments || []}
              onAddComment={handleAddComment}
              isEmbed={false}
            >
              {/* You can add child components here if needed */}
              {cardData.type === 'music' && <div>Music Player</div>}
              {cardData.type === 'prediction' && <div>Prediction Player</div>}
              {/* Add more conditional rendering based on card types */}
            </BaseMinimalCard>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PackPage;

