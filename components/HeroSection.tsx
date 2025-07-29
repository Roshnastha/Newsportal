'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import Link from 'next/link';

const featuredNews = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt: "World leaders unite on ambitious climate targets for 2030, marking a turning point in environmental policy.",
    image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Environment",
    author: "Sarah Johnson",
    time: "2 hours ago",
    featured: true
  },
  {
    id: 2,
    title: "Revolutionary AI Technology Transforms Healthcare",
    excerpt: "New artificial intelligence system shows 95% accuracy in early disease detection, promising to save millions of lives.",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology",
    author: "Dr. Michael Chen",
    time: "4 hours ago",
    featured: true
  },
  {
    id: 3,
    title: "Economic Markets Show Strong Recovery Signs",
    excerpt: "Global markets surge as inflation rates stabilize and consumer confidence reaches new highs across major economies.",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Business",
    author: "Robert Williams",
    time: "6 hours ago",
    featured: true
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  const currentNews = featuredNews[currentSlide];

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2 relative">
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden group">
              <img
                src={currentNews.image}
                alt={currentNews.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    {currentNews.category}
                  </span>
                </div>
                <Link href={`/news/${currentNews.id}`}>
                  <h1 className="text-2xl lg:text-4xl font-bold mb-4 hover:text-red-400 transition-colors cursor-pointer">
                    {currentNews.title}
                  </h1>
                </Link>
                <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                  {currentNews.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{currentNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentNews.time}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
              Trending Now
            </h2>
            {featuredNews.map((article, index) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <div className="flex space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}