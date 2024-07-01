declare module '@hooks/useFarconNFTs' {
    export interface NFT {
      id: string;
      name: string;
      description: string;
      image_url: string;
    }

    export default function useFarconNFTs(): { nfts: NFT[]; loading: boolean };
  }
  
  
