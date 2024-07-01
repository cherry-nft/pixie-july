import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { BaseMinimalCard } from './BaseMinimalCard';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

interface MusicMinimalCardProps {
  id: string;
  title: string;
  description: string;
  communityLogo?: string;
  imageSrc?: string | null;
  audioSrc?: string; // Make this optional
  onCommentsClick: () => void;
  onCollect: () => void;
  onPlayPause: (isPlaying: boolean, cardData: { title: string, description: string, imageSrc: string, audioSrc: string }) => void;
  isCurrentlyPlaying: boolean;
  onRewind: () => void;
  onAddToPack?: () => void;
  joinedCount?: number;
  availableCount?: number;
  initialReactions?: Record<string, number>;
  initialComments: Comment[];
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void;
}

export const MusicMinimalCard = forwardRef<{ rewind: () => void }, MusicMinimalCardProps>(({
  id,
  title,
  description,
  communityLogo,
  imageSrc,
  audioSrc,
  onCommentsClick,
  onCollect,
  onPlayPause,
  isCurrentlyPlaying,
  onRewind,
  onAddToPack,
  joinedCount,
  availableCount,
  initialReactions,
  initialComments,
  onAddComment,
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(isCurrentlyPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(isCurrentlyPlaying);
    if (isCurrentlyPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isCurrentlyPlaying]);

  useImperativeHandle(ref, () => ({
    rewind: () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        onRewind();
      }
    }
  }));

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    onPlayPause(newPlayingState, { title, description, imageSrc: imageSrc || '', audioSrc: audioSrc || '' });
  };

  return (
    <BaseMinimalCard
      id={id}
      title={title}
      type="music"
      description={description}
      communityLogo={communityLogo}
      onCommentsClick={onCommentsClick}
      onCollect={onCollect}
      joinedCount={joinedCount}
      availableCount={availableCount}
      initialReactions={initialReactions}
      initialComments={initialComments}
      onAddComment={onAddComment}
    >
      <div className="relative w-full aspect-square">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-[16px]"
          />
        )}
        <button
          onClick={handlePlayPause}
          className="absolute bottom-4 right-4 p-2 bg-black opacity-60 rounded-full shadow-md"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
      {audioSrc && <audio ref={audioRef} src={audioSrc} />}
    </BaseMinimalCard>
  );
});

MusicMinimalCard.displayName = 'MusicMinimalCard';
