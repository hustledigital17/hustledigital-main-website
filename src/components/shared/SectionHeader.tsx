import { ReactNode } from "react";
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  center?: boolean;
  className?: string;
}
const SectionHeader = ({
  title,
  subtitle,
  description,
  center = false,
  className = ""
}: SectionHeaderProps) => {
  return <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16 ${className}`}>
      {subtitle && <p className="text-hustle-accent font-medium mb-2 opacity-0 animate-fade-in">
          {subtitle}
        </p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 opacity-0 animate-fade-in animate-delay-100">
        {title}
      </h2>
      {description}
    </div>;
};
export default SectionHeader;