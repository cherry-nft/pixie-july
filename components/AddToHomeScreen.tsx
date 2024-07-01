import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AirbnbImageAnimation from './Airbnb';

const AddToHomeScreen: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        }
        setShowPrompt(false);
      });
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  const showIOSInstructions = () => {
    setShowPrompt(true);
  };

  useEffect(() => {
    if (isIOS) {
      // Show iOS instructions after a delay or based on user interaction
      setTimeout(showIOSInstructions, 3000);
    }
  }, [isIOS]);

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black p-6 rounded-lg shadow-lg max-w-sm w-full mx-4"
          >
            <h2 className="text-xl text-white font-bold mb-4 text-center">Add to Home Screen</h2>
            <p className="mb-4 text-white text-center">
              {isIOS
                ? "Tap the share button and then 'Add to Home Screen' to install this app."
                : "Add this app to your home screen for a better experience!"}
            </p>
            <div className="flex justify-center mb-4">
              <AirbnbImageAnimation unlockedCards={[]} />
            </div>
            <div className="flex flex-col space-y-2">
              {!isIOS && (
                <button
                  onClick={handleAddToHomeScreen}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Home Screen
                </button>
              )}
              <button
                onClick={handleClose}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                {isIOS ? "Got it" : "Maybe Later"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToHomeScreen;
