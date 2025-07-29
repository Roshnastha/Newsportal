'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, User, Share2, Bookmark, MessageCircle, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Extended news data with full content
const newsData = {
  1: {
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
      
      <h3>Future Implications</h3>
      <p>Healthcare experts predict that this breakthrough could lead to:</p>
      <ul>
        <li>Significant reduction in healthcare costs through early detection</li>
        <li>Improved patient outcomes through faster, more accurate diagnoses</li>
        <li>Enhanced accessibility of high-quality healthcare in remote areas</li>
        <li>New opportunities for personalized medicine approaches</li>
      </ul>
      
      <p>The research team is now working on expanding the system's capabilities to cover additional medical specialties and is planning broader deployment across healthcare networks worldwide.</p>
    `,
    category: 'Technology',
    author: 'Dr. Sarah Chen',
    publishedAt: '2 hours ago',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '15.2k',
    comments: 89,
    tags: ['AI', 'Healthcare', 'Technology', 'Medical Research'],
  },
  2: {
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
      
      <h3>Market Response</h3>
      <p>Financial markets responded positively to the news:</p>
      <ul>
        <li>Global stock indices rose by an average of 3.2%</li>
        <li>Currency volatility decreased significantly</li>
        <li>Commodity prices stabilized across major markets</li>
        <li>Bond yields reflected increased investor confidence</li>
      </ul>
      
      <p>The agreement also establishes a new International Economic Coordination Council (IECC) that will monitor implementation and address disputes through diplomatic channels rather than trade wars.</p>
      
      <h3>Implementation Timeline</h3>
      <p>The comprehensive plan will be rolled out in phases:</p>
      <ul>
        <li><strong>Phase 1 (2025):</strong> Digital currency framework establishment</li>
        <li><strong>Phase 2 (2026):</strong> Green trade incentives activation</li>
        <li><strong>Phase 3 (2027):</strong> Full supply chain integration</li>
        <li><strong>Phase 4 (2028):</strong> Technology transfer protocols</li>
      </ul>
      
      <p>Economic analysts predict that successful implementation could boost global GDP by 2.5% over the next five years while significantly reducing trade-related conflicts between major economies.</p>
    `,
    category: 'Politics',
    author: 'Michael Rodriguez',
    publishedAt: '4 hours ago',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '22.8k',
    comments: 156,
    tags: ['Economics', 'Politics', 'Trade', 'International Relations'],
  },
  3: {
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
      
      <h3>Implications for Human Colonization</h3>
      <p>The discoveries address several critical challenges for human Mars missions:</p>
      <ul>
        <li><strong>Water Supply:</strong> Accessible water eliminates the need to transport this heavy resource from Earth</li>
        <li><strong>Fuel Production:</strong> Water can be split into hydrogen and oxygen for rocket fuel</li>
        <li><strong>Construction Materials:</strong> Local minerals can be used for building habitats</li>
        <li><strong>Life Support:</strong> Organic compounds suggest soil could potentially support agriculture</li>
      </ul>
      
      <p>The European Space Agency (ESA) and SpaceX have both announced accelerated timelines for their Mars missions in response to these findings. SpaceX CEO Elon Musk stated that the company is now targeting 2028 for its first crewed Mars mission, two years ahead of the original schedule.</p>
      
      <h3>Next Steps</h3>
      <p>The space agencies are planning several follow-up missions:</p>
      <ul>
        <li><strong>2026:</strong> Advanced drilling mission to access underground water</li>
        <li><strong>2027:</strong> Robotic construction of basic infrastructure</li>
        <li><strong>2028:</strong> First crewed mission with extended stay capability</li>
        <li><strong>2030:</strong> Establishment of permanent research station</li>
      </ul>
      
      <p>International cooperation is expected to play a crucial role, with space agencies from multiple countries contributing expertise and resources to what many are calling humanity's greatest adventure.</p>
    `,
    category: 'Science',
    author: 'Prof. Elena Vasquez',
    publishedAt: '6 hours ago',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1200',
    views: '31.5k',
    comments: 203,
    tags: ['Space', 'Mars', 'NASA', 'Exploration'],
  },
};

export default function NewsArticle() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;
  const article = newsData[articleId as keyof typeof newsData];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {article.category}
              </Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>{article.comments} comments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmark
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Article Footer */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold">{article.author}</h4>
                  <p className="text-sm text-muted-foreground">Senior Correspondent</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
                <Button variant="outline" size="sm">
                  Follow Author
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Related Articles */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(newsData)
                .filter(item => item.id !== article.id)
                .slice(0, 3)
                .map((relatedArticle) => (
                <Card key={relatedArticle.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {relatedArticle.category}
                    </Badge>
                    <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                      <span>{relatedArticle.author}</span>
                      <span>•</span>
                      <span>{relatedArticle.publishedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}