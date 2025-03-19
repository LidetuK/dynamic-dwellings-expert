
import { Tag } from 'lucide-react';

interface CategoryListProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

const CategoryList = ({ categories, activeCategory, onCategoryChange, categoryCounts }: CategoryListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
      <div className="space-y-2">
        {categories.filter(cat => cat !== 'All').map(category => (
          <button
            key={category}
            className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => onCategoryChange(category)}
          >
            <span className="flex items-center text-gray-700">
              <Tag size={16} className="mr-2 text-qatken-blue" />
              {category}
            </span>
            <span className="text-sm text-gray-500">
              {categoryCounts[category] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
