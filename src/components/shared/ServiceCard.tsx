
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: string;
}

const ServiceCard = ({ title, description, icon, delay = "animate-delay-100" }: ServiceCardProps) => {
  return (
    <Card className={`opacity-0 animate-fade-in ${delay} overflow-hidden group border border-gray-200 hover:border-hustle-accent/50 hover:shadow-lg transition-all duration-300`}>
      <CardHeader className="pb-2">
        <div className="mb-3 text-hustle-accent">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <Link 
          to="/services" 
          className="inline-flex items-center text-sm font-medium text-hustle-accent group-hover:underline"
        >
          Learn more <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
