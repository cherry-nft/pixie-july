import { Button, Flex, Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Plus } from 'lucide-react';
import React, { ReactNode, useEffect, useState } from 'react';
import CommentsDrawer from './CommentsDrawer';
import NYKSlider from './NYKSlider';
import { useCollectedCards } from '@components/contexts/CollectedCardsContext';
import { Card } from '../data/cardsData';  // Make sure to import the Card type

// Helper function to format numbers
const formatNumber = (num: number): string => {
  if (num < 10000) {
    return num.toString();
  } else if (num < 100000) {
    return (num / 1000).toFixed(1) + 'K';
  } else if (num < 1000000) {
    return Math.floor(num / 1000) + 'K';
  } else {
    return (num / 1000000).toFixed(1) + 'M';
  }
};

// Updated EmojiReactionBar component
const EmojiReactionBar = ({
  initialReactions,
  onReactionChange,
}: {
  initialReactions?: Record<string, number>;
  onReactionChange?: (emoji: string, count: number) => void;
}) => {
  const [reactions, setReactions] = useState(initialReactions || { '🔥': 0, '❤️‍🔥': 0, '🎉': 0 });

  const handleReaction = (emoji: string) => {
    setReactions((prevReactions) => {
      const updatedReactions = { ...prevReactions };
      updatedReactions[emoji] = (updatedReactions[emoji] || 0) + 1;
      if (onReactionChange) {
        onReactionChange(emoji, updatedReactions[emoji]);
      }
      return updatedReactions;
    });
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const emojiVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 0],
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const countVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  return (
    <Flex
      gap="2"
      justify="between"
      style={{ marginTop: '8px', marginBottom: '8px' }}
    >
      <Flex gap="2">
        <AnimatePresence>
          {Object.entries(reactions).map(([emoji, count]) => (
            <motion.button
              key={emoji}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleReaction(emoji)}
              style={{
                background: 'linear-gradient(to bottom, #121212, #000)',
                border: '0.1px solid #000',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.span
                variants={emojiVariants}
                initial="initial"
                animate="animate"
                key={`emoji-${emoji}-${count}`}
              >
                {emoji}
              </motion.span>
              <motion.span
                variants={countVariants}
                initial="initial"
                animate="animate"
                key={`count-${emoji}-${count}`}
                style={{ marginLeft: '4px' }}
              >
                {formatNumber(count)}
              </motion.span>
            </motion.button>
          ))}
        </AnimatePresence>
      </Flex>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => console.log('Share')}
        style={{
          background: 'linear-gradient(to bottom, #121212, #000)',
          border: '0.1px solid #000',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
        }}
      >
        <Text>🔗</Text>
      </motion.button>
    </Flex>
  );
};

// Define sampleMessages before the component
const sampleMessages = [
  {
    id: '1',
    user: 'User1',
    message: 'Great post!',
    emoji: '😊',
    avatar: '/default-avatar.png',
    isCommunityMember: false,
  },
  {
    id: '2',
    user: 'User2',
    message: 'Interesting perspective.',
    emoji: '🤔',
    avatar: '/default-avatar.png',
    isCommunityMember: true,
  },
  // Add more sample messages as needed
];

// Update the Comment interface
interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  emoji?: string;
  avatar?: string;
  isCommunityMember?: boolean;
}

interface BaseMinimalCardProps {
  id: string;
  title: string;
  description: string;
  type: Card['type'];  // Use the type from the Card interface
  communityLogo?: string;
  onCollect?: (id: string) => void; // Make this optional
  onCommentsClick?: () => void; // Make this optional
  children: ReactNode;
  isEmbed?: boolean;
  onAddToPack?: () => void;
  isTikTok?: boolean;
  joinedCount?: number;
  availableCount?: number;
  initialReactions?: Record<string, number>;
  initialComments?: Comment[];
  onAddComment?: (cardId: string, comment: Omit<Comment, 'id'>) => void;
  // Add any other props that might be in commonProps
}

