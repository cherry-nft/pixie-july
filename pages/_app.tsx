import '../styles/globals.css'
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app'
import { Theme } from '@radix-ui/themes';
// import '../components/radix/tab-nav.css'  // Add this line
// import styles from '@components/radix/tabs.module.css';
// import { RocketIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { CollectedCardsProvider } from '@components/contexts/CollectedCardsContext';
import { useEffect, useState } from 'react';
import { useCollectedCards } from '../components/contexts/CollectedCardsContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { clearCollectedCards } = useCollectedCards();

  useEffect(() => {
    setIsMounted(true);

    const handleBeforeUnload = () => {
      clearCollectedCards();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clearCollectedCards]);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <CollectedCardsProvider>
      <Theme accentColor="sky" radius="small" scaling="90%" appearance="dark">
        <Component {...pageProps} />
      </Theme>
    </CollectedCardsProvider>
  );
}

export default MyApp;
