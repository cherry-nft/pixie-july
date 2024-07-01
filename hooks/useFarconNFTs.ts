import { useState, useEffect } from 'react';
import { NFT } from '../types/NFT';

const useFarconNFTs = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': 'playground_sk_6910c7c5-8a7b-4f06-bb5f-64b1e3e2e4f8_svjsb6y7gio0rlv5' }
    };
    const chain = 'base';
    const contract_address = '0x456CC03543d41Eb1c9a7cA9FA86e9383B404f50d';
    const base_url = `https://api.simplehash.com/api/v0/nfts/${chain}/${contract_address}`;

    const getPaginatedResults = async (url: string) => {
      try {
        setLoading(true);
        let response = await fetch(url, options);
        let data = await response.json();
        console.log("Initial data:", data);  // Debug log
        let allNfts = data.nfts;

        while (data.next) {
          response = await fetch(data.next, options);
          const nextData = await response.json();
          console.log("Next page data:", nextData);  // Debug log
          allNfts = allNfts.concat(nextData.nfts);
          data.next = nextData.next;
        }

        console.log("All NFTs:", allNfts);  // Debug log
        setNfts(allNfts);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
      } finally {
        setLoading(false);
      }
    };

    getPaginatedResults(base_url);
  }, []);

  return { nfts, loading };
};

export default useFarconNFTs;

