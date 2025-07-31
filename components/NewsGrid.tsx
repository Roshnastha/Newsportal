'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Bookmark, Share2, MessageCircle, TrendingUp } from 'lucide-react';

const newsArticles = [
  {
    id: 4,
    title: 'Sustainable Energy Revolution Accelerates Globally',
    excerpt: 'Countries worldwide commit to ambitious renewable energy targets as clean technology costs continue to plummet.',
    category: 'Environment',
    author: 'Emma Thompson',
    publishedAt: '1 hour ago',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
    trending: true,
    comments: 42,
  },
  {
    id: 5,
    title: 'Breakthrough in Quantum Computing Research',
    excerpt: 'Scientists achieve unprecedented quantum coherence times, bringing practical quantum computers closer to reality.',
    category: 'Technology',
    author: 'Dr. James Park',
    publishedAt: '3 hours ago',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600',
    comments: 28,
  },
  {
    id: 6,
    title: 'Global Markets React to Federal Reserve Decision',
    excerpt: 'Stock indices surge following surprise interest rate announcement, with tech stocks leading the rally.',
    category: 'Business',
    author: 'Robert Kim',
    publishedAt: '5 hours ago',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
    comments: 67,
  },
  {
    id: 7,
    title: 'Revolutionary Medical Treatment Shows Promise',
    excerpt: 'Clinical trials reveal breakthrough therapy for rare genetic disorders, offering hope to thousands of patients.',
    category: 'Health',
    author: 'Dr. Lisa Wang',
    publishedAt: '7 hours ago',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=600',
    comments: 35,
  },
  {
    id: 8,
    title: 'Championship Finals Set to Break Attendance Records',
    excerpt: 'Unprecedented ticket demand as two powerhouse teams prepare for what could be the match of the century.',
    category: 'Sports',
    author: 'Mike Johnson',
    publishedAt: '8 hours ago',
    readTime: '3 min read',
    image: 'https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=600',
    trending: true,
    comments: 89,
  },
  {
    id: 9,
    title: 'Cultural Festival Celebrates Global Diversity',
    excerpt: 'Annual international festival showcases traditions from over 50 countries, promoting cultural understanding.',
    category: 'Culture',
    author: 'Ana Rodriguez',
    publishedAt: '10 hours ago',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    comments: 23,
  }
];

export function NewsGrid() {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);
  const router = useRouter();

  const toggleBookmark = (articleId: number) => {
    setBookmarkedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Trending Now</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {newsArticles.map((article) => (
            <article 
              key={article.id} 
              className="group cursor-pointer"
              onClick={() => router.push(`/news/${article.id}`)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {article.category}
                    </Badge>
                    {article.trending && (
                      <Badge variant="destructive" className="animate-pulse">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-background/90 hover:bg-background"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(article.id);
                    }}
                  >
                    <Bookmark 
                      className={`h-4 w-4 ${
                        bookmarkedArticles.includes(article.id) 
                          ? 'fill-primary text-primary' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  </Button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-base sm:text-lg leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-muted-foreground mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                    <span className="font-medium">{article.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t text-sm">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>{article.comments} comments</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}
