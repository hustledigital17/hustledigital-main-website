import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  slug: string;
  category: string;
}

const BlogCard = ({ title, description, date, imageUrl, slug, category }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-hustle-accent text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl hover:text-hustle-accent transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <Link 
            to={`/blog/${slug}`} 
            className="text-hustle-accent hover:text-hustle-accent/80 flex items-center gap-2"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;