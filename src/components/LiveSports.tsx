import React from 'react';
import { Play, Calendar, Clock, Users } from 'lucide-react';

const LiveSports = () => {
  const liveMatches = [
    {
      id: 1,
      title: "Premier League",
      teams: "Manchester United vs Liverpool",
      status: "LIVE",
      time: "85'",
      score: "2-1",
      viewers: "2.5M",
      image: "https://i.pinimg.com/736x/bc/63/8e/bc638e6fd75daf3c3242bde7b79fda1d.jpg"
    },
    {
      id: 2,
      title: "Champions League",
      teams: "Barcelona vs Real Madrid",
      status: "UPCOMING",
      time: "8:00 PM",
      score: "vs",
      viewers: "Pre-match",
      image: "https://i.pinimg.com/736x/15/a0/4a/15a04a40b3717114db52b3f18a3a69b1.jpg"
    },
    {
      id: 3,
      title: "Cricket World Cup",
      teams: "India vs Australia",
      status: "LIVE",
      time: "Over 35",
      score: "245/4",
      viewers: "5.2M",
      image: "https://i.pinimg.com/736x/a7/4f/85/a74f85c62ba57e823e7b166b541f2e38.jpg"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span>Live Sports</span>
        </h2>
        <button className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveMatches.map((match) => (
          <div key={match.id} className="relative group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
              <img
                src={match.image}
                alt={match.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                {match.status === 'LIVE' ? (
                  <div className="flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                ) : (
                  <div className="bg-slate-800/80 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium">
                    {match.status}
                  </div>
                )}
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 fill-current" />
                </button>
              </div>

              {/* Match Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="space-y-2">
                  <div className="text-xs text-slate-300 font-medium">{match.title}</div>
                  <div className="font-bold text-lg">{match.teams}</div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                      </div>
                      <div className="font-bold text-amber-400">{match.score}</div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-slate-300">
                      <Users className="w-4 h-4" />
                      <span>{match.viewers}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSports;