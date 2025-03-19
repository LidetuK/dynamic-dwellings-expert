
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Buy', 
      path: '/buy', 
      dropdown: true,
      items: [
        { label: 'Completed', path: '/buy/completed' },
        { label: 'Ongoing', path: '/buy/ongoing' }
      ]
    },
    { 
      label: 'Rent', 
      path: '/rent', 
      dropdown: true,
      items: [
        { label: 'Furnished', path: '/rent/furnished' },
        { label: 'Unfurnished', path: '/rent/unfurnished' },
        { label: 'Commercial', path: '/rent/commercial' }
      ]
    },
    { label: 'About Us', path: '/about' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          <img 
            src="/lovable-uploads/5a2f12d1-d188-4557-bc33-4f2a68ba8f70.png" 
            alt="Qatken Properties" 
            className={cn(
              "transition-all duration-300",
              isScrolled ? "h-12" : "h-16"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={cn(
                      "px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center",
                      isActive(item.path)
                        ? "text-qatken-blue"
                        : "text-gray-700 hover:text-qatken-blue"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 origin-top",
                    activeDropdown === item.label 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    <div className="py-2 min-w-[180px]">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-qatken-lightgray hover:text-qatken-blue"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    isActive(item.path)
                      ? "text-qatken-blue"
                      : "text-gray-700 hover:text-qatken-blue"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Button className="bg-qatken-blue hover:bg-qatken-blue/90 text-white">
            <Phone className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.label} className="py-1">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center",
                        isActive(item.path)
                          ? "text-qatken-blue bg-qatken-lightgray"
                          : "text-gray-700"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <div className={cn(
                      "mt-1 pl-4 space-y-1 transition-all duration-200 overflow-hidden",
                      activeDropdown === item.label ? "max-h-40" : "max-h-0"
                    )}>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-qatken-lightgray"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive(item.path)
                        ? "text-qatken-blue bg-qatken-lightgray"
                        : "text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="px-4 pb-8">
            <Button className="w-full bg-qatken-blue hover:bg-qatken-blue/90 text-white">
              <Phone className="mr-2 h-4 w-4" /> Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
