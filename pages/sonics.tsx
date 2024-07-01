import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Box, Button, Flex, Text, Avatar, Link } from '@radix-ui/themes';
import { Sparkles } from 'lucide-react';
import cardsData from '../data/cardsData'; // Import Card type from cardsData
import { Card } from '../data/cardsData';

const Sonics = () => {
  const [url, setUrl] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [isUrlFocused, setIsUrlFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isValidVideo, setIsValidVideo] = useState(false);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setErrorMessage('');
    setSuccessMessage('');
    setIsValidVideo(false);
  };

  const validateVideo = useCallback(async () => {
    if (url.includes('tiktok.com')) {
      const videoId = url.split('/').pop()?.split('?')[0];
      try {
        const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`);
        if (response.ok) {
          setIsValidVideo(true);
          const code = `
            <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
              <section></section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
          `;
          setEmbedCode(code);
        } else {
          setIsValidVideo(false);
          setEmbedCode('');
        }
      } catch (error) {
        setIsValidVideo(false);
        setEmbedCode('');
      }
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_API_KEY&part=status`);
        const data = await response.json();
        if (data.items && data.items.length > 0 && data.items[0].status.embeddable) {
          setIsValidVideo(true);
          const code = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          `;
          setEmbedCode(code);
        } else {
          setIsValidVideo(false);
          setEmbedCode('');
        }
      } catch (error) {
        setIsValidVideo(false);
        setEmbedCode('');
      }
    } else {
      setIsValidVideo(false);
      setEmbedCode('');
    }
  }, [url]);

  useEffect(() => {
    validateVideo();
  }, [validateVideo]);

  const handleCreateCommunity = () => {
    if (!isValidVideo) {
      setErrorMessage('Please enter a valid TikTok or YouTube URL.');
      return;
    }

    const existingCard = cardsData.find(card => card.url === url);
    if (existingCard) {
      setErrorMessage(`No worries! That video has already been uploaded. Here's the link: /collection/${existingCard.id}`);
      return;
    }

    const newCard: Card = {
      id: (cardsData.length + 1).toString(),
      type: url.includes('tiktok.com') ? 'tiktok' : 'youtube',
      title: 'New Social Media Post',
      description: 'Check out this new post!',
      url,
      communityLogo: "/pixie-logo.svg",
      stickers: { claimed: 0, available: 100, total: 100 },
      badges: { claimed: 0, available: 100, total: 100 },
      invitations: { claimed: 0, available: 100, total: 100 },
      allTraits: { claimed: 0, available: 300, total: 300 },
      joinedCount: 0,
      availableCount: 100,
    };

    cardsData.push(newCard);
    setSuccessMessage('Community created successfully!');
    console.log('Updated cardsData:', cardsData); // For debugging
  };

  useEffect(() => {
    if (embedCode) {
      const script = document.createElement('script');
      if (url.includes('tiktok.com')) {
        script.src = 'https://www.tiktok.com/embed.js';
      } else if (url.includes('twitter.com') || url.includes('x.com')) {
        script.src = 'https://platform.twitter.com/widgets.js';
      }
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [embedCode, url]);

  return (
    <>
      <Head>
        <title>Sonics: Create Social Media Community ⚡</title>
      </Head>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #121212 0%, #121212 100%)' }}
      >
        <Box p="6" style={{ width: '500px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '24px', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
          <Flex align="center" justify="between" mb="5">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Flex align="center" gap="2">
                <Avatar src="/pixie-avatar.png" fallback="CN" size="3" radius="full" />
                <Text style={{ color: '#4a5568', fontWeight: 'bold' }}>CuratorName.eth</Text>
              </Flex>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="2" style={{ backgroundColor: '#6c5ce7', color: 'white', borderRadius: '9999px' }} onClick={handleCreateCommunity}>
                <Sparkles size={16} />
                <Text ml="2">Create Community</Text>
              </Button>
            </motion.div>
          </Flex>

          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              onFocus={() => setIsUrlFocused(true)}
              onBlur={() => setIsUrlFocused(false)}
              placeholder={isUrlFocused ? '' : "Paste TikTok, Twitter, or YouTube URL here"}
              style={{ 
                width: '100%',
                fontSize: '18px', 
                borderRadius: '20px',
                marginBottom: '20px',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.5)',
                color: 'black',
                border: '1px solid #ccc'
              }}
            />
          </motion.div>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: '20px', color: 'red' }}
            >
              <Text>{errorMessage}</Text>
            </motion.div>
          )}

          {embedCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: '20px' }}
            >
              <div dangerouslySetInnerHTML={{ __html: embedCode }} />
            </motion.div>
          )}

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: '20px', color: 'green' }}
            >
              <Text>{successMessage}</Text>
            </motion.div>
          )}

          <Text size="1" style={{ color: '#718096', textAlign: 'center', marginTop: '20px' }}>
            By creating with Pixie, you agree to our <Link href="#" style={{ color: '#3ae24b' }}>Terms</Link> and <Link href="#" style={{ color: '#3ae24b' }}>Privacy Policy</Link>.
          </Text>
        </Box>
      </motion.div>
    </>
  );
};

export default Sonics;
