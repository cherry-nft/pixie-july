import { BaseMinimalCard } from '@components/BaseMinimalCard';
import CommentsDrawer from '@components/CommentsDrawer';
import CuratorBar from '@components/CuratorBar';
import MemecoinMinimalCard from '@components/MemecoinMinimalCard';
import { MusicMinimalCard } from '@components/MusicMinimalCard';
import Pixienav from '@components/Pixienav';
import PredictionMinimalCard from '@components/PredictionMinimalCard';
import { StandardMinimalCard } from '@components/StandardMinimalCard';
import TikTokMinimalCard from '@components/TikTokMinimalCard';
import YoutubeMinimalCard from '@components/YoutubeMinimalCard';
import { cards } from '@data/cardsData'; // Import the cards data
import { Button } from '@radix-ui/themes';
import { AnimatePresence, motion, useScroll, useAnimation } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import AddToHomeScreen from '@components/AddToHomeScreen';
import styles from './index.module.css';
import { useRouter } from 'next/router';

// Define a type for the card
type Card = typeof cards[number];

const MainFeed = () => {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<any | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lastViewedCardId, setLastViewedCardId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the last viewed card ID from localStorage when the component mounts
    const storedLastViewedCardId = localStorage.getItem('lastViewedCardId');
    if (storedLastViewedCardId) {
      setLastViewedCardId(storedLastViewedCardId);
    }
  }, []);

  useEffect(() => {
    // Scroll to the last viewed card when the lastViewedCardId changes
    if (lastViewedCardId && containerRef.current) {
      const cardElement = document.getElementById(`card-${lastViewedCardId}`);
      if (cardElement) {
        containerRef.current.scrollTo({
          top: cardElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [lastViewedCardId]);

  const handleCardClick = (cardId: string) => {
    // Store the clicked card ID in localStorage
    localStorage.setItem('lastViewedCardId', cardId);
    setLastViewedCardId(cardId);
    router.push(`/collection/${cardId}`);
  };

  useEffect(() => {
    // Scroll to the last viewed card when the component mounts
    if (lastViewedCardId) {
      const cardElement = document.getElementById(`card-${lastViewedCardId}`);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [lastViewedCardId]);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          setCurrentCard(index);
          if (cards[index].type === 'music') {
            setCurrentlyPlaying(cards[index]);
          } else {
            setCurrentlyPlaying(null);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => observer.disconnect();
  }, []);

  const handlePlayPause = useCallback((isPlaying: boolean, cardData: any) => {
    if (isPlaying) {
      setCurrentlyPlaying(cardData);
    } else {
      setCurrentlyPlaying(null);
    }
  }, []);

  const renderCard = (card: any, index: number) => {
    const commonProps = {
      ...card,
      onPlayPause: (isPlaying: boolean) => handlePlayPause(isPlaying, card),
      isCurrentlyPlaying: currentlyPlaying?.id === card.id,
    };

    const CardComponent = (() => {
      switch (card.type) {
        case 'standard':
          return StandardMinimalCard;
        case 'music':
          return MusicMinimalCard;
        case 'prediction':
          return PredictionMinimalCard;
        case 'memecoin':
          return MemecoinMinimalCard;
        case 'tiktok':
          return TikTokMinimalCard;
        case 'youtube':
          return YoutubeMinimalCard;
        default:
          return null;
      }
    })();

    return CardComponent ? (
      <div ref={el => cardRefs.current[index] = el} className={styles.cardWrapper}>
        <div className={styles.cardContent}>
          <div className={styles.mediaContainer}>
            <CardComponent {...commonProps} className={styles.mediaAsset} />
          </div>
          <div className={styles.sliderContainer}>
            {/* Add your slider component here */}
          </div>
        </div>
      </div>
    ) : null;
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <Pixienav currentlyPlaying={currentlyPlaying} onPlayPause={() => {}} onRewind={() => {}} tabIndex={0} />
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={card.id} id={`card-${card.id}`} onClick={() => handleCardClick(card.id)}>
            {renderCard(card, index)}
          </div>
        ))}
      </div>
      <CuratorBar tabIndex={0} currentPack={null} onReset={() => {}} isSignedIn={false} isCollecting={false} onCollect={() => {}} />
    </div>
  );
};

export default MainFeed;
