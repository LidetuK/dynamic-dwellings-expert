
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { useIsMobile } from '@/hooks/use-mobile';

const LatestBlogPosts = () => {
  const isMobile = useIsMobile();
  
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, isMobile ? 2 : 3);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Latest Insights</h2>
            <p className="text-gray-600">
              Expert advice and market trends to guide your real estate decisions
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/blog" className="flex items-center">
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogPostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
