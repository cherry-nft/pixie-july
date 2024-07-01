import { Badge, Box, Flex, IconButton, Text } from '@radix-ui/themes';
import { Component, ImageUp, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './CuratorBar.module.css';
import AirbnbImageAnimation from './Airbnb';
import CheckoutDrawer from './CheckoutDrawer';
import { Card, cards } from '../data/cardsData';
import { useCollectedCards } from '@components/contexts/CollectedCardsContext';

type CuratorBarProps = {
  tabIndex: number;
  isSignedIn: boolean;
  isCollecting: boolean;
  currentPack: { title: string; cards: string[] } | null;
  onCollect: () => void;
  onReset: () => void;
};

export const CuratorBar: React.FC<CuratorBarProps> = ({
  tabIndex,
  isSignedIn,
  isCollecting,
  currentPack,
  onCollect,
  onReset,
}) => {
  const router = useRouter();
  const [bagCount, setBagCount] = useState(0);
  const [unlockedCards, setUnlockedCards] = useState<Card[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { clearCollectedCards } = useCollectedCards();

  const handleUnlock = useCallback((event: CustomEvent) => {
    const cardId = event.detail.cardId;
    const unlockedCard = cards.find(card => card.id === cardId);
    if (unlockedCard) {
      setBagCount(prevCount => prevCount + 1);
      setUnlockedCards(prevCards => [...prevCards, unlockedCard]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('unlockCollectible', handleUnlock as EventListener);
    return () => {
      window.removeEventListener('unlockCollectible', handleUnlock as EventListener);
    };
  }, [handleUnlock]);

  const handleCheckoutOpen = () => {
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  const handleConfirmCheckout = () => {
    // Handle the confirmation logic here
    setIsCheckoutOpen(false);
    setBagCount(0);
    setUnlockedCards([]);
  };

  const handleUploadClick = () => {
    router.push('/thunder');
  };

  const handleSonicsClick = () => {
    router.push('/sonics');
  };

  const handleReset = () => {
    setBagCount(0);
    setUnlockedCards([]);
    clearCollectedCards(); // Clear collected cards in the global context
    // Dispatch a custom event to reset the unlock state of cards
    window.dispatchEvent(new CustomEvent('resetUnlockState'));
    // Dispatch a new event to reset the slide to unlock feature
    window.dispatchEvent(new CustomEvent('resetSlideToUnlock'));
    onReset();
  };

  return (
    <>
      <Box className={`${styles.curatorBarContainer} ${styles.mobileAdjust}`}>
        <Flex className={styles.innerFlex} justify="between" align="center">
          <Flex align="center" gap="3">
            <Flex align="center" gap="1" className={styles.bagCount}>
              <Text size="6" aria-label="bag">🛍️</Text>
              <Badge size="2" variant="surface">
                {bagCount}
              </Badge>
            </Flex>
          </Flex>

          <Box className={styles.airbnbAnimationContainer} onClick={handleCheckoutOpen}>
            <AirbnbImageAnimation unlockedCards={unlockedCards} />
          </Box>

          <Flex align="center" gap="3">
            <IconButton variant="ghost" onClick={handleUploadClick} className={styles.actionButton}>
              <Component size={16} />
            </IconButton>
            <IconButton variant="ghost" onClick={handleSonicsClick} className={styles.actionButton}>
              <ImageUp size={16} />
            </IconButton>
            {currentPack && (
              <Text size="1" className={styles.packInfo}>
                Current Pack: {currentPack.title} ({currentPack.cards.length} cards)
              </Text>
            )}
            <IconButton variant="ghost" onClick={handleReset} className={styles.actionButton}>
              <RefreshCw size={16} />
            </IconButton>
          </Flex>
        </Flex>
      </Box>

      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={handleCheckoutClose}
        unlockedCards={unlockedCards}
        onConfirm={handleConfirmCheckout}
      />
    </>
  );
};

export default CuratorBar;
