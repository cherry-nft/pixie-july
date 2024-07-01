import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface SliderProps {
  unlocked: boolean;
  setUnlocked: (value: boolean) => void;
  sliderWidth: number;
  handleWidth: number;
  padding: number;
  borderRadius: number;
  cardId: string; // Add this prop
}

const NYKSlider: React.FC<SliderProps> = ({ unlocked, setUnlocked, sliderWidth, handleWidth, padding, borderRadius, cardId }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragPosition = useMotionValue(0);
  const maxDragLimit = sliderWidth - handleWidth - padding * 2;

  const activeWidth = useTransform(dragPosition, (x) => {
    if (x <= 0) return 0;
    if (x >= maxDragLimit) return sliderWidth - padding * 2;
    return x + handleWidth;
  });

  const textVisibility = useTransform(dragPosition, [0, maxDragLimit], [1, 0]);
  
  const handleDragEnd = () => {
    if (dragPosition.get() >= maxDragLimit * 0.8) { // Adjust threshold to 80%
      setUnlocked(true);
      dragPosition.set(maxDragLimit);
      window.dispatchEvent(new CustomEvent('unlockCollectible', { detail: { cardId } }));
    } else {
      dragPosition.set(0);
    }
  };

  useEffect(() => {
    if (unlocked) {
      dragPosition.set(maxDragLimit);
    }
  }, [unlocked, maxDragLimit, dragPosition]);

  return (
    <AnimatePresence>
      {!unlocked && (
        <motion.div
          className="relative flex items-center overflow-hidden rounded-full"
          ref={sliderRef}
          style={{
            padding: padding,
            background: "linear-gradient(180deg, #101010, #302f34 150%)",
            width: sliderWidth,
            height: '32px', // Reduced height
            boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 30%), inset 0 0 0 1px #4C4B50",
            borderRadius: borderRadius, // Use the new prop here
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-[1px] z-[1] rounded-full"
            style={{
              width: activeWidth,
              background: "linear-gradient(180deg, #101010, #302f34 150%)",
              boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 30%)",
            }}
          />
          <motion.div
            className="z-[1] flex items-center justify-center rounded-full"
            drag="x"
            dragConstraints={{
              left: 0,
              right: maxDragLimit, // Use maxDragLimit directly
            }}
            dragElastic={0}
            style={{
              width: handleWidth,
              height: '28px', // Reduced height
              background: "linear-gradient(180deg, #F1F1F1 50%, #C4C4C4 50%)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
              x: dragPosition,
              borderRadius: borderRadius, // Use the same borderRadius here
            }}
            onDragEnd={handleDragEnd}
          />
          <motion.span
            className="absolute left-0 right-0 text-center text-white text-xs" // Reduced font size
            style={{ opacity: textVisibility }}
          >
            Slide to Unlock
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NYKSlider;
