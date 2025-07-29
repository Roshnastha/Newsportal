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

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Revolutionary AI Technology Transforms Healthcare Industry',
    excerpt: 'New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnosis across global healthcare systems.',
    content: `
      <p>In a groundbreaking development that could reshape the future of healthcare, researchers at leading medical institutions have unveiled an artificial intelligence system capable of diagnosing complex medical conditions with unprecedented accuracy.</p>
      
      <p>The new AI technology, developed through a collaboration between Stanford Medical School and Google Health, demonstrates remarkable capabilities in analyzing medical imaging, patient data, and symptom patterns to provide rapid and accurate diagnoses.</p>
      
      <h3>Key Breakthrough Features</h3>
      <p>The revolutionary system incorporates several cutting-edge technologies:</p>
      <ul>
        <li><strong>Advanced Pattern Recognition:</strong> The AI can identify subtle patterns in medical scans that human doctors might miss</li>
        <li><strong>Real-time Analysis:</strong> Diagnoses can be generated in minutes rather than hours or days</li>
        <li><strong>Multi-modal Integration:</strong> The system combines data from various sources including lab results, imaging, and patient history</li>
        <li><strong>Continuous Learning:</strong> The AI improves its accuracy with each case it analyzes</li>
      </ul>
      
      <p>Dr. Sarah Chen, lead researcher on the project, explains: "This technology represents a paradigm shift in how we approach medical diagnosis. We're not replacing doctors, but rather providing them with an incredibly powerful tool that can enhance their decision-making capabilities."</p>
      
      <h3>Clinical Trial Results</h3>
      <p>The system has undergone extensive testing across multiple hospitals, with remarkable results:</p>
      <ul>
        <li>94% accuracy in cancer detection from medical imaging</li>
        <li>87% reduction in diagnostic time for complex cases</li>
        <li>78% improvement in early-stage disease identification</li>
        <li>92% satisfaction rate among participating physicians</li>
      </ul>
      
      <p>The technology is expected to be particularly valuable in underserved areas where access to specialist physicians is limited. Remote clinics could leverage this AI system to provide expert-level diagnostic capabilities to patients who might otherwise face long delays or travel distances for proper medical evaluation.</p>
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
      <p>The annual Global Economic Summit concluded yesterday with announcements that have sent shockwaves through international markets and diplomatic circles. World leaders from the G20 nations reached a comprehensive agreement on trade cooperation that many experts are calling the most significant economic accord since the Bretton Woods Agreement.</p>
      
      <p>The three-day summit, held in Geneva, brought together heads of state, finance ministers, and central bank governors to address pressing global economic challenges including inflation, supply chain disruptions, and sustainable development financing.</p>
      
      <h3>Key Agreement Points</h3>
      <p>The landmark agreement includes several groundbreaking provisions:</p>
      <ul>
        <li><strong>Unified Digital Currency Framework:</strong> A coordinated approach to central bank digital currencies (CBDCs)</li>
        <li><strong>Green Trade Incentives:</strong> Preferential trade terms for environmentally sustainable products</li>
        <li><strong>Supply Chain Resilience:</strong> Joint strategic reserves and alternative sourcing agreements</li>
        <li><strong>Technology Transfer:</strong> Streamlined processes for sharing critical technologies</li>
      </ul>
      
      <p>President Maria Rodriguez of the European Council stated: "This agreement represents a new era of international cooperation. We're moving beyond traditional trade barriers to create a more resilient and sustainable global economy."</p>
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
      <p>NASA's latest Mars mission has achieved a historic breakthrough that brings humanity one step closer to establishing a permanent presence on the Red Planet. The Perseverance rover, working in conjunction with the Ingenuity helicopter, has discovered substantial underground water reserves and confirmed the presence of organic compounds in Martian soil.</p>
      
      <p>The discoveries were announced at a press conference at NASA's Jet Propulsion Laboratory, where mission scientists revealed findings that exceed their most optimistic projections for the mission.</p>
      
      <h3>Major Discoveries</h3>
      <p>The mission has yielded several groundbreaking findings:</p>
      <ul>
        <li><strong>Underground Water Reserves:</strong> Extensive aquifers located 2-3 meters below the surface</li>
        <li><strong>Organic Compounds:</strong> Complex carbon-based molecules indicating potential past life</li>
        <li><strong>Mineral Deposits:</strong> Rich concentrations of materials essential for construction and fuel production</li>
        <li><strong>Atmospheric Conditions:</strong> More favorable radiation shielding than previously thought</li>
      </ul>
      
      <p>Dr. Elena Vasquez, mission lead scientist, explained: "These findings fundamentally change our understanding of Mars' habitability. We're not just talking about visiting Mars anymore – we're talking about the real possibility of sustainable human settlement."</p>
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
    content: `
      <p>The global transition to renewable energy has reached a tipping point, with major economies announcing unprecedented commitments to clean energy infrastructure. The International Energy Agency reports that renewable energy capacity additions broke all previous records in 2024, with solar and wind power leading the charge.</p>
      
      <p>This surge in clean energy adoption comes as manufacturing costs for solar panels and wind turbines have dropped by over 60% in the past five years, making renewable energy the most cost-effective option in most markets worldwide.</p>
      
      <h3>Global Commitments</h3>
      <p>Major economies have announced ambitious targets:</p>
      <ul>
        <li><strong>United States:</strong> 100% clean electricity by 2035</li>
        <li><strong>European Union:</strong> Carbon neutrality by 2050 with interim targets</li>
        <li><strong>China:</strong> Peak emissions by 2030, carbon neutrality by 2060</li>
        <li><strong>India:</strong> 500 GW renewable capacity by 2030</li>
      </ul>
      
      <p>The shift is being driven not only by environmental concerns but also by economic factors, as renewable energy becomes increasingly competitive with fossil fuels.</p>
    `,
    category: 'Environment',
    author: 'Emma Thompson',
    publishedAt: '1 hour ago',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '18.7k',
    comments: 42,
    tags: ['Environment', 'Energy', 'Climate', 'Sustainability'],
    trending: true,
  },
  {
    id: 5,
    title: 'Breakthrough in Quantum Computing Research',
    excerpt: 'Scientists achieve unprecedented quantum coherence times, bringing practical quantum computers closer to reality.',
    content: `
      <p>Researchers at MIT and IBM have achieved a major breakthrough in quantum computing, successfully maintaining quantum coherence for over 100 microseconds – a 10-fold improvement over previous records. This advancement brings practical quantum computers significantly closer to reality.</p>
      
      <p>The breakthrough addresses one of the most significant challenges in quantum computing: quantum decoherence, where quantum states collapse due to environmental interference, limiting the time available for quantum calculations.</p>
      
      <h3>Technical Achievement</h3>
      <p>The research team's innovations include:</p>
      <ul>
        <li><strong>Advanced Error Correction:</strong> New algorithms that detect and correct quantum errors in real-time</li>
        <li><strong>Improved Isolation:</strong> Better shielding from environmental interference</li>
        <li><strong>Novel Materials:</strong> Superconducting qubits with enhanced stability</li>
        <li><strong>Optimized Control:</strong> Precise manipulation of quantum states</li>
      </ul>
      
      <p>This breakthrough could accelerate the development of quantum computers capable of solving complex problems in cryptography, drug discovery, and climate modeling.</p>
    `,
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
    content: `
      <p>Global financial markets experienced significant volatility following the Federal Reserve's unexpected decision to maintain current interest rates, contrary to widespread expectations of a rate increase. The announcement sent shockwaves through trading floors worldwide, with major indices posting substantial gains.</p>
      
      <p>The decision, announced after a two-day Federal Open Market Committee meeting, reflects concerns about global economic uncertainty and the need to support continued growth in the face of geopolitical tensions.</p>
      
      <h3>Market Response</h3>
      <p>Major indices showed strong positive reactions:</p>
      <ul>
        <li><strong>S&P 500:</strong> Up 2.8% in after-hours trading</li>
        <li><strong>NASDAQ:</strong> Gained 3.2%, led by technology stocks</li>
        <li><strong>Dow Jones:</strong> Rose 2.1% with financial sector gains</li>
        <li><strong>International Markets:</strong> Asian and European markets followed suit</li>
      </ul>
      
      <p>Technology stocks were among the biggest beneficiaries, with companies like Apple, Microsoft, and Google seeing significant gains as investors bet on continued low borrowing costs supporting growth and innovation.</p>
    `,
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