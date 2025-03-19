
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogSidebar from '@/components/blog/BlogSidebar';

// Import the blog posts data
import { blogPosts } from '@/data/blogPosts';

// Categories for filtering
const categories = [
  'All',
  'Investment',
  'Selling',
  'Buying',
  'Financing',
  'Commercial',
  'Luxury',
  'Technology',
  'Market Trends'
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearchTerm = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Update URL params
    const params = new URLSearchParams(searchParams);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL params
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Featured Posts */}
        {!searchTerm && activeCategory === 'All' && (
          <section className="bg-gradient-to-r from-qatken-blue to-qatken-blue/80 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Real Estate Insights</h1>
                <p className="text-lg opacity-90">
                  Expert advice, market trends, and practical guides to help you make informed real estate decisions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map(post => (
                  <BlogPostCard 
                    key={post.id} 
                    {...post} 
                    featured
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                {/* Search and Category Filter */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <form className="relative md:w-64" onSubmit={handleSearch}>
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input 
                        type="text" 
                        placeholder="Search articles..." 
                        className="pl-10 border-gray-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </form>
                    
                    <div className="overflow-x-auto">
                      <div className="flex space-x-2 pb-2 min-w-max">
                        {categories.map(category => (
                          <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            size="sm"
                            className={cn(
                              activeCategory === category 
                                ? "bg-qatken-blue hover:bg-qatken-blue/90"
                                : "text-gray-700 hover:text-qatken-blue"
                            )}
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {searchTerm && (
                    <div className="mb-6">
                      <p className="text-gray-600">
                        Showing results for "{searchTerm}" {activeCategory !== 'All' && `in ${activeCategory}`}
                      </p>
                    </div>
                  )}
                </div>

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {filteredPosts.map(post => (
                      <BlogPostCard key={post.id} {...post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">
                      No articles found matching your criteria.
                    </p>
                    <Button 
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm('');
                        handleCategoryChange('All');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" disabled>Previous</Button>
                    <Button variant="outline" className="bg-qatken-blue text-white hover:bg-qatken-blue/90">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <BlogSidebar 
                categories={categories.filter(cat => cat !== 'All')}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
