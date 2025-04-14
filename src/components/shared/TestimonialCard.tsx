
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imgSrc: string;
  delay?: string;
}

const TestimonialCard = ({ quote, name, title, imgSrc, delay = "" }: TestimonialCardProps) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in ${delay} hover:shadow-lg transition-all duration-300`}>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-black mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-black">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
