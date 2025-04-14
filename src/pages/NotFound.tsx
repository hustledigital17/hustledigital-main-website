
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hustle-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-hustle-light mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-hustle-light mb-8">
          The page you are trying to access might have been moved, deleted, or might never have existed.
        </p>
        <Button asChild className="bg-hustle-accent hover:bg-hustle-accent/90">
          <Link to="/" className="inline-flex items-center">
            <Home size={18} className="mr-2" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
