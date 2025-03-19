
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import the blog posts data
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the current post
    const currentPost = blogPosts.find(post => post.id.toString() === id);
    setPost(currentPost);
    
    // Find related posts (same category, excluding current post)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id.toString() !== id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] bg-gray-900">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <div className="inline-flex items-center bg-qatken-blue/80 px-4 py-2 rounded-full text-sm mb-4">
                <Tag size={16} className="mr-2" /> {post.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <p className="mb-6">
                Real estate investments continue to be one of the most reliable ways to build wealth and secure financial stability. In today's dynamic market, understanding where to invest is crucial for maximizing returns while minimizing risks.
              </p>
              
              <h2>Key Considerations for Property Investments</h2>
              <p>When evaluating potential investment properties, several factors come into play:</p>
              <ul>
                <li>Location and neighborhood growth potential</li>
                <li>Property appreciation forecasts</li>
                <li>Rental yield expectations</li>
                <li>Local economic indicators</li>
                <li>Infrastructure developments</li>
                <li>Market demand and supply dynamics</li>
              </ul>
              
              <h2>Market Trends in 2023</h2>
              <p>
                The real estate market has shown remarkable resilience and adaptation in the wake of global economic shifts. Current trends indicate a growing preference for properties that offer flexibility, sustainability, and technology integration.
              </p>
              
              <p>
                Sustainable building practices are becoming increasingly important to buyers and renters alike. Properties with green certifications, energy-efficient features, and reduced carbon footprints are commanding premium prices and experiencing faster appreciation.
              </p>
              
              <h2>Investment Strategies</h2>
              <p>
                Successful real estate investors employ various strategies depending on their financial goals, risk tolerance, and market conditions. Some popular approaches include:
              </p>
              
              <h3>Buy and Hold</h3>
              <p>
                This traditional strategy involves purchasing properties and holding them for long-term appreciation while potentially generating rental income. It's a relatively low-risk approach that benefits from market growth over time.
              </p>
              
              <h3>Value-Add Investments</h3>
              <p>
                This strategy focuses on acquiring properties that need improvements, renovating them to increase value, and then either selling at a profit or renting at higher rates. It requires more active management but can yield higher returns.
              </p>
              
              <h3>Real Estate Development</h3>
              <p>
                For those with higher risk tolerance and capital availability, development projects offer significant profit potential. This involves building new properties or substantially renovating existing ones.
              </p>
              
              <blockquote>
                "The best investment on earth is earth." — Louis Glickman, famous real estate investor
              </blockquote>
              
              <h2>Looking Forward</h2>
              <p>
                As we progress through 2023 and beyond, market observers anticipate continued growth in suburban and secondary city markets, increased focus on mixed-use developments, and rising importance of technological amenities in residential properties.
              </p>
              
              <p>
                Investors who stay informed about market trends, leverage technology for property analysis, and maintain flexibility in their investment approach will be best positioned to capitalize on opportunities in the evolving real estate landscape.
              </p>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-medium">Tags:</span>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link to={`/blog?category=${post.category}`}>
                    {post.category}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link to="/blog?tag=investment">
                    Investment
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link to="/blog?tag=property">
                    Property
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=0D8ABC&color=fff`}
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600">Real Estate Analyst & Writer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                An experienced real estate professional with over 10 years in the industry. 
                Specializes in market analysis, investment strategies, and property valuation.
              </p>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <Link to={`/blog/${relatedPost.id}`}>
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="p-4">
                        <span className="text-sm text-qatken-blue font-medium">{relatedPost.category}</span>
                        <Link to={`/blog/${relatedPost.id}`}>
                          <h3 className="font-bold mt-1 mb-2 hover:text-qatken-blue transition-colors">
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <Link 
                            to={`/blog/${relatedPost.id}`}
                            className="text-qatken-blue font-medium inline-flex items-center hover:underline"
                          >
                            Read More <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
