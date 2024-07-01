import Pixienav from '@components/Pixienav';
import { cards } from '@data/cardsData';
import { Separator } from '@radix-ui/react-separator';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronDown, ChevronUp, ExternalLink, Instagram, Share2, Twitter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './WalletPage.module.css';
import { useCollectedCards } from '@components/contexts/CollectedCardsContext';

const profileImages = [
  '/images/playtime/bath.png',
  '/images/playtime/button.png',
  '/images/playtime/candle.png',
  '/images/playtime/chick.png',
  '/images/playtime/cloud.png',
  '/images/playtime/crystal-ball.png',
  '/images/playtime/duck.png',
  '/images/playtime/glasses.png',
  '/images/playtime/hat.png',
  '/images/playtime/heart.png',
  '/images/playtime/joystick.png',
  '/images/playtime/key.png',
  '/images/playtime/lamp.png',
  '/images/playtime/magnifier.png',
  '/images/playtime/moon.png',
  '/images/playtime/phone.png',
  '/images/playtime/plane.png',
  '/images/playtime/purse.png',
  '/images/playtime/shark.png',
  '/images/playtime/sled.png',
  '/images/playtime/spatula.png',
  '/images/playtime/t-rex.png',
  '/images/playtime/teddy-bear.png',
  '/images/playtime/tennis.png',
  '/images/playtime/turtle.png',
];

interface UserData {
  name: string;
  avatar: string;
  collectedItems: {
    id: string;
    type: string;
    src: string | null | undefined;
    title: string;
    tokenId: string;
  }[];
}

const WalletPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { collectedCards } = useCollectedCards();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [communitiesOpen, setCommunitiesOpen] = useState(false);
  const [itemsOpen, setItemsOpen] = useState(false);
  const [profileImageOpen, setProfileImageOpen] = useState(false);
  const [selectedProfileImage, setSelectedProfileImage] = useState(
    profileImages[0]
  );
  const [shareLink, setShareLink] = useState('');
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [packsOpen, setPacksOpen] = useState(false);
  const [packs, setPacks] = useState([
    { id: 1, title: 'Pack 1', cards: [1, 4, 7] },
  ]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<any | null>(null);

  const handlePlayPause = () => {
    // Implement play/pause logic here
    console.log('Play/Pause clicked');
  };

  const handleRewind = () => {
    // Implement rewind logic here
    console.log('Rewind clicked');
  };

  useEffect(() => {
    const handleResetUnlockState = () => {
      // Reset the wallet page state here
      setUserData((prevData) => {
        if (prevData) {
          return {
            ...prevData,
            collectedItems: [],
          };
        }
        return null;
      });
    };

    window.addEventListener('resetUnlockState', handleResetUnlockState);

    return () => {
      window.removeEventListener('resetUnlockState', handleResetUnlockState);
    };
  }, []);

  useEffect(() => {
    if (address) {
      setUserData({
        name: address === 'CuratorName.eth' ? 'CuratorName.eth' : 'Unknown User',
        avatar: selectedProfileImage,
        collectedItems: collectedCards.map((card) => ({
          id: card.id,
          type: card.videoSrc ? 'video' : 'image',
          src: card.videoSrc || card.imageSrc,
          title: card.title,
          tokenId: card.id === "2" ? 'Detroit Member' : `Token ID #${Math.floor(Math.random() * 1000)}`,
        })),
      });
    }
  }, [address, selectedProfileImage, collectedCards]);

  const handleShare = async () => {
    // This is a placeholder for the actual image composition logic
    // In a real implementation, you'd use a library like html2canvas or a server-side solution
    const compositeImageUrl = `/api/generate-composite?background=/profile-media.svg&profile=${selectedProfileImage}`;

    const shareableLink = `${
      window.location.origin
    }/shared-profile?image=${encodeURIComponent(compositeImageUrl)}`;
    setShareLink(shareableLink);
  };

  const formatViews = (views: number) => {
    if (views >= 10000) {
      const formattedViews = (views / 1000).toFixed(1);
      return `${parseFloat(formattedViews)}K`;
    }
    return views.toString();
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, url: 'https://twitter.com/username' },
    { icon: <Bot size={20} />, url: 'https://discord.gg/username' },
    { icon: <ExternalLink size={20} />, url: 'https://opensea.io/username' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/username' },
  ];

  if (!userData) {
    return <div>Loading...</div>;
  }

  const folders = [
    {
      title: 'Stickers',
      count: 10,
      previews: [
        '/images/sticker-default.png',
        '/images/sticker-default.png',
        '/images/sticker-default.png',
      ],
    },
    {
      title: 'Badges',
      count: 5,
      previews: ['/images/token-default.png', '/images/token-default.png'],
    },
    {
      title: 'Invitations',
      count: 3,
      previews: ['/images/traits-default.png'],
    },
    {
      title: 'All Traits',
      count: 15,
      previews: [
        '/images/traits-default.png',
        '/images/traits-default.png',
        '/images/traits-default.png',
      ],
    },
  ];

  const stats = {
    communities: 5,
    totalStickers: 50,
    claimedStickers: 30,
    profileViews: 12345,
  };

  const renderMedia = (item: any) => {
    if (item.type === 'video') {
      return (
        <video
          src={item.src}
          className={styles.media}
          controls
          width={150}
          height={150}
        />
      );
    } else {
      return (
        <Image
          src={item.src || '/pixie-logo.svg'}
          alt={item.title}
          width={150}
          height={150}
          className={styles.media}
        />
      );
    }
  };

  return (
    <div className={`${styles.container} sf-pro-medium`}>
      <Pixienav 
        tabIndex={0}
        currentlyPlaying={currentlyPlaying}
        onPlayPause={handlePlayPause}
        onRewind={handleRewind}
      />
      <h1 className={`${styles.title} sf-pro-bold`}>
        {userData.name}&apos;s Wallet
      </h1>

      <div className={styles.profileMedia}>
        <Image
          src="/profile-media-v2.svg"
          alt="Profile Media"
          width={300}
          height={200}
        />
        <div className={styles.profileImageContainer}>
          <Image
            src={selectedProfileImage}
            alt="Profile"
            width={50}
            height={50}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.userInfo}>
          <Image
            src={userData.avatar}
            alt="User Avatar"
            width={30}
            height={30}
            className={styles.userAvatar}
          />
          <span className={`${styles.userName} sf-pro-bold`}>
            {userData.name}
          </span>
        </div>
        <div className={styles.profileActions}>
          <button
            className={`${styles.actionButton} sf-pro-medium`}
            onClick={() => setProfileImageOpen(!profileImageOpen)}
          >
            Change Profile Picture
          </button>
          <button
            className={`${styles.actionButton} sf-pro-medium`}
            onClick={handleShare}
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
        <div className={styles.statline}>
          <div className={styles.stats}>
            {[
              { value: stats.communities, label: 'Communities' },
              { value: stats.totalStickers, label: 'Stickers' },
              { value: stats.claimedStickers, label: 'Claimed' },
              { value: formatViews(stats.profileViews), label: 'Views' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={`${styles.statValue} sf-pro-bold`}>
                  {stat.value}
                </span>
                <span className={`${styles.statLabel} sf-pro-medium`}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={styles.socialLink}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {shareLink && (
        <div className={styles.shareDialog}>
          <p className="sf-pro-medium">Share this link:</p>
          <input
            type="text"
            value={shareLink}
            readOnly
            className={`${styles.shareLink} sf-pro-medium`}
          />
        </div>
      )}

      <AnimatePresence>
        {profileImageOpen && (
          <motion.div
            className={styles.profileImageGrid}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {profileImages.map((image, index) => (
              <motion.div
                key={index}
                className={styles.profileImageItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedProfileImage(image);
                  setProfileImageOpen(false);
                }}
              >
                <Image
                  src={image}
                  alt={`Profile ${index}`}
                  width={50}
                  height={50}
                  className={styles.profileImage}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Separator className={styles.separator} />

      <div
        className={`${styles.sectionHeader} sf-pro-bold`}
        onClick={() => setCommunitiesOpen(!communitiesOpen)}
      >
        <h2>Communities Joined</h2>
        {communitiesOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {communitiesOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mediaScroller}>
              {userData.collectedItems.map((item) => (
                <Link href={`/collection/${item.id}`} key={item.id}>
                  <motion.div
                    className={styles.mediaItem}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderMedia(item)}
                    <div className={styles.itemInfo}>
                      <p className={styles.itemTitle}>{item.title}</p>
                      <p className={styles.itemTokenId}>{item.tokenId}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Separator className={styles.separator} />

      <div
        className={`${styles.sectionHeader} sf-pro-bold`}
        onClick={() => setItemsOpen(!itemsOpen)}
      >
        <h2>Items Collected</h2>
        {itemsOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {itemsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.folderGrid}>
              {folders.map((folder) => (
                <motion.div
                  key={folder.title}
                  className={styles.folder}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenFolder(folder.title)}
                >
                  <div className={styles.folderHeader}>
                    <h3 className="sf-pro-medium">{folder.title}</h3>
                    <span className={`${styles.badge} sf-pro-medium`}>
                      {folder.count}
                    </span>
                  </div>
                  <div className={styles.folderPreview}>
                    {folder.previews.map((preview, index) => (
                      <div key={index} className={styles.previewItem}>
                        <Image
                          src={preview}
                          alt={`${folder.title} preview ${index + 1}`}
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <p className={`${styles.folderCount} sf-pro-medium`}>
                    {folder.count} items
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openFolder && (
          <motion.div
            className={styles.folderPopup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className={styles.folderPopupHeader}>
              <h3 className="sf-pro-medium">{openFolder}</h3>
              <button onClick={() => setOpenFolder(null)}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.folderPopupGrid}>
              {openFolder.startsWith('Pack')
                ? packs
                    .find((pack) => `Pack ${pack.id}` === openFolder)
                    ?.cards.map((cardId) => {
                      const card = cards.find(
                        (c) => c.id === cardId.toString()
                      );
                      return (
                        <div key={cardId} className={styles.folderPopupItem}>
                          <Image
                            src={card?.imageSrc || '/images/default-card.png'}
                            alt={`Card ${cardId}`}
                            width={60}
                            height={60}
                          />
                        </div>
                      );
                    })
                : folders
                    .find((folder) => folder.title === openFolder)
                    ?.previews.map((preview, index) => (
                      <div key={index} className={styles.folderPopupItem}>
                        <Image
                          src={preview}
                          alt={`${openFolder} preview ${index}`}
                          width={60}
                          height={60}
                        />
                      </div>
                    ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Separator className={styles.separator} />

      <div
        className={`${styles.sectionHeader} sf-pro-bold`}
        onClick={() => setPacksOpen(!packsOpen)}
      >
        <h2>My Packs</h2>
        {packsOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {packsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.folderGrid}>
              {packs.map((pack) => (
                <motion.div
                  key={pack.id}
                  className={styles.folder}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenFolder(`Pack ${pack.id}`)}
                >
                  <div className={styles.folderHeader}>
                    <h3 className="sf-pro-medium">{pack.title}</h3>
                    <span className={`${styles.badge} sf-pro-medium`}>
                      {pack.cards.length}
                    </span>
                  </div>
                  <div className={styles.folderPreview}>
                    {pack.cards.slice(0, 3).map((cardId) => {
                      const card = cards.find(
                        (c) => c.id === cardId.toString()
                      );
                      return (
                        <div key={cardId} className={styles.previewItem}>
                          <Image
                            src={
                              card?.imageSrc || '/images/war-film-poster.png'
                            }
                            alt={`Card ${cardId} preview`}
                            width={40}
                            height={40}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className={`${styles.folderCount} sf-pro-medium`}>
                    {pack.cards.length} cards
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openFolder && (
          <motion.div
            className={styles.folderPopup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className={styles.folderPopupHeader}>
              <h3 className="sf-pro-medium">{openFolder}</h3>
              <button onClick={() => setOpenFolder(null)}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.folderPopupGrid}>
              {openFolder.startsWith('Pack')
                ? packs
                    .find((pack) => `Pack ${pack.id}` === openFolder)
                    ?.cards.map((cardId) => {
                      const card = cards.find(
                        (c) => c.id === cardId.toString()
                      );
                      return (
                        <div key={cardId} className={styles.folderPopupItem}>
                          <Image
                            src={card?.imageSrc || '/images/default-card.png'}
                            alt={`Card ${cardId}`}
                            width={60}
                            height={60}
                          />
                        </div>
                      );
                    })
                : folders
                    .find((folder) => folder.title === openFolder)
                    ?.previews.map((preview, index) => (
                      <div key={index} className={styles.folderPopupItem}>
                        <Image
                          src={preview}
                          alt={`${openFolder} preview ${index}`}
                          width={60}
                          height={60}
                        />
                      </div>
                    ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WalletPage;
