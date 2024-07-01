import { StandardMinimalCard } from '@components/StandardMinimalCard';
import { MusicMinimalCard } from '@components/MusicMinimalCard';
import PredictionMinimalCard from '@components/PredictionMinimalCard';
import { Card } from '@data/cardsData';
import React from 'react';
import { Comment } from '../components/CommentsDrawer';

export const createCard = (
  cardData: Card,
  onCommentsClick: () => void,
  onCollect: () => void,
  isUnlocked: boolean,
  onPlayPause: (isPlaying: boolean, cardData: { title: string, description: string, imageSrc: string, audioSrc: string }) => void,
  isCurrentlyPlaying: boolean,
  onRewind: () => void,
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void,
  onAddToPack: () => void
): React.ReactElement | null => {
  const commonProps = {
    ...cardData,
    onCommentsClick,
    onCollect,
    isUnlocked,
    initialReactions: cardData.initialReactions || {},
    initialComments: cardData.comments || [],
    onAddComment,
    onAddToPack,
    joinedCount: cardData.joinedCount || 0,
    availableCount: cardData.availableCount || 0,
  };

  switch (cardData.type) {
    case 'standard':
      return React.createElement(StandardMinimalCard, commonProps);
    case 'music':
      return React.createElement(MusicMinimalCard, {
        ...commonProps,
        onPlayPause,
        isCurrentlyPlaying,
        onRewind,
        audioSrc: cardData.audioSrc || '',
      });
    case 'prediction':
      return React.createElement(PredictionMinimalCard, {
        ...commonProps,
        options: cardData.options || [],
      });
    default:
      console.error(`Unsupported card type: ${cardData.type}`);
      return null;
  }
};
