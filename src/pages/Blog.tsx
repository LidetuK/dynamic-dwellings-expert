import { useState } from 'react';
import { Calendar, ChevronRight, Search, Tag, User } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
                  <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm mb-2">
                        <span className="bg-white/20 px-2 py-1 rounded text-white">Featured</span>
                        <span className="text-white/80">{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="opacity-90 mb-4">{post.excerpt.substring(0, 120)}...</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 text-sm opacity-80">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-white font-medium inline-flex items-center hover:underline"
                        >
                          Read More <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
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
                      <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <Link to={`/blog/${post.id}`} className="block">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-52 object-cover"
                          />
                        </Link>
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-qatken-blue font-medium">{post.category}</span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                          </div>
                          <Link to={`/blog/${post.id}`} className="block">
                            <h3 className="text-xl font-bold mb-2 hover:text-qatken-blue transition-colors">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-4">
                            {post.excerpt.substring(0, 100)}...
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <Link 
                              to={`/blog/${post.id}`}
                              className="text-qatken-blue font-medium inline-flex items-center hover:underline"
                            >
                              Read More <ChevronRight size={16} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
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
              <div className="lg:w-1/4">
                {/* Popular Posts */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex gap-3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <Link 
                            to={`/blog/${post.id}`}
                            className="font-medium text-gray-900 hover:text-qatken-blue transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <button
                        key={category}
                        className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md hover:bg-gray-100 transition-colors"
                        onClick={() => setActiveCategory(category)}
                      >
                        <span className="flex items-center text-gray-700">
                          <Tag size={16} className="mr-2 text-qatken-blue" />
                          {category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subscribe */}
                <div className="bg-qatken-blue rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                  <p className="mb-4 opacity-90">
                    Stay updated with our latest articles and property insights.
                  </p>
                  <form className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-qatken-blue hover:bg-gray-100"
                    >
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
