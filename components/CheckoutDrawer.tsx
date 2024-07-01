import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../data/cardsData';
import styles from './CheckoutDrawer.module.css';
import { useCollectedCards } from '@components/contexts/CollectedCardsContext';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedCards: Card[];
  onConfirm: () => void;
}

const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  isOpen,
  onClose,
  unlockedCards,
  onConfirm,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { addCollectedCards } = useCollectedCards();

  const handleConfirm = () => {
    setShowConfetti(true);
    addCollectedCards(unlockedCards);
    setTimeout(() => {
      setShowConfetti(false);
      onConfirm();
    }, 2000);
  };

  const confettiVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#97C30A'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.drawer}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className={styles.header}>
            <h2 className="sf-pro-rounded-bold">Join Communities</h2>
            <button className="sf-pro-rounded-bold" onClick={onClose}>Close</button>
          </div>
          <div className={styles.content}>
            <div className={styles.cardGrid}>
              {unlockedCards.map((card) => (
                <div key={card.id} className={styles.cardItem}>
                  <Image
                    src={card.imageSrc || card.videoSrc || '/default-image.png'}
                    alt={card.title}
                    width={80}
                    height={80}
                    className={styles.cardImage}
                  />
                  <p className={styles.cardTitle}>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.confirmButton} onClick={handleConfirm}>
              Confirm and Join Communities
            </button>
          </div>

          <AnimatePresence>
            {showConfetti && (
              <>
                {[...Array(100)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.confetti}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={confettiVariants}
                    style={{
                      backgroundColor: confettiColors[i % confettiColors.length],
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
                <motion.div
                  className={styles.confirmationMessage}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  🎉 Welcome to your new communities! 🎉
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutDrawer;
