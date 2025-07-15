"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import GaireNavbar from "@/components/Navbar";
export default function BlogsPage() {
  const featuredBlog = {
    title:
      "The Future of AI-Powered Freight Dispatching: What Truckers Need to Know",
    excerpt:
      "Artificial Intelligence is revolutionizing the trucking industry. From route optimization to predictive maintenance, AI is helping drivers maximize their profits while reducing operational costs. Learn how to leverage these technologies for your business.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Rajesh Gaire",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
  };

  const blogPosts = [
    {
      title:
        "5 Essential Tips for Owner-Operators to Maximize Load Profitability",
      excerpt:
        "Running a successful trucking business requires more than just driving skills. Learn the key strategies that top-performing owner-operators use to maximize their load profitability and build sustainable businesses.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Michael Johnson",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Business Tips",
    },
    {
      title: "Understanding ELD Compliance: A Complete Guide for Truckers",
      excerpt:
        "Electronic Logging Devices (ELDs) are mandatory for most commercial vehicles. This comprehensive guide covers everything you need to know about ELD compliance, best practices, and how to choose the right device.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sarah Chen",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Compliance",
    },
    {
      title: "How to Build Strong Relationships with Brokers and Shippers",
      excerpt:
        "Long-term success in trucking depends on building strong relationships with brokers and shippers. Discover proven strategies for establishing trust, maintaining communication, and securing repeat business.",
      image: "/placeholder.svg?height=300&width=400",
      author: "David Rodriguez",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Business",
    },
    {
      title: "Fuel Efficiency Strategies That Actually Work",
      excerpt:
        "With fuel costs being one of the biggest expenses for truckers, improving fuel efficiency is crucial for profitability. Learn practical tips and techniques that can reduce your fuel consumption by 10-15%.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Lisa Thompson",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Operations",
    },
    {
      title:
        "The Complete Guide to Truck Maintenance: Preventing Costly Breakdowns",
      excerpt:
        "Preventive maintenance is key to avoiding expensive repairs and downtime. This comprehensive guide covers essential maintenance schedules, warning signs to watch for, and how to find reliable service providers.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Michael Johnson",
      date: "November 15, 2024",
      readTime: "12 min read",
      category: "Maintenance",
    },
  ];

  const categories = [
    { name: "All", count: 15 },
    { name: "Technology", count: 4 },
    { name: "Business Tips", count: 6 },
    { name: "Compliance", count: 3 },
    { name: "Operations", count: 5 },
    { name: "Maintenance", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <GaireNavbar />

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industry <span className="text-green-500">Insights</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the
            trucking industry. Our expert team shares valuable knowledge to help
            you succeed.
          </p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800">
                  {featuredBlog.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">
                  {featuredBlog.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredBlog.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredBlog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredBlog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 py-16 bg-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Stay ahead in the trucking industry with our latest articles,
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-green-500"></div>
                <span className="text-xl font-bold">Gaire Freight Line</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about-us" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gaire Freight Line. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
