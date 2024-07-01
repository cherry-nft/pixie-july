import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card } from '../data/cardsData'

interface AirbnbImageAnimationProps {
  unlockedCards: Card[];
}

const ROTATION_DEGREES = [0, 0, 0, 0, 0];

const IMAGE_ANIMATION_VARIANTS = {
  initial: {
    scale: 0,
  },
  animate: (i: number) => ({
    scale: 1,
    rotate: ROTATION_DEGREES[i]
  }),
  transition: {
    duration: 0.5,
    type: 'spring',
    stiffness: 360,
    damping: 20
  }
}

const NOTIFICATION_VARIANTS = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
}

export default function AirbnbImageAnimation({ unlockedCards }: AirbnbImageAnimationProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    if (unlockedCards.length > 5) {
      setNotificationCount(unlockedCards.length - 5);
      setShowNotification(true);
    }
  }, [unlockedCards]);

  return (
    <motion.div
      className='flex flex-row items-center justify-center w-full h-full rounded-xl overflow-visible p-2 relative'
    >
      {unlockedCards.slice(0, 5).map((card, index) => (
        <motion.div
          key={card.id}
          initial={IMAGE_ANIMATION_VARIANTS.initial}
          animate={IMAGE_ANIMATION_VARIANTS.animate(index)}
          transition={IMAGE_ANIMATION_VARIANTS.transition}
          className='w-12 h-12 border-2 border-gray-100 rounded-lg -m-3 shadow-lg relative overflow-visible'
        >
          <Image
            src={card.imageSrc || card.videoSrc || '/images/pixie-alt-icon.svg'}
            alt={card.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            variants={NOTIFICATION_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            +{notificationCount}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}



