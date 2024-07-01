import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, TextField, Flex, Text, Avatar, Link, Switch, Slider } from '@radix-ui/themes';
import { Image as ImageIcon, Music, X, Zap, Sparkles, TrendingUp, MessageCircle } from 'lucide-react';
import Head from 'next/head';
import styles from './Thunder.module.css';
import { useRouter } from 'next/router';  // Add this import

const FilePreview = ({ file, onRemove }: { file: File, onRemove: () => void }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        background: '#f0f8ff',
        borderRadius: '16px',
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}
    >
      <Flex align="center" gap="3">
        <Box
          style={{
            background: '#e6f3ff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {file.type.startsWith('image/') ? (
            <ImageIcon size={24} color="#4A90E2" />
          ) : (
            <Music size={24} color="#4A90E2" />
          )}
        </Box>
        <Flex direction="column">
          <Text weight="bold" style={{ color: '#4A90E2' }}>{file.name}</Text>
          <Text size="1" style={{ color: '#4A90E2' }}>{(file.size / 1024 / 1024).toFixed(2)} MB</Text>
        </Flex>
      </Flex>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onRemove}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <X size={20} color="#4A90E2" />
      </motion.button>
      {previewUrl && (
        <Box
          style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={previewUrl}
            alt="Preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      )}
    </motion.div>
  );
};

