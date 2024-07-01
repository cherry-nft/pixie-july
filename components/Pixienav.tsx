import { Flex, Box, IconButton, Text, Avatar } from '@radix-ui/themes';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause, Menu } from 'lucide-react';
import Link from 'next/link';
import styles from './Pixienav.module.css';

type PixienavProps = {
  tabIndex: number;
  currentlyPlaying: any;
  onPlayPause: () => void;
  onRewind: () => void;
  userName?: string;
  userAvatar?: string;
  className?: string;
};

export const Pixienav: React.FC<PixienavProps> = ({ tabIndex, currentlyPlaying, onPlayPause, onRewind }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const backgroundRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && backgroundRef.current) {
  //     window.UnicornStudio.addScene({
  //       elementId: 'pixienav-background',
  //       fps: 60,
  //       scale: 1,
  //       dpi: 1.5,
  //       filePath: '/images/gradients/colorful-gradient.json',
  //       interactivity: {
  //         mouse: {
  //           disableMobile: true,
  //           momentum: 1.1
  //         },
  //         scroll: {
  //           disableMobile: true,
  //           momentum: 1.1
  //         }
  //       }
  //     }).catch((err) => {
  //       console.error(err);
  //     });
  //   }
  // }, []);

  const badgeVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95, rotate: -5 }
  };

  const profileMenuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: 'none' as const },
    open: { opacity: 1, y: 0, pointerEvents: 'auto' as const }
  };

  return (
    <Box className={styles.pixienavContainer}>
      <Flex className={styles.innerFlex} justify="between" align="center">
        <Link href="/">
          <motion.div 
            className={styles.logoWrapper}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/images/pixie-alt-icon.png" alt="Pixie Logo" width={20} height={20} className={styles.logo} />
          </motion.div>
        </Link>
        
        {currentlyPlaying && (
          <Flex align="center" gap="9" className={styles.musicPlayer}>
            <Image 
              src={currentlyPlaying.imageSrc}
              width="24"
              height="24"
              alt={`Album art for ${currentlyPlaying.title}`}
              style={{ borderRadius: 'var(--radius-2)' }}
            />

            <Box className={`${styles.musicTitleWrapper} sf-pro-rounded-bold`}>
              <Text size="1" as="div" weight="medium" className={styles.musicTitle}>
                {currentlyPlaying.title}
              </Text>
              <Box
                position="relative"
                height="2px"
                width="100px"
                style={{
                  backgroundColor: 'var(--gray-a5)',
                  borderRadius: 'var(--radius-1)',
                }}
              >
                <Box
                  position="absolute"
                  height="2px"
                  width="30px"
                  style={{
                    borderRadius: 'var(--radius-1)',
                    backgroundColor: 'var(--gray-a9)',
                  }}
                />
              </Box>
            </Box>
            <IconButton
              tabIndex={tabIndex}
              color="gray"
              variant="ghost"
              radius="full"
              size="1"
              onClick={onPlayPause}
            >
              {currentlyPlaying ? <Pause size={16} /> : <Play size={16} />}
            </IconButton>
          </Flex>
        )}

        <motion.div
          className={styles.curatorBadge}
          variants={badgeVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <Flex align="center" gap="2">
            {/* <Avatar
              src="/pixie-avatar.png"
              fallback="CN"
              size="2"
              radius="full"
              className={styles.curatorAvatar}
            /> */}
            <Text className={`${styles.curatorName} sf-pro-rounded-bold`}>CuratorName.eth</Text>
            {/* <Text className={`${styles.curatorAvatar} sf-pro-rounded-bold`}>*️⃣</Text> */}
          </Flex>
        </motion.div>
      </Flex>

      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            className={`${styles.profileMenu} sf-pro-rounded-bold`}
            variants={profileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Flex direction="column" gap="3">
              <Link href="/wallet/index" className={`${styles.menuItem} sf-pro-rounded-bold`}>Wallet</Link>
              <Link href="/thunder" className={`${styles.menuItem} sf-pro-rounded-bold`}>Create Card</Link>
              <Link href="/sonics" className={`${styles.menuItem} sf-pro-rounded-bold`}>Merge Onchain</Link>
              <Link href="/packs" className={`${styles.menuItem} sf-pro-rounded-bold`}>My Packs</Link>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Pixienav;

