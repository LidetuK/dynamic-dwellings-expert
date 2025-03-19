
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BlogPostCard from './BlogPostCard';
import CategoryList from './CategoryList';
import { blogPosts } from '@/data/blogPosts';

interface BlogSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogSidebar = ({ categories, activeCategory, onCategoryChange }: BlogSidebarProps) => {
  // Calculate category counts
  const categoryCounts: Record<string, number> = {};
  blogPosts.forEach(post => {
    if (categoryCounts[post.category]) {
      categoryCounts[post.category]++;
    } else {
      categoryCounts[post.category] = 1;
    }
  });

  return (
    <div className="lg:w-1/4">
      {/* Popular Posts */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Popular Posts</h3>
        <div className="space-y-4">
          {blogPosts.slice(0, 3).map(post => (
            <BlogPostCard 
              key={post.id} 
              {...post} 
              size="small" 
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <CategoryList 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        categoryCounts={categoryCounts}
      />

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
  );
};

export default BlogSidebar;
