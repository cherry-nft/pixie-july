import React, { useState } from 'react';
import Image from 'next/image';
import { BaseMinimalCard } from './BaseMinimalCard';
import styles from './PredictionMinimalCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

type PredictionOption = {
  name: string;
  image: string;
  emoji?: string;
  odds: number;
  packTitle?: string;
  packDescription?: string;
  packIcons?: string[];
};

type PredictionMinimalCardProps = {
  id: string;
  title: string;
  description: string;
  options?: PredictionOption[];
  onCollect: () => void;
  onCommentsClick: () => void;
};

const PredictionMinimalCard: React.FC<PredictionMinimalCardProps> = ({
  id,
  title,
  description,
  options = [],
  onCollect,
  onCommentsClick,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName);
    setTimeout(() => {
      onCollect();
      setSelectedOption(null);
    }, 1000);
  };

  const toggleExpand = (optionName: string) => {
    setExpandedOption(expandedOption === optionName ? null : optionName);
  };

  const optionVariants = {
    collapsed: { height: 80 },
    expanded: { height: 'auto' },
  };

  const iconPackVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <BaseMinimalCard
      id={id}
      title={title}
      type="prediction"
      description={description}
      onCommentsClick={onCommentsClick}
      onCollect={onCollect}
    >
      <div className={styles.predictionCard}>
        <motion.h2 
          className={styles.question}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title} <span className={styles.emoji}>🤔</span>
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.h3
          className={styles.optionsTitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose your prediction:
        </motion.h3>
        <div className={styles.optionsContainer}>
          {options.length > 0 ? (
            options.map((option, index) => (
              <motion.div
                key={option.name}
                className={styles.optionWrapper}
                variants={optionVariants}
                initial="collapsed"
                animate={expandedOption === option.name ? "expanded" : "collapsed"}
              >
                <div className={styles.optionHeader}>
                  <motion.div
                    className={styles.emojiBox}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {option.emoji}
                  </motion.div>
                  <motion.div
                    className={styles.option}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOptionClick(option.name)}
                  >
                    <Image
                      src={option.image}
                      alt={option.name}
                      layout="fill"
                      objectFit="cover"
                      className={styles.optionImage}
                    />
                    <div className={styles.optionOverlay} />
                    <span className={styles.optionName}>{option.name}</span>
                  </motion.div>
                  <motion.div
                    className={styles.oddsBox}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {option.odds.toFixed(2)}
                  </motion.div>
                  <motion.div
                    className={styles.dropdownWrapper}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleExpand(option.name)}
                  >
                    {expandedOption === option.name ? <ChevronUp /> : <ChevronDown />}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedOption === option.name && (
                    <motion.div
                      className={styles.expandedContent}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={iconPackVariants}
                    >
                      <h4 className={styles.packTitle}>{option.packTitle}</h4>
                      <p className={styles.packDescription}>{option.packDescription}</p>
                      <div className={styles.iconPack}>
                        {option.packIcons?.map((icon, i) => (
                          <motion.div
                            key={i}
                            className={styles.icon}
                            variants={iconVariants}
                          >
                            <Image src={icon} alt="Pack Icon" width={40} height={40} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className={styles.noOptions}>No options available</p>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selectedOption && (
          <motion.div
            className={styles.selectionOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              You selected: {selectedOption}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </BaseMinimalCard>
  );
};

export default PredictionMinimalCard;

