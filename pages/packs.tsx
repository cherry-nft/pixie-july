import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@radix-ui/themes';
import { BaseMinimalCard } from '@components/BaseMinimalCard';
import { cards } from '@data/cardsData';

const PackView = () => {
  const router = useRouter();
  const packId = router.query.id as string;
  const [pack, setPack] = useState<{ title: string; cards: string[] } | null>(null);

  useEffect(() => {
    // Fetch pack data from the blockchain or database
    // and update the state
  }, [packId]);

  const handleCollect = () => {
    // Implement collect functionality
    console.log('Collect clicked');
  };

  const handleCommentsClick = () => {
    // Implement comments functionality
    console.log('Comments clicked');
  };

  return (
    <div>
    </div>
  );
};

export default PackView;
