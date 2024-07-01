interface CardTrait {
  claimed: number;
  available: number;
  total: number;
}

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

export type Card = {
  id: string;
  type: 'standard' | 'music' | 'prediction' | 'memecoin' | 'tiktok' | 'youtube';
  title: string;
  description: string;
  videoSrc?: string | null;
  imageSrc?: string | null;
  communityLogo?: string;
  stickers?: CardTrait;
  badges?: CardTrait;
  invitations?: CardTrait;
  allTraits?: CardTrait;
  isMusic?: boolean;
  audioSrc?: string;
  options?: { name: string; image: string; odds: number }[];
  gameStartTime?: string;
  totalStaked?: number;
  crowdWisdom?: number[];
  marketCap?: number;
  creator?: string;
  totalStakedEth?: number;
  launchDate?: string;
  url?: string;
  joinedCount?: number;
  availableCount?: number;
  initialReactions?: Record<string, number>;
  comments?: Comment[];
}

export const cards: Card[] = [
  {
    id: "1",
    type: 'standard',
    title: "Cherry Saint-Germain",
    description: "Paris Saint-Germain is a soccer team that totally exists and has a loyalty program that you might want assuming if you're a fan, so mint! Otherwise just keep on going to eventually...",
    videoSrc: "/concorde-video.mp4",
    imageSrc: null,
    communityLogo: "/images/PSG-Concorde-Stacked.svg",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 123,
    availableCount: 12345,
    initialReactions: { '🔥': 1, '❤️‍🔥': 1, '🎉': 1 },
    comments: [
      { id: "1", user: "User1", text: "Great card!", timestamp: new Date().toISOString() },
      { id: "1", user: "User2", text: "Interesting content!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "2",
    type: 'standard',
    title: "Veeze: Stand On Business",
    description: "Join the GANGER community today to win rewards and connect with other Veeze fans.",
    videoSrc: null,
    imageSrc: "/veeze-cover.png",
    communityLogo: "/pixie-logo.svg",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 555,
    availableCount: 10403,
    initialReactions: { '🔥': 2, '❤️‍🔥': 2, '🎉': 2 },
    comments: [
      { id: "2", user: "User3", text: "Love this!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "3",
    type: 'standard',
    title: "Anime Mcdonald's",
    description: "Exploring the world of McDonald's as it starts to do anime aesthetics and make new Worcestershire sauce. Free stuff included.",
    videoSrc: null,
    imageSrc: "/images/pokemon-pg.png",
    communityLogo: "/images/mcdonalds.png",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 6172,
    availableCount: 7999,
    initialReactions: { '🔥': 3, '❤️‍🔥': 3, '🎉': 3 },
    comments: [
      { id: "3", user: "User4", text: "Great card!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "4",
    type: 'music',
    title: "Kanye West",
    description: "The latest song from him.",
    videoSrc: null,
    imageSrc: "/images/war-film-poster.png",
    communityLogo: "/pixie-logo.svg",
    isMusic: true,
    audioSrc: "/songs/kw-burn.mp3",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 4343,
    availableCount: 434343,
    initialReactions: { '🔥': 4, '❤️‍🔥': 4, '🎉': 4 },
    comments: [
      { id: "4", user: "User5", text: "Great card!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "5",
    type: 'music',
    title: "Drake",
    description: "The latest song from him.",
    videoSrc: null,
    imageSrc: "/images/nasa-x43.png",
    communityLogo: "/images/pixie-alt-curved.svg",
    isMusic: true,
    audioSrc: "/songs/drake-not-around.mp3",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 1069,
    availableCount: 10000,
    initialReactions: { '🔥': 41, '❤️‍🔥': 121, '👎': 17 },
    comments: [
      { id: "4", user: "User5", text: "Great card!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "6",
    type: 'prediction',
    title: "NFL Prediction: Week 1",
    description: "Who will win the season opener?",
    options: [
      { name: "Kansas City Chiefs", image: "/images/football-1.png", odds: 1.8 },
      { name: "Detroit Lions", image: "/images/football-2.png", odds: 2.2 }
    ],
    communityLogo: "/pixie-logo.svg",
    gameStartTime: "2023-09-07T20:20:00Z",
    totalStaked: 10000,
    crowdWisdom: [80, 20],
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 267,
    availableCount: 500,
    initialReactions: { '🔥': 5, '❤️‍🔥': 5, '🎉': 5 },
    comments: [
      { id: "5", user: "User6", text: "Great card!", timestamp: new Date().toISOString() },
    ]
  },
  {
    id: "7",
    type: 'memecoin',
    title: "Dino Nuggies",
    description: "Dino Nuggies is a memecoin that about your favorite childhood snack.",
    imageSrc: "/images/playtime/t-rex.png",
    communityLogo: "/images/memecoin.png",
    marketCap: 15000000,
    creator: "DinoNuggies.eth",
    totalStakedEth: 500,
    launchDate: "2023-08-15T00:00:00Z",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 9999,
    availableCount: 99999,
    initialReactions: { '🔥': 6, '❤️‍🔥': 6, '🎉': 6 }
  },
  {
    id: "8",
    title: 'TikTok Video',
    description: 'Check out this cool TikTok video!',
    url: 'https://www.tiktok.com/@charlixcx/video/7374790080658951456?_r=1&_t=8nTlW6AR0pz',
    type: 'tiktok',
    communityLogo: "/pixie-logo.svg",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 94253,
    availableCount: 20000,
    initialReactions: { '🔥': 7, '❤️‍🔥': 7, '🎉': 7 }
  },
  {
    id: "9",
    title: 'Youtube Video',
    description: 'Curated by @curatorname.eth!',
    url: 'https://youtu.be/T6eK-2OQtew?si=_WUr5i1Hy0_vDSm1',
    type: 'youtube',
    communityLogo: "/pixie-logo.svg",
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 82465,
    availableCount: 999999,
    initialReactions: { '🔥': 8, '❤️‍🔥': 8, '🎉': 8 }
  },
  {
    id: "10",
    type: 'prediction',
    title: "Market Cap Increase: Q1",
    description: "Who will see the market cap increase?",
    options: [
      { name: "McDonald's", image: "/images/mcdonalds.png", odds: 1.8 },
      { name: "Nike", image: "/images/nike-logo.png", odds: 2.2 }
    ],
    communityLogo: "/pixie-logo.svg",
    gameStartTime: "2023-09-07T20:20:00Z",
    totalStaked: 10000,
    crowdWisdom: [80, 20],
    stickers: { claimed: 2, available: 3, total: 5 },
    badges: { claimed: 1, available: 4, total: 5 },
    invitations: { claimed: 3, available: 2, total: 5 },
    allTraits: { claimed: 4, available: 5, total: 9 },
    joinedCount: 99989,
    availableCount: 99999,
    initialReactions: { '🔥': 9, '❤️‍🔥': 9, '🎉': 9 }
  }
];

export default cards;
