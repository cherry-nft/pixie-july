import { Avatar, Badge } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CommentsDrawer.module.css';

interface Message {
  id: string;
  user: string;
  message: string;
  emoji: string;
  avatar?: string;
  isCommunityMember?: boolean;
  timestamp: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  emoji?: string;
  avatar?: string;
  isCommunityMember?: boolean;
}

interface CommentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessages: Message[];
  onAddComment: (cardId: string, comment: Omit<Comment, 'id'>) => void;
  cardId: string;
}

const formatTimestamp = (timestamp: string) => {
  const now = new Date();
  const msgDate = new Date(timestamp);
  const diffHours = Math.floor((now.getTime() - msgDate.getTime()) / (1000 * 60 * 60));
  
  if (diffHours < 24) {
    return `${diffHours}h`;
  } else {
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d`;
  }
};

const CommentsDrawer: React.FC<CommentsDrawerProps> = ({
  isOpen,
  onClose,
  initialMessages,
  onAddComment,
  cardId,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newComment, setNewComment] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedComments = localStorage.getItem('userComments');
      if (storedComments) {
        setMessages(prevMessages => [...prevMessages, ...JSON.parse(storedComments)]);
      }
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        user: 'CurrentUser',
        message: newComment,
        emoji: '😊',
        avatar: '/default-avatar.png',
        isCommunityMember: false,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      onAddComment(cardId, {
        user: 'CurrentUser',
        text: newComment,
        timestamp: new Date().toISOString(),
        emoji: '😊',
        avatar: '/default-avatar.png',
        isCommunityMember: false,
      });
      setNewComment('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${styles.drawer} sf-pro-rounded-bold`}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className={styles.header}>
            <h2 className="sf-pro-rounded-bold">Join the conversation!</h2>
            <button className="sf-pro-rounded-bold" onClick={onClose}>Close</button>
          </div>
          <div className={styles.content}>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                className={`${styles.message} sf-pro-rounded-medium`}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25, delay: index * 0.05 }}
              >
                <Avatar
                  src={msg.avatar || ''}
                  fallback={msg.user.charAt(0)}
                  size="2"
                  radius="full"
                  className={styles.avatar}
                />
                <div className={styles.messageContent}>
                  <span className={`${styles.messageUser} sf-pro-rounded-medium`}>{msg.user}</span>
                  <div className={styles.messageText}>{msg.message}</div>
                  <span className={`${styles.timestamp} sf-pro-rounded-regular`}>
                    {formatTimestamp(msg.timestamp)}
                  </span>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="What's on your mind?"
              className={`${styles.input} sf-pro-rounded-bold`}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentsDrawer;
