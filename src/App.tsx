import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentCarousel from './components/ContentCarousel';
import LiveSports from './components/LiveSports';
import Footer from './components/Footer';

const movieData = [
  {
    id: 1,
    title: "Tourist Family",
    image: "https://m.media-amazon.com/images/M/MV5BM2NlZTI0NzEtMTRjYi00YjA2LWJmMzEtMjkzMWNlZWQ4NTZlXkEyXkFqcGc@._V1_.jpg",
    type: "movie",
    premium: true,
    rating: "U/A 13+",
    year: "2023"
  },
  {
    id: 2,
    title: "Criminal-Justice",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/6655/1749192566655-i",
    type: "movie",
    premium: false,
    rating: "U/A 13+",
    year: "2023"
  },
  {
    id: 3,
    title: "chhichhore",
    image: "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4303/1664303-i-ddac548e7842",
    type: "movie",
    premium: true,
    rating: "U/A 16+",
    year: "2023"
  },
  {
    id: 4,
    title: "Sookshmadarshini",
    image: "https://chinmaynakhwa.wordpress.com/wp-content/uploads/2024/12/wp-17330509377335887121407943125489.jpg?w=800",
    type: "movie",
    premium: false,
    rating: "U/A 13+",
    year: "2023"
  },
  {
    id: 5,
    title: "Manjummel Boys",
    image: "https://content.tupaki.com/en/feeds/2024/04/06/345308-xnxmzfhg.gif",
    type: "movie",
    premium: true,
    rating: "U/A 13+",
    year: "2023"
  },
  {
    id: 6,
    title: "Lover",
    image: "https://www.newsbricks.com/root_upld/general-news/2024/02/26581/org_32971202402091331.jpg",
    type: "movie",
    premium: false,
    rating: "U/A 13+",
    year: "2023"
  }
];

const tvShowData = [
  {
    id: 1,
    title: "Radha Krishna",
    image: "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/9460/1379460-i-2b70cca05890",
    type: "series",
    premium: true,
    rating: "A",
    episodes: "73 Episodes"
  },
  {
    id: 2,
    title: "Mahabharatam",
    image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8978/768978-h",
    type: "series",
    premium: true,
    rating: "U/A 16+",
    episodes: "42 Episodes"
  },
  {
    id: 3,
    title: "Hara Hara Mahadev",
    image: "https://e1.pxfuel.com/desktop-wallpaper/432/265/desktop-wallpaper-111-best-indresh-kumar-mahadev-serial.jpg",
    type: "series",
    premium: false,
    rating: "U/A 13+",
    episodes: "60 Episodes"
  },
  {
    id: 4,
    title: "Chutney Sambar",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/1378/1721928381378-i",
    type: "series",
    premium: true,
    rating: "A",
    episodes: "62 Episodes"
  },
  {
    id: 5,
    title: "Heart beat",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/6145/1747850756145-i",
    type: "series",
    premium: false,
    rating: "U/A 7+",
    episodes: "201 Episodes"
  },
  {
    id: 6,
    title: "Devika&Danny",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/4622/1749151544622-i",
    type: "series",
    premium: false,
    rating: "U/A 13+",
    episodes: "236 Episodes"
  }
];

const kidsData = [
  {
    id: 1,
    title: "Doraemon",
    image: "https://i.pinimg.com/736x/01/e1/0d/01e10df3bb744f6e4b42f0c8b2152508.jpg",
    type: "movie",
    premium: false,
    rating: "U",
    year: "2023"
  },
  {
    id: 2,
    title: "Shinchan",
    image: "https://i.pinimg.com/736x/71/f4/06/71f406803ec2002c60303d3fcdc4b162.jpg",
    type: "movie",
    premium: true,
    rating: "U",
    year: "2023"
  },
  {
    id: 3,
    title: "We Bare Bears",
    image: "https://i.pinimg.com/736x/b0/74/8f/b0748faf566745cc022cfa56fefcde9e.jpg",
    type: "movie",
    premium: false,
    rating: "U",
    year: "2023"
  },
  {
    id: 4,
    title: "Courage the cowardly Dog",
    image: "https://i.pinimg.com/736x/94/97/8f/94978ff90343d765ed03e11bcdb1440f.jpg",
    type: "movie",
    premium: true,
    rating: "U",
    year: "2023"
  },
  {
    id: 5,
    title: "Scooby-Doo",
    image: "https://i.pinimg.com/736x/e0/7c/97/e07c970928127e062204f8a7a8581037.jpg",
    type: "movie",
    premium: false,
    rating: "U",
    year: "2023"
  },
  {
    id: 6,
    title: "Ben 10",
    image: "https://i.pinimg.com/736x/12/a4/8f/12a48f0e4885703081d3f658b0c2cb60.jpg",
    type: "movie",
    premium: true,
    rating: "U",
    year: "2023"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <Hero />
      <div className="px-4 md:px-8 lg:px-12 space-y-12 pb-16">
        <LiveSports />
        <ContentCarousel title="Latest Movies" data={movieData} />
        <ContentCarousel title="Popular TV Shows" data={tvShowData} />
        <ContentCarousel title="Kids & Family" data={kidsData} />
        <ContentCarousel title="Trending Now" data={[...movieData, ...tvShowData].slice(0, 6)} />
      </div>
      <Footer />
    </div>
  );
}

export default App;