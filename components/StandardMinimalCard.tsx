import React from 'react';
import { BaseMinimalCard } from './BaseMinimalCard';
import Image from 'next/image';

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

interface StandardMinimalCardProps {
  id: string;
  title: string;
  description: string;
  communityLogo?: string;
  imageSrc?: string | null;
  videoSrc?: string | null;
  onCommentsClick: () => void;
  onCollect: () => void;
  onAddToPack?: () => void;
  isUnlocked: boolean;
  joinedCount: number;
  availableCount: number;
  initialReactions?: Record<string, number>;
  initialComments: Comment[];
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void;
}

export const StandardMinimalCard: React.FC<StandardMinimalCardProps> = ({
  id,
  title,
  description,
  communityLogo,
  imageSrc,
  videoSrc,
  onCommentsClick,
  onCollect,
  onAddToPack,
  isUnlocked,
  joinedCount,
  availableCount,
  initialReactions,
  initialComments,
  onAddComment,
}) => {
  return (
    <BaseMinimalCard
      id={id}
      title={title}
      type="standard"
      description={description}
      communityLogo={communityLogo}
      onCommentsClick={onCommentsClick}
      onCollect={onCollect}
      onAddToPack={onAddToPack}
      joinedCount={joinedCount}
      availableCount={availableCount}
      initialReactions={initialReactions}
      initialComments={initialComments}
      onAddComment={onAddComment}
    >
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-[16px] object-cover w-full h-full"
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[16px]"
        />
      ) : null}
    </BaseMinimalCard>
  );
};
