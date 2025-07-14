import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Sacred Journey: A Guide to Lumbini Pilgrimage',
      excerpt: 'Discover the spiritual significance of Lumbini and how to make the most of your pilgrimage to the birthplace of Buddha.',
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Meditation Master',
      date: 'March 15, 2024',
      category: 'Spirituality',
      featured: true
    },
    {
      id: 2,
      title: 'Spring Festival Celebration at Lumbini Palace Resort',
      excerpt: 'Join us for our annual Spring Festival featuring traditional music, dance, and cultural performances.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Event Team',
      date: 'March 10, 2024',
      category: 'Events',
      featured: false
    },
    {
      id: 3,
      title: 'Mindful Fishing: Finding Peace by the Pond',
      excerpt: 'Learn how fishing can become a form of meditation and discover the tranquil fishing experiences at our resort.',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Fishing Guide',
      date: 'March 5, 2024',
      category: 'Activities',
      featured: false
    },
    {
      id: 4,
      title: 'New Wellness Program: Ayurvedic Treatments',
      excerpt: 'Experience authentic Ayurvedic treatments at our newly launched wellness center with traditional healing methods.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Wellness Team',
      date: 'February 28, 2024',
      category: 'Wellness',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Tourism: Our Commitment to Lumbini',
      excerpt: 'Learn about our eco-friendly initiatives and how we are preserving the sacred environment of Lumbini.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sustainability Team',
      date: 'February 20, 2024',
      category: 'Environment',
      featured: false
    },
    {
      id: 6,
      title: 'Chef\'s Special: Authentic Nepali Cuisine',
      excerpt: 'Discover the flavors of Nepal with our executive chef\'s special menu featuring traditional and modern dishes.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Executive Chef',
      date: 'February 15, 2024',
      category: 'Dining',
      featured: false
    }
  ];

  const categories = ['All', 'Spirituality', 'Events', 'Activities', 'Wellness', 'Environment', 'Dining'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Blog & News"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog & News</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with our latest news and insights
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-green mb-4">Featured Article</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold text-deep-green mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-600 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-6">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-green mb-4">Latest News & Updates</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Stay informed about our latest developments, events, and insights
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-white text-gray-700 hover:bg-gold hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-deep-green mb-3 hover:text-gold transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-gold hover:text-yellow-600 font-medium inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-deep-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, updates, and special offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gold text-white px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
