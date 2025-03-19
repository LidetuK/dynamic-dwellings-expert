
import { Calendar, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const BlogPostCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  date, 
  author, 
  category, 
  readTime, 
  featured = false,
  size = 'medium'
}: BlogPostCardProps) => {
  if (size === 'small') {
    return (
      <div className="flex gap-3">
        <img 
          src={image} 
          alt={title} 
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <Link 
            to={`/blog/${id}`}
            className="font-medium text-gray-900 hover:text-qatken-blue transition-colors line-clamp-2"
          >
            {title}
          </Link>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    );
  }

  if (featured) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="p-6">
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span className="bg-white/20 px-2 py-1 rounded text-white">Featured</span>
            <span className="text-white/80">{category}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="opacity-90 mb-4">{excerpt.substring(0, 120)}...</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 text-sm opacity-80">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{author}</span>
              </div>
            </div>
            
            <Link 
              to={`/blog/${id}`}
              className="text-white font-medium inline-flex items-center hover:underline"
            >
              Read More <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/blog/${id}`} className="block">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-qatken-blue font-medium">{category}</span>
          <span className="text-xs text-gray-500">{readTime}</span>
        </div>
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-xl font-bold mb-2 hover:text-qatken-blue transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">
          {excerpt.substring(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <Link 
            to={`/blog/${id}`}
            className="text-qatken-blue font-medium inline-flex items-center hover:underline"
          >
            Read More <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
