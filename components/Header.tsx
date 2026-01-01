'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogIn, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import { categories as dataCategories, slugify } from '../lib/news-data'; // <-- correct relative import

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  // Keep "Breaking News" (All) first, then categories from data
  const categories = ['Breaking News', ...dataCategories];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setIsMenuOpen(false);
  };

  const linkForCategory = (category: string) => {
    if (category === 'Breaking News') return '/news';
    return `/news/category/${encodeURIComponent(slugify(category))}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Bar */}
      <div className="border-b bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-medium">📍 Live from Kathmandu</span>
              <span>Tuesday, January 15, 2025</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>🌡️ 18°C</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg font-bold text-xl">NH</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">NewsHub</h1>
              <p className="text-xs text-muted-foreground">Your Premier News Destination</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex flex-1 max-w-md sm:mx-4 md:mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="search"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => router.push('/login')}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="ghost" size="sm" className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden mt-4">
          <form onSubmit={handleSearch} className="flex">
            <Input
              type="search"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`border-t ${isMenuOpen ? 'block' : 'hidden sm:block'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 lg:space-x-6 space-y-2 sm:space-y-0 overflow-x-auto">
            {categories.map((category) => {
              const href = linkForCategory(category);
              const isActive = pathname?.startsWith(href);

              return (
                <Link key={category} href={href} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`justify-start sm:justify-center text-sm font-medium hover:text-primary whitespace-nowrap ${
                      isActive ? 'text-primary underline' : ''
                    }`}
                  >
                    {category}
                    {category === 'Breaking News' && (
                      <Badge variant="destructive" className="ml-2 text-xs">
                        Live
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}