import React from 'react';
import Image from 'next/image';
import { BaseMinimalCard } from './BaseMinimalCard';
import styles from './MemecoinMinimalCard.module.css';
import { motion } from 'framer-motion';

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

type MemeCoinMinimalCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string | null;
  marketCap?: number;
  creator?: string;
  totalStakedEth?: number;
  launchDate?: string;
  communityLogo?: string;
  onCollect: () => void;
  onCommentsClick: () => void;
  onAddToPack?: () => void; 
  joinedCount?: number;
  availableCount?: number;
  initialReactions?: Record<string, number>;
  initialComments?: Comment[];
  isUnlocked?: boolean;
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void;
};

const MemeCoinMinimalCard: React.FC<MemeCoinMinimalCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  marketCap,
  creator,
  totalStakedEth,
  launchDate,
  communityLogo,
  onCollect,
  onCommentsClick,
  onAddToPack,
  joinedCount,
  availableCount,
  initialReactions,
  initialComments,
  isUnlocked,
  onAddComment,
}) => {
  return (
    <BaseMinimalCard
      id={id}
      title={title}
      type="memecoin"
      description={description}
      communityLogo={communityLogo}
      onCollect={onCollect}
      onCommentsClick={onCommentsClick}
      onAddToPack={onAddToPack}
      joinedCount={joinedCount}
      availableCount={availableCount}
      initialReactions={initialReactions}
      initialComments={initialComments}
      isUnlocked={isUnlocked}
      onAddComment={onAddComment}
    >
      <div className={styles.memecoinCard}>
        <div className={styles.memecoinGradient}>
          {imageSrc && (
            <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
          )}
          <div className={styles.memecoinCircle} />
        </div>
        <div className={styles.memecoinInfo}>
          <div className={styles.memecoinStats}>
            <motion.div className={styles.statBox} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {marketCap !== undefined && <div>Market Cap: ${marketCap.toLocaleString()}</div>}
            </motion.div>
            <motion.div className={styles.statBox} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {creator && <div>Creator: {creator}</div>}
            </motion.div>
            <motion.div className={styles.statBox} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {totalStakedEth !== undefined && <div>Total Staked: {totalStakedEth} ETH</div>}
            </motion.div>
            <motion.div className={styles.statBox} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {launchDate && <div>Launched: {new Date(launchDate).toLocaleDateString()}</div>}
            </motion.div>
          </div>
          <button className={styles.tradeButton}>Collect Airdrop</button>
        </div>
      </div>
    </BaseMinimalCard>
  );
};

export default MemeCoinMinimalCard;