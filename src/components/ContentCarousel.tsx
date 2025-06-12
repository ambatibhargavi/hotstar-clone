import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, Crown, Star } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: string;
  premium: boolean;
  rating: string;
  year?: string;
  episodes?: string;
}

interface ContentCarouselProps {
  title: string;
  data: ContentItem[];
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 6
  };

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + itemsPerView.desktop >= data.length ? 0 : prev + itemsPerView.desktop
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, data.length - itemsPerView.desktop) : Math.max(0, prev - itemsPerView.desktop)
    );
  };

  return (
    <div className="relative">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-slate-800/80 backdrop-blur text-white rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-slate-800/80 backdrop-blur text-white rounded-full hover:bg-slate-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)` }}
        >
          {data.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Premium Badge */}
                  {item.premium && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>VIP</span>
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur text-white px-2 py-1 rounded text-xs font-medium">
                    {item.rating}
                  </div>

                  {/* Hover Overlay */}
                  {hoveredItem === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-4 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white text-black rounded-full hover:bg-slate-200 transition-colors">
                          <Play className="w-4 h-4 fill-current" />
                        </button>
                        <button className="p-2 bg-slate-800/80 backdrop-blur text-white rounded-full hover:bg-slate-700 transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Info */}
                <div className="mt-3 space-y-1">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    {item.year && <span>{item.year}</span>}
                    {item.episodes && <span>{item.episodes}</span>}
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>8.5</span>
                    </div>
                  </div>
                  <span className="inline-block bg-slate-700 text-white px-2 py-1 rounded text-xs capitalize">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;