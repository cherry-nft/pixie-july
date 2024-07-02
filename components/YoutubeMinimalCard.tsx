import React, { useEffect, useRef } from 'react';
import { BaseMinimalCard } from './BaseMinimalCard';

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

interface YoutubeMinimalCardProps {
  id: string;
  title: string;
  description: string;
  url?: string; // Make url optional
  onCommentsClick: () => void;
  onCollect: () => void;
  onAddToPack?: () => void; // Add this if it's needed
  joinedCount?: number;
  availableCount?: number;
  initialReactions?: Record<string, number>;
  initialComments: Comment[];
  isUnlocked?: boolean;
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void;
}

export const YoutubeMinimalCard: React.FC<YoutubeMinimalCardProps> = ({
  id,
  title,
  description,
  url,
  onCommentsClick,
  onCollect,
  onAddToPack,
  joinedCount,
  availableCount,
  initialReactions,
  initialComments,
  isUnlocked,
  onAddComment,
}) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedRef.current && url) { // Check if url exists
      embedRef.current.innerHTML = '';
      if (url.includes('youtu.be') || url.includes('youtube.com')) {
        const videoId = url.includes('youtu.be') ? url.split('/').pop()?.split('?')[0] : url.split('v=')[1]?.split('&')[0];
        const embedHtml = `
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        `;
        embedRef.current.innerHTML = embedHtml;
      }
    }
  }, [url]);

  return (
    <BaseMinimalCard
      id={id}
      title={title}
      type="youtube"
      description={description}
      onCommentsClick={onCommentsClick}
      onCollect={onCollect}
      onAddToPack={onAddToPack}
      isEmbed={true}
      joinedCount={joinedCount}
      availableCount={availableCount}
      initialReactions={initialReactions}
      initialComments={initialComments}
      onAddComment={onAddComment}
      isUnlocked={isUnlocked}
    >
      <div className="flex justify-center items-center h-full py-2">
        <div 
          ref={embedRef} 
          className="w-full aspect-video max-w-[380px] min-h-[300px] max-h-[500px] overflow-hidden rounded-[8px]"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </div>
    </BaseMinimalCard>
  );
};

export default YoutubeMinimalCard;