export const BaseMinimalCard: React.FC<BaseMinimalCardProps> = ({
  id,
  title,
  description,
  type,  // Add this prop
  communityLogo,
  onCollect,
  onCommentsClick,
  children,
  isEmbed = false,
  onAddToPack,
  isTikTok,
  joinedCount,
  availableCount,
  initialReactions = { '🔥': 0, '❤️‍🔥': 0, '🎉': 0 },
  initialComments = [],
  onAddComment,
}) => {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(false);
  const { collectedCards, addCollectedCards } = useCollectedCards();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [cardReactions, setCardReactions] = useState(initialReactions);

  useEffect(() => {
    const isCardCollected = collectedCards.some(card => card.id === id);
    setUnlocked(isCardCollected);
  }, [id, collectedCards]);

  useEffect(() => {
    const handleResetSlideToUnlock = () => {
      setUnlocked(false);
      setCardReactions({ '🔥': 0, '❤️‍🔥': 0, '🎉': 0 });
    };

    window.addEventListener('resetSlideToUnlock', handleResetSlideToUnlock);

    return () => {
      window.removeEventListener('resetSlideToUnlock', handleResetSlideToUnlock);
    };
  }, []);

  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) {
      router.push(`/collection/${encodeURIComponent(id)}`);
    }
  };

  const handleUnlock = (value: boolean) => {
    if (value && !unlocked) {
      setUnlocked(true);
      addCollectedCards([{ 
        id, 
        title, 
        description, 
        type,  // Use the type prop here
        stickers: { claimed: 0, available: 0, total: 0 },
        badges: { claimed: 0, available: 0, total: 0 },
        invitations: { claimed: 0, available: 0, total: 0 },
        allTraits: { claimed: 0, available: 0, total: 0 }
      }]);
      if (onCollect) {
        onCollect(id);
      }
    }
  };

  const handleCommentsClick = () => {
    if (onCommentsClick) {
      onCommentsClick();
    }
    setIsCommentsOpen(true);
  };

  const handleReactionChange = (emoji: string, count: number) => {
    setCardReactions(prevReactions => ({
      ...prevReactions,
      [emoji]: count
    }));
  };

  const handleAddComment = React.useCallback((text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      user: "CurrentUser",
      text,
      timestamp: new Date().toISOString(),
      emoji: '😊',
      avatar: '/default-avatar.png',
      isCommunityMember: false
    };
    setComments(prevComments => [...prevComments, newComment]);
    if (onAddComment) {
      onAddComment(id, newComment);
    }
  }, [id, onAddComment]);

  return (
    <motion.div
      className="rounded-[24px] bg-transparent w-full h-full flex flex-col justify-center items-center pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        {!isEmbed && communityLogo && (
          <div className="flex justify-center mb-4">
            <Image
              src={communityLogo}
              alt={title}
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        )}

        <div
          onClick={handleMediaClick}
          className="relative w-full aspect-square mb-2"
        >
          {children}
        </div>

        <div className={`px-2 ${isEmbed ? 'pt-2 pb-4' : 'py-1'}`}>
          <Flex
            justify="between"
            align="center"
            style={{ marginBottom: '8px' }}
          >
            <Text className="sf-pro-rounded-medium" size="1" style={{ color: 'rgba(220, 220, 220, 1)' }}>
              Joined: {joinedCount?.toLocaleString()}
            </Text>
            <Text className="sf-pro-rounded-medium" size="1" style={{ color: 'rgba(220, 220, 220, 1)' }}>
              Available: {availableCount?.toLocaleString()}
            </Text>
          </Flex>

          <Flex justify="between" align="center" style={{ marginTop: '8px' }}>
            <EmojiReactionBar
              initialReactions={cardReactions}
              onReactionChange={handleReactionChange}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onAddToPack}
              style={{
                background: 'linear-gradient(to bottom, #121212, #0d0d0d)',
                border: '0.9px solid #000',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              <Text className="sf-pro-rounded-bold" style={{ color: 'white', marginRight: '4px', fontSize: '10px' }}>Add To Pack +</Text>
            </motion.button>
          </Flex>

          <Flex
            justify="between"
            align="start"
            style={{
              marginTop: isEmbed ? '4px' : '5px',
              marginBottom: isEmbed ? '4px' : '5px',
            }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-neutral-500">{description}</p>
            </div>
            <Button
              onClick={handleCommentsClick}
              style={{
                background: 'linear-gradient(to bottom, #121212, #000)',
                border: '0.1px solid #000',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
              }}
            >
              <Text size="6" role="img" aria-label="chat">
                💬
              </Text>
            </Button>
          </Flex>
          {unlocked ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-green-500 font-semibold mt-2"
              style={{ padding: '0px 0px 20px 0px' }}
            >
              <Text style={{ color: '#03c6fc' }}>Added to your wallet!</Text>
            </motion.div>
          ) : (
            <div className="flex justify-center mt-4 sf-pro-rounded-black">
              <NYKSlider
                unlocked={unlocked}
                setUnlocked={handleUnlock}
                sliderWidth={300}
                handleWidth={40}
                padding={2}
                borderRadius={8}
                cardId={id}
              />
            </div>
          )}
        </div>
      </div>

      <CommentsDrawer
        key={`comments-${id}`}
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        initialMessages={comments.map(comment => ({
          ...comment,
          message: comment.text,
          emoji: comment.emoji || '😊',
          avatar: comment.avatar || '/default-avatar.png',
          isCommunityMember: comment.isCommunityMember || false
        }))}
        onAddComment={(comment) => handleAddComment(comment)}
        cardId={id}
      />
    </motion.div>
  );
};
