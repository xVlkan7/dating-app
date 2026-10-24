export type HomePhoto = {
  id: string;
  caption: string;
  rotation: string;
  uri: string;
};

// Update these image URLs, captions, or rotations to refresh the home portraits.
export const HOME_PHOTOS: HomePhoto[] = [
  {
    id: 'maya',
    caption: 'Maya',
    rotation: '-3deg',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 'noah',
    caption: 'Noah',
    rotation: '2deg',
    uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 'avery',
    caption: 'Avery',
    rotation: '-1deg',
    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=85',
  },
];

export const CORK_SPECKLES = [
  { left: '6%', top: '5%', size: 3 },
  { left: '22%', top: '12%', size: 2 },
  { left: '87%', top: '9%', size: 4 },
  { left: '74%', top: '18%', size: 2 },
  { left: '10%', top: '35%', size: 4 },
  { left: '91%', top: '43%', size: 3 },
  { left: '36%', top: '55%', size: 2 },
  { left: '80%', top: '67%', size: 4 },
  { left: '14%', top: '78%', size: 2 },
  { left: '53%', top: '90%', size: 4 },
];
