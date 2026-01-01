export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  views: string;
  comments: number;
  tags: string[];
  trending?: boolean;
  featured?: boolean;
}

/* -- your existing newsArticles array (unchanged) -- */
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Revolutionary AI Technology Transforms Healthcare Industry',
    excerpt: 'New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnosis across global healthcare systems.',
    content: `
      <p>In a groundbreaking development that could reshape the future of healthcare, researchers at leading medical institutions have unveiled an artificial intelligence system capable of diagnosing complex medical conditions with unprecedented accuracy.</p>
      ...
    `,
    category: 'Technology',
    author: 'Dr. Sarah Chen',
    publishedAt: '2 hours ago',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '15.2k',
    comments: 89,
    tags: ['AI', 'Healthcare', 'Technology', 'Medical Research'],
    trending: true,
    featured: true,
  },
  {
    id: 2,
    title: 'Global Economic Summit Yields Surprising Results',
    excerpt: 'World leaders announce unprecedented cooperation agreement that could reshape international trade relationships.',
    content: `
      <p>The annual Global Economic Summit concluded yesterday with announcements that have sent shockwaves through international markets and diplomatic circles...</p>
    `,
    category: 'Politics',
    author: 'Michael Rodriguez',
    publishedAt: '4 hours ago',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '22.8k',
    comments: 156,
    tags: ['Economics', 'Politics', 'Trade', 'International Relations'],
    featured: true,
  },
  {
    id: 3,
    title: 'Space Exploration Reaches New Milestone',
    excerpt: 'Historic mission to Mars reveals groundbreaking discoveries about potential for human colonization.',
    content: `
      <p>NASA's latest Mars mission has achieved a historic breakthrough that brings humanity one step closer to establishing a permanent presence on the Red Planet...</p>
    `,
    category: 'Science',
    author: 'Prof. Elena Vasquez',
    publishedAt: '6 hours ago',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '31.5k',
    comments: 203,
    tags: ['Space', 'Mars', 'NASA', 'Exploration'],
    trending: true,
    featured: true,
  },
  {
    id: 4,
    title: 'Sustainable Energy Revolution Accelerates Globally',
    excerpt: 'Countries worldwide commit to ambitious renewable energy targets as clean technology costs continue to plummet.',
    content: `...`,
    category: 'Environment',
    author: 'Emma Thompson',
    publishedAt: '1 hour ago',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '18.7k',
    comments: 42,
    tags: ['Environment', 'Energy', 'Climate', 'Sustainability'],
    trending: true,
    featured: true,
  },
  {
    id: 5,
    title: 'Breakthrough in Quantum Computing Research',
    excerpt: 'Scientists achieve unprecedented quantum coherence times, bringing practical quantum computers closer to reality.',
    content: `...`,
    category: 'Technology',
    author: 'Dr. James Park',
    publishedAt: '3 hours ago',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '12.3k',
    comments: 28,
    tags: ['Quantum Computing', 'Technology', 'Research', 'Innovation'],
  },
  {
    id: 6,
    title: 'Global Markets React to Federal Reserve Decision',
    excerpt: 'Stock indices surge following surprise interest rate announcement, with tech stocks leading the rally.',
    content: `...`,
    category: 'Business',
    author: 'Robert Kim',
    publishedAt: '5 hours ago',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '25.1k',
    comments: 67,
    tags: ['Finance', 'Markets', 'Federal Reserve', 'Economy'],
  }
];

/* ----------------- existing helpers you already had ----------------- */

export const getArticleById = (id: number): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  if (category === 'All') return newsArticles;
  return newsArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return newsArticles.filter(article => article.featured);
};

export const getTrendingArticles = (): NewsArticle[] => {
  return newsArticles.filter(article => article.trending);
};

/* ----------------- new exports: categories + slug helpers ----------------- */

/**
 * Unique list of category names found in the dataset, in appearance order.
 * Example: ['Technology', 'Politics', 'Science', ...]
 */
export const categories: string[] = Array.from(
  new Set(newsArticles.map(a => a.category))
);

/** create a slug from category name, e.g. "Breaking News" -> "breaking-news" */
export const slugify = (name: string) =>
  name.trim().toLowerCase().replace(/\s+/g, '-');

/** map a slug back to the original category name; returns undefined if not found */
export const categoryFromSlug = (slug: string): string | undefined => {
  return categories.find((c) => slugify(c) === slug);
};