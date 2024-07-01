import { Button, Flex, Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Plus } from 'lucide-react';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import CommentsDrawer from './CommentsDrawer';
import NYKSlider from './NYKSlider';
import { useInView } from 'framer-motion';

interface LazyVideoProps {
    src: string;
    poster?: string;
  }
  
  const LazyVideo: React.FC<LazyVideoProps> = ({ src, poster }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, {
      once: true,
      margin: "200px 0px",
    });
  
    useEffect(() => {
      if (inView) {
        setIsLoaded(true);
      }
    }, [inView]);
  
    return (
      <div ref={ref}>
        {isLoaded ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-[16px] object-cover w-full h-full"
          />
        ) : (
          <div className="rounded-[16px] w-full h-full bg-gray-200" />
        )}
      </div>
    );
  };
  
  export default LazyVideo;