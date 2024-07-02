import React, { useEffect, useRef } from 'react';
import { BaseMinimalCard } from './BaseMinimalCard';

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}


interface TikTokMinimalCardProps {
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

export const TikTokMinimalCard: React.FC<TikTokMinimalCardProps> = ({
  id,
  title,
  description,
  url,
  initialComments,
  onAddComment,
  onCommentsClick,
  onCollect,
  onAddToPack,
  joinedCount,
  availableCount,
  initialReactions,
  isUnlocked,
}) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedRef.current && url) { // Check if url exists
      embedRef.current.innerHTML = '';
      if (url.includes('tiktok.com')) {
        const videoId = url.split('/').pop()?.split('?')[0];
        const embedHtml = `
          <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}" style="min-width: 325px; max-height: 600px;">
            <section></section>
          </blockquote>
        `;
        embedRef.current.innerHTML = embedHtml;

        // Load TikTok embed script
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }
    }
  }, [url]);

  return (
    <BaseMinimalCard
      id={id}
      title={title}
      description={description}
      type="tiktok"
      onCommentsClick={onCommentsClick}
      onCollect={onCollect}
      onAddToPack={onAddToPack}
      isEmbed={true}
      isTikTok={true}
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
          className="w-full max-w-[325px] max-h-[577px] overflow-hidden rounded-[8px]"
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

export default TikTokMinimalCard;
