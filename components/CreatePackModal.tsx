import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text, Button, TextField, Select, Flex, Box } from '@radix-ui/themes';
import { Plus } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

interface CreatePackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePack: (title: string) => void;
  onAddToPack: (packId: string) => void;
  existingPacks: { id: string; title: string }[];
}

export const CreatePackModal: React.FC<CreatePackModalProps> = ({ 
  isOpen, onClose, onCreatePack, onAddToPack, existingPacks 
}) => {
  const [packTitle, setPackTitle] = useState('');
  const [selectedPack, setSelectedPack] = useState('');
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleCreateOrAdd = () => {
    if (isCreatingNew) {
      if (existingPacks.some(pack => pack.title === packTitle)) {
        setError('A pack with this title already exists');
        return;
      }
      onCreatePack(packTitle);
    } else {
      onAddToPack(selectedPack);
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <Text size="5" className="mb-4">Add to Pack</Text>
        {!isCreatingNew && (
          <Select.Root value={selectedPack} onValueChange={setSelectedPack}>
            <Select.Trigger className="mb-4" />
            <Select.Content>
              {existingPacks.map(pack => (
                <Select.Item key={pack.id} value={pack.id}>{pack.title}</Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )}
        {isCreatingNew && (
          <TextField.Root
            type="text"
            value={packTitle}
            onChange={(e) => setPackTitle(e.target.value)}
            placeholder="Enter new pack title"
            className="mb-4"
          />
        )}
        {error && <Text color="red" className="mb-2">{error}</Text>}
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => setIsCreatingNew(!isCreatingNew)} variant="soft">
            {isCreatingNew ? 'Select Existing Pack' : <Plus />}
          </Button>
          <Button onClick={handleCreateOrAdd}>
            {isCreatingNew ? 'Create Pack' : 'Add to Pack'}
          </Button>
        </div>
        <Text size="5" className="mb-4 text-white">Create a New Pack</Text>
        <Flex direction="column" gap="3" maxWidth="400px">
  <Box maxWidth="200px">
    <TextField.Root placeholder="Enter your Pack Title…" size="1" className="bg-white">
      <TextField.Slot>
        <Sparkles height="16" width="16" />
      </TextField.Slot>
      <TextField.Slot pr="3">
        <IconButton size="2" variant="ghost">
          <DotsHorizontalIcon height="16" width="16" />
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
          </Box>
        </Flex>

        <div className="flex justify-end space-x-2">
          <Button onClick={onClose} variant="soft">Cancel</Button>
          <Button onClick={() => {
            onCreatePack(packTitle);
            onClose();
          }}>Create Pack</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
