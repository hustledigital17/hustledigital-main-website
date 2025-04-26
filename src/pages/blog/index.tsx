import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";

const dummyBlogs = [
  {
    title: "Digital Marketing Trends for 2024",
    description: "Explore the latest digital marketing trends that will shape the industry in 2024. From AI-powered marketing to sustainable digital practices.",
    date: "March 15, 2024",
    imageUrl: "/blog/digital-marketing-trends.jpg",
    slug: "digital-marketing-trends-2024",
    category: "Digital Marketing"
  },
  {
    title: "Maximizing Social Media ROI",
    description: "Learn effective strategies to measure and improve your social media return on investment. Discover key metrics and optimization techniques.",
    date: "March 10, 2024",
    imageUrl: "/blog/social-media-roi.jpg",
    slug: "maximizing-social-media-roi",
    category: "Social Media"
  },
  {
    title: "SEO Best Practices for 2024",
    description: "Stay ahead of the competition with these proven SEO strategies. Learn about the latest algorithm updates and optimization techniques.",
    date: "March 5, 2024",
    imageUrl: "/blog/seo-best-practices.jpg",
    slug: "seo-best-practices-2024",
    category: "SEO"
  },
  {
    title: "Content Marketing Strategy Guide",
    description: "Develop a winning content marketing strategy that drives engagement and converts leads. Learn about content planning, creation, and distribution.",
    date: "March 1, 2024",
    imageUrl: "/blog/content-marketing.jpg",
    slug: "content-marketing-strategy-guide",
    category: "Content Marketing"
  },
];

const BlogsPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <SectionHeader
            title="Latest Insights & Updates"
            subtitle="Stay informed with our latest articles on digital marketing, business strategy, and industry trends."
            className="max-w-3xl mx-auto"
          />
          <ButtonLink
            href="/contact"
            variant="primary"
            size="lg"
            className="mt-8"
            showArrow
          >
            Get Custom Marketing Strategy
          </ButtonLink>
        </div>

        {/* Featured Blog */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/blog/featured-post.jpg"
                  alt="Featured blog post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-hustle-accent text-white px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-hustle-accent font-medium mb-2">Digital Strategy</span>
                <h2 className="text-3xl font-bold mb-4">
                  How to Build a Strong Digital Presence in 2024
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover the essential steps to establish and maintain a powerful digital presence
                  that drives business growth and enhances brand visibility in today's competitive
                  landscape.
                </p>
                <ButtonLink
                  href="/blog/building-digital-presence-2024"
                  variant="outline"
                  showArrow
                >
                  Read Full Article
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;