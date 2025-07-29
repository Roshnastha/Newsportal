import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NewsGrid } from '@/components/NewsGrid';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { BreakingNews } from '@/components/BreakingNews';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNews />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <NewsGrid />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}