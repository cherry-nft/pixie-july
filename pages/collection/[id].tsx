import { useRouter } from 'next/router';
import Image from 'next/image';
import { cards } from '@data/cardsData';
import Pixienav from "@components/Pixienav";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ShiftCard } from '@components/ShiftCard';
import { Button } from '@radix-ui/themes';

const CollectionProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [expandedFolder, setExpandedFolder] = useState<number | null>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef(null);

  const cardData = id ? cards.find(card => card.id === id) : null;

  const fallbackCard = {
    id: "default",
    title: "Default Card",
    description: "No card found with the given ID.",
    imageSrc: "/path/to/default/image.jpg",
    videoSrc: null,
    audioSrc: null,
    type: "standard",
    url: null,
    artist: "Unknown",
    releaseDate: "N/A",
    format: "N/A",
    owner: "N/A",
    latestCosign: "N/A",
    mostCosigns: "N/A",
    firstCosign: "N/A",
    stickers: { claimed: 0, available: 0, total: 0 },
    badges: { claimed: 0, available: 0, total: 0 },
    invitations: { claimed: 0, available: 0, total: 0 },
    allTraits: { claimed: 0, available: 0, total: 0 },
  };

  const collectionData = cardData || fallbackCard;


  useEffect(() => {
    // Store the current card ID when the component mounts
    if (id) {
      localStorage.setItem('lastViewedCardId', id as string);
    }
  }, [id]);

  useEffect(() => {
    // if (typeof window !== 'undefined' && backgroundRef.current) {
    //   const loadUnicornStudio = async () => {
    //     try {
    //       // Wait for UnicornStudio to be available
    //       while (!window.UnicornStudio) {
    //         await new Promise(resolve => setTimeout(resolve, 100));
    //       }
          
    //       // Wait for UnicornStudio to be ready
    //       while (!window.UnicornStudio.isReady || !window.UnicornStudio.isReady()) {
    //         await new Promise(resolve => setTimeout(resolve, 100));
    //       }
          
    //       await window.UnicornStudio.addScene({
    //         elementId: 'unicorn-background',
    //         fps: 60,
    //         scale: 1,
    //         dpi: 1.5,
    //         filePath: '/images/gradients/black-gradient.json',
    //         interactivity: {
    //           mouse: {
    //             disableMobile: true,
    //             momentum: 1.1
    //           },
    //           scroll: {
    //             disableMobile: true,
    //             momentum: 1.1
    //           }
    //         }
    //       });
    //     } catch (err) {
    //       console.error("Failed to load UnicornStudio:", err);
    //     }
    //   };

    //   loadUnicornStudio();
    // }
  }, []);

  useEffect(() => {
    if (embedRef.current && collectionData.type === 'tiktok' && collectionData.url) {
      embedRef.current.innerHTML = '';
      const videoId = collectionData.url.split('/').pop()?.split('?')[0];
      const embedHtml = `
        <blockquote class="tiktok-embed" cite="${collectionData.url}" data-video-id="${videoId}" style="max-width: 325px;">
          <section></section>
        </blockquote>
      `;
      embedRef.current.innerHTML = embedHtml;

      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (embedRef.current && collectionData.type === 'youtube' && collectionData.url) {
      embedRef.current.innerHTML = '';
      const videoId = collectionData.url.includes('youtu.be') 
        ? collectionData.url.split('/').pop()?.split('?')[0] 
        : collectionData.url.split('v=')[1]?.split('&')[0];
      const embedHtml = `
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
      embedRef.current.innerHTML = embedHtml;
    }
  }, [collectionData]);

  const folders = [
    { 
      title: "Stickers", 
      content: "Sticker content placeholder",
      subtext: collectionData?.stickers || { claimed: 0, available: 0, total: 0 }
    },
    { 
      title: "Badges", 
      content: "Badge content placeholder",
      subtext: collectionData?.badges || { claimed: 0, available: 0, total: 0 }
    },
    { 
      title: "Invitations", 
      content: "Invitation content placeholder",
      subtext: collectionData?.invitations || { claimed: 0, available: 0, total: 0 }
    },
    { 
      title: "All Traits", 
      content: "All traits content placeholder",
      subtext: collectionData?.allTraits || { claimed: 0, available: 0, total: 0 }
    },
  ];

  const handleFolderClick = (index: number) => {
    setExpandedFolder(expandedFolder === index ? null : index);
  };

  const folderVariants = {
    closed: { width: "100%", height: "120px", borderRadius: "20px" },
    open: (total: number) => ({ 
      width: "100%", 
      height: `${Math.ceil(total / 3) * 120 + 80}px`, // 120px per row + 80px for padding and title
      borderRadius: "30px", 
      zIndex: 10 
    }),
  };

  const appIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleBackClick = () => {
    router.back();
  };

  // const CollectionProfileShiftCard = () => {
  //   const topContent = (
  //     <div className="bg-accent/90 rounded-md text-primary p-4">
  //       <h3 className="text-lg">{collectionData.title}</h3>
  //     </div>
  //   );

  //   const topAnimateContent = (
  //     <>
  //       <motion.img
  //         transition={{ duration: 0.3, ease: "circIn" }}
  //         src={collectionData.imageSrc || ''}
  //         layoutId="collectionImage"
  //         width={78}
  //         height={100}
  //         alt={collectionData.title}
  //         className="rounded-sm absolute top-1.5 right-2 shadow-lg"
  //       />
  //     </>
  //   );

  //   const middleContent = (
  //     <motion.img
  //       src={collectionData.imageSrc || ''}
  //       layoutId="collectionImage"
  //       width={150}
  //       height={200}
  //       alt={collectionData.title}
  //       className="rounded-sm border-2 border-white dark:border-black"
  //       style={{
  //         objectFit: 'contain',
  //         objectPosition: 'center',
  //       }}
  //     />
  //   );

  //   const bottomContent = (
  //     <div className="pb-4">
  //       <div className="flex w-full flex-col gap-1 bg-primary/90 border-t border-t-black/10 rounded-t-lg px-4 pb-4">
  //         <div className="font-sans text-[14px] font-medium text-white dark:text-[#171717] flex gap-1 pt-2.5 items-center">
  //           <p>{collectionData.description}</p>
  //         </div>
  //         <div className="bg-accent/80 dark:bg-accent px-1 py-1 rounded-xl flex flex-col gap-1">
  //           <Button variant="solid" onClick={() => console.log('Join Community')}>
  //             Join Community
  //           </Button>
  //           <Button variant="solid" onClick={() => console.log('View Details')}>
  //             View Details
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <ShiftCard
  //       className="bg-card dark:bg-[#1A1A1A]"
  //       topContent={topContent}
  //       topAnimateContent={topAnimateContent}
  //       middleContent={middleContent}
  //       bottomContent={bottomContent}
  //     />
  //   );
  // };

  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <div 
        id="unicorn-background" 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
      /> */}
      <div className="relative z-10">
        <Pixienav 
          tabIndex={0} 
          currentlyPlaying={false} 
          onPlayPause={() => {}} 
          onRewind={() => {}}
        />
        
        <motion.div 
          className="flex justify-center items-center p-4 sm:p-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="bg-black-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
            <div className="p-6">
              <nav className="flex justify-between items-center mb-6">
                <motion.button 
                  onClick={handleBackClick}
                  className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm transition-all hover:bg-opacity-80"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <motion.button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm transition-all hover:bg-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect
                </motion.button>
              </nav>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="border-2 border-gray-600 rounded-lg">
                  {collectionData.type === 'standard' && collectionData.videoSrc && (
                    <video
                      src={collectionData.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-lg shadow-xl w-full"
                    />
                  )}
                  {(collectionData.type === 'standard' || collectionData.type === 'music') && collectionData.imageSrc && (
                    <Image 
                      src={collectionData.imageSrc} 
                      alt={collectionData.title} 
                      width={400} 
                      height={400} 
                      className="rounded-lg shadow-xl w-full"
                    />
                  )}
                  {(collectionData.type === 'tiktok' || collectionData.type === 'youtube') && (
                    <div 
                      ref={embedRef} 
                      className="w-full rounded-lg shadow-xl overflow-hidden"
                    />
                  )}
                </div>
                {collectionData.type === 'music' && collectionData.audioSrc && (
                  <audio 
                    src={collectionData.audioSrc} 
                    controls 
                    className="w-full mt-4"
                  />
                )}
              </motion.div>

              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* <CollectionProfileShiftCard /> */}
              </motion.div>

              <motion.h1 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {collectionData.title}
              </motion.h1>
              <motion.p 
                className="text-sm mb-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {collectionData.description}
              </motion.p>
              <motion.button 
                className="w-full bg-gradient-to-r from-[#0d358d] to-[#2b95ff] text-white px-4 py-2 rounded-lg font-bold text-sm mb-8 transition-all hover:from-[#121212] hover:to-[#121212]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, staggerChildren: 0.1 }}
              >
                {folders.map((folder, index) => (
                  <motion.div
                    key={folder.title}
                    className="bg-gray-800 p-4 rounded-2xl cursor-pointer overflow-hidden"
                    variants={folderVariants}
                    custom={folder.subtext.total}
                    initial="closed"
                    animate={expandedFolder === index ? "open" : "closed"}
                    onClick={() => handleFolderClick(index)}
                    layout
                  >
                    <motion.div className="flex justify-between items-center mb-2" layout="position">
                      <h2 className="text-lg font-bold">{folder.title}</h2>
                      <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {folder.subtext.available}
                      </div>
                    </motion.div>
                    
                    {expandedFolder !== index && (
                      <motion.div 
                        className="grid grid-cols-3 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {[...Array(Math.min(3, folder.subtext.available))].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-700 rounded-lg aspect-square flex items-center justify-center border-2 border-cyan-400"
                            variants={appIconVariants}
                          >
                            <span className="text-xl">🚀</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    <AnimatePresence>
                      {expandedFolder === index && (
                        <motion.div 
                          className="grid grid-cols-3 gap-4 mt-4"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            visible: { transition: { staggerChildren: 0.05 } },
                          }}
                        >
                          {[...Array(folder.subtext.total)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`
                                bg-gray-700 rounded-xl aspect-square flex items-center justify-center
                                ${i < folder.subtext.claimed 
                                  ? 'border border-gray-600' // Claimed stickers
                                  : 'border-2 border-cyan-400 cursor-pointer'} // Available stickers
                              `}
                              variants={appIconVariants}
                              whileHover={i >= folder.subtext.claimed ? { scale: 1.05 } : {}}
                              whileTap={i >= folder.subtext.claimed ? { scale: 0.95 } : {}}
                            >
                              <span className="text-2xl">🚀</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

  );
};

export default CollectionProfile;

