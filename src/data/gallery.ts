export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  year: string;
  description?: string;
  frameType?: 'white' | 'dark' | 'none';
  hasPaper?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'danktank-2019-royal.png',
    title: 'D2019',
    year: 'Shirt',
    hasPaper: true,
  },
  // {
  //   id: '2',
  //   src: 'danklin2018.png',
  //   title: 'Dank Poster',
  //   year: 'Danklin 2018',
  //   hasPaper: true,
  // },
  {
    id: '3',
    src: 'danktank-2018-white.png',
    title: 'D2018',
    year: 'Shirt',
    hasPaper: true,
  },
  // {
  //   id: '4',
  //   src: 'danklin-shirt_2018.png',
  //   title: 'Illustration',
  //   year: 'Danklin 2018',
  //   hasPaper: true,
  // },
  // {
  //   id: '5',
  //   src: 'danklin2017.jpg',
  //   title: 'Unfinished',
  //   year: 'Danklin 2017',
  //   hasPaper: true,
  // },
  {
    id: '6',
    src: 'danktank-2017-navy.png',
    title: 'D2017',
    year: 'Shirt',
    hasPaper: true,
  },
  {
    id: '7',
    src: 'danktank-2015-olive.png',
    title: 'D2015',
    year: 'Shirt',
    hasPaper: true,
  },
  {
    id: '8',
    src: 'danklin2015.jpg',
    title: 'Zardox',
    year: 'Poster',
    hasPaper: true,
  },
  // {
  //   id: '9',
  //   src: 'swordofdanklin.jpg',
  //   title: 'Wacky waving inflatable tube guy.',
  //   year: 'House Warming Party',
  //   frameType: 'white',
  //   hasPaper: true,
  // },
  // {
  //   id: '10',
  //   src: 'danklin2014.jpg',
  //   title: 'Bring the Meat.',
  //   year: '2014',
  //   hasPaper: true,
  // },
  // {
  //   id: '11',
  //   src: 'danklin2013.jpg',
  //   title: 'Danklin Forever',
  //   year: 'Danklin 2013',
  //   hasPaper: true,
  // },
  // {
  //   id: '12',
  //   src: 'danklin2012.jpg',
  //   title: 'Crank the Dank',
  //   year: '2012',
  //   hasPaper: true,
  // },
  // {
  //   id: '13',
  //   src: 'danklin2011.png',
  //   title: 'New London',
  //   year: 'Danklin 2011, Sticker',
  //   hasPaper: false,
  // },
  // {
  //   id: '14',
  //   src: 'dank.jpg',
  //   title: 'North Country',
  //   year: 'Unknown Photo',
  //   frameType: 'white',
  //   hasPaper: false,
  // },
];
