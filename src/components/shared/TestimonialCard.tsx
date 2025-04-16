
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
    <div className={`bg-white p-10 rounded-lg shadow-md opacity-0 animate-fade-in ${delay} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-black mb-8 italic text-lg leading-relaxed">{quote}</p>
      <div className="flex items-center mt-auto">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-hustle-accent">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-black text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
