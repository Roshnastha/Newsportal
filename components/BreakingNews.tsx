'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const breakingNews = [
  'BREAKING: Major technology breakthrough announced in quantum computing',
  'URGENT: Global climate summit reaches historic agreement',
  'LIVE: Stock markets surge following economic policy announcement',
  'UPDATE: International space mission launches successfully',
];

export function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-destructive-foreground/20 px-3 py-1 rounded">
            <AlertTriangle className="h-4 w-4 animate-pulse" />
            <span className="font-bold text-sm">BREAKING</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 100}%)`,
              }}
            >
              {breakingNews.map((news, index) => (
                <div key={index} className="py-1">
                  <span className="text-sm font-medium">{news}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}