const Thunder = () => {
  const [mainContent, setMainContent] = useState('');
  const [isMainContentFocused, setIsMainContentFocused] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [isCollectionNameFocused, setIsCollectionNameFocused] = useState(false);
  const [collectionDescription, setCollectionDescription] = useState('');
  const [isCollectionDescriptionFocused, setIsCollectionDescriptionFocused] = useState(false);
  const [createNFT, setCreateNFT] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [promotionLevel, setPromotionLevel] = useState(0);
  const [price, setPrice] = useState('0');

  const backgroundRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && backgroundRef.current) {
  //     const loadUnicornStudio = async () => {
  //       try {
  //         // Wait for UnicornStudio to be available
  //         while (!window.UnicornStudio) {
  //           await new Promise(resolve => setTimeout(resolve, 100));
  //         }
          
  //         // Wait for UnicornStudio to be ready
  //         while (!window.UnicornStudio.isReady || !window.UnicornStudio.isReady()) {
  //           await new Promise(resolve => setTimeout(resolve, 100));
  //         }
          
  //         await window.UnicornStudio.addScene({
  //           elementId: 'unicorn-background',
  //           fps: 60,
  //           scale: 1,
  //           dpi: 1.5,
  //           filePath: '/images/gradients/colorful-gradient.json',
  //           interactivity: {
  //             mouse: {
  //               disableMobile: true,
  //               momentum: 1.1
  //             },
  //             scroll: {
  //               disableMobile: true,
  //               momentum: 1.1
  //             }
  //           }
  //         });
  //       } catch (err) {
  //         console.error("Failed to load UnicornStudio:", err);
  //       }
  //     };

  //     loadUnicornStudio();
  //   }
  // }, []);

  // Function to calculate price based on promotion level
  const calculatePrice = (level: number) => {
    return (level / 100).toFixed(2);
  };

  // Update price when promotion level changes
  useEffect(() => {
    setPrice(calculatePrice(promotionLevel));
  }, [promotionLevel]);

  // Add this near the top of the component, after the state declarations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({ mainContent, collectionName, collectionDescription, createNFT, file, promotionLevel });
    // Add submission logic here
  };

  const removeFile = () => setFile(null);

  const router = useRouter();  // Add this line

  // Add this function to handle the close action
  const handleClose = () => {
    router.push('/');  // This will navigate back to the index page
  };

  return (
    <>
      <Head>
        <title>Thunder: Share Your Spark ⚡</title>
      </Head>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles.container} sf-pro-rounded-medium`}
      >
        {/* <div 
          id="unicorn-background" 
          ref={backgroundRef}
          className={styles.background}
        /> */}
        <Box className={styles.content}>
          {/* Add the close button here */}
          <motion.div 
            className={styles.closeButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
          >
            <X size={24} />
          </motion.div>

          <Flex align="center" justify="between" mb="5">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Flex align="center" gap="2">
                <Avatar src="/pixie-avatar.png" fallback="CN" size="3" radius="full" />
                <Text className="sf-pro-rounded-bold" style={{ color: 'black' }}>CuratorName.eth</Text>
              </Flex>
            </motion.div>

            <Flex gap="4" align="center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="2" variant="ghost" className={styles.draftButton}>
                  <Zap size={16} />
                  <Text ml="2">Draft</Text>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="2" className={styles.createButton} onClick={handleSubmit}>
                  <Sparkles size={16} />
                  <Text ml="2">Create!</Text>
                </Button>
              </motion.div>
            </Flex>
          </Flex>

          <motion.div variants={contentVariants} initial="hidden" animate="visible" className={styles.inputContainer}>
            <TextField.Root
              variant="soft"
              value={mainContent}
              onChange={(e) => setMainContent(e.target.value)}
              onFocus={() => setIsMainContentFocused(true)}
              onBlur={() => setIsMainContentFocused(false)}
              placeholder={isMainContentFocused ? '' : "What's on your mind? ⚡"}
              className={`${styles.mainContentField} sf-pro-rounded-medium`}
              style={{ color: 'black', fontWeight: '700' }}
            />
          </motion.div>

          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <Flex direction="column" gap="3" mb="4">
              <Flex justify="between" align="center">
                <Text size="2" style={{ color: '#4a5568', fontWeight: '700' }}>Boost your reach</Text>
                <Text size="2" style={{ color: '#4a5568', fontWeight: '700' }}>
                  {price} ETH
                </Text>
              </Flex>
              <Slider 
                defaultValue={[0]} 
                max={100} 
                step={1} 
                onValueChange={(value) => setPromotionLevel(value[0])}
                style={{ width: '100%' }}
              />
            </Flex>
          </motion.div>


          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <Flex gap="2" mb="4" className={styles.buttonContainer}>
              <Button variant="solid" onClick={() => document.getElementById('fileInput')?.click()}>
                <Text ml="2">🌠 Image </Text>
              </Button>
              <Button variant="solid" onClick={() => document.getElementById('fileInput')?.click()}>
                <Text ml="2">🎵 Music</Text>
              </Button>
              <Button variant="solid" onClick={() => document.getElementById('fileInput')?.click()}>
                <Text ml="2">🔮 Prediction</Text>
              </Button>
              <Button variant="solid" onClick={() => console.log('Add thoughts')}>
                <Text ml="2">💭 Thoughts...</Text>
              </Button>
            </Flex>
          </motion.div>

          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*,audio/*"
          />

          {file && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FilePreview file={file} onRemove={removeFile} />
            </motion.div>
          )}

<motion.div variants={contentVariants} initial="hidden" animate="visible">
            <Flex align="center" justify="between" mb="4">
              <Text style={{ color: '#4a5568' }}>Record Onchain?</Text>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Switch checked={createNFT} onCheckedChange={setCreateNFT} />
              </motion.div>
            </Flex>
          </motion.div>

          <AnimatePresence>
            {createNFT && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.nftSection}
              >
                <Button 
                  size="3" 
                  className={styles.mintButton}
                >
                  Mint ✨
                </Button>

                <Flex direction="column" gap="3" mb="4">
                  <TextField.Root
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                    onFocus={() => setIsCollectionNameFocused(true)}
                    onBlur={() => setIsCollectionNameFocused(false)}
                    placeholder={isCollectionNameFocused ? '' : "Collection Name"}
                    className={`${styles.collectionField} sf-pro-rounded-bold`}
                  />
                  <TextField.Root
                    value={collectionDescription}
                    onChange={(e) => setCollectionDescription(e.target.value)}
                    onFocus={() => setIsCollectionDescriptionFocused(true)}
                    onBlur={() => setIsCollectionDescriptionFocused(false)}
                    placeholder={isCollectionDescriptionFocused ? '' : "Collection Description"}
                    className={`${styles.collectionField} sf-pro-rounded-medium`}
                  />
                </Flex>
              </motion.div>
            )}
          </AnimatePresence>

          <Text size="1" className={styles.termsText}>
            By creating with Pixie, you agree to our <Link href="#" className={styles.termsLink}>Terms</Link> and <Link href="#" className={styles.termsLink}>Privacy Policy</Link>.
          </Text>
        </Box>
      </motion.div>
    </>
  );
};

export default Thunder;

