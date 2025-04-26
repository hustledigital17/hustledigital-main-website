import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  delay?: string;
}

const TestimonialCard = ({ quote, name, title, delay = "" }: TestimonialCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in ${delay}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <p className="text-gray-600 mb-6">{quote}</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
