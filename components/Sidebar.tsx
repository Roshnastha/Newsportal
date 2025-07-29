'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, Calendar, Mail, Cloud, DollarSign, Users } from 'lucide-react';

const trendingTopics = [
  { topic: 'Artificial Intelligence', posts: 234 },
  { topic: 'Climate Change', posts: 189 },
  { topic: 'Cryptocurrency', posts: 156 },
  { topic: 'Space Exploration', posts: 143 },
  { topic: 'Healthcare Innovation', posts: 128 },
];

const popularArticles = [
  {
    title: 'The Future of Work in AI Era',
    readTime: '7 min read',
    views: '12.3k',
  },
  {
    title: 'Understanding Quantum Physics',
    readTime: '5 min read',
    views: '8.7k',
  },
  {
    title: 'Sustainable Living Guide',
    readTime: '9 min read',
    views: '6.2k',
  },
];

const stockData = [
  { symbol: 'AAPL', price: '$182.52', change: '+2.4%', positive: true },
  { symbol: 'GOOGL', price: '$138.21', change: '+1.8%', positive: true },
  { symbol: 'TSLA', price: '$248.50', change: '-0.7%', positive: false },
  { symbol: 'MSFT', price: '$378.85', change: '+3.1%', positive: true },
];

export function Sidebar() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <aside className="space-y-6 lg:space-y-8">
      {/* Weather Widget */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Cloud className="h-5 w-5 text-primary" />
            <span>Weather</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold mb-2">18°C</div>
            <div className="text-muted-foreground mb-4">Partly Cloudy</div>
            <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm">
              <div>
                <div className="font-medium">High</div>
                <div className="text-muted-foreground">22°C</div>
              </div>
              <div>
                <div className="font-medium">Low</div>
                <div className="text-muted-foreground">15°C</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Subscription */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            <span>Newsletter</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <p className="text-xs lg:text-sm text-muted-foreground mb-4">
            Get the latest news delivered to your inbox daily.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2 lg:space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Subscribe Now
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-1 lg:mt-2">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Trending Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-2 lg:space-y-3">
            {trendingTopics.map((item, index) => (
              <div key={item.topic} className="flex items-center justify-between hover:bg-muted/50 p-1 lg:p-2 rounded cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-xs lg:text-sm font-bold text-primary">#{index + 1}</span>
                  <span className="text-xs lg:text-sm font-medium line-clamp-1">{item.topic}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {item.posts}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stock Ticker */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <DollarSign className="h-5 w-5 text-primary" />
            <span>Market Watch</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-2 lg:space-y-3">
            {stockData.map((stock) => (
              <div key={stock.symbol} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-xs lg:text-sm">{stock.symbol}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{stock.price}</div>
                </div>
                <Badge variant={stock.positive ? "default" : "destructive"} className="text-xs">
                  {stock.change}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular This Week */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            <span>Popular This Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-3 lg:space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="cursor-pointer hover:bg-muted/50 p-1 lg:p-2 rounded transition-colors">
                <h4 className="font-medium text-xs lg:text-sm mb-1 lg:mb-2 leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span>{article.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardHeader className="pb-2 lg:pb-3">
          <CardTitle className="text-lg">Follow Us</CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="grid grid-cols-2 gap-2 lg:gap-3">
            <Button variant="outline" size="sm" className="w-full">
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Instagram
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}