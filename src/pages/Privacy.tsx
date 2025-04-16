
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-hustle-light mb-8">Last updated: April 16, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              At Hustle Digital, we respect your hustle—and your privacy. This Privacy Policy lays out what we collect, why we collect it, and how we keep it safe. No shady stuff, ever.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What We Collect</h2>
            <p className="font-medium">Stuff You Give Us</p>
            <p>
              When you hit us up—whether it's to get a free audit, book a service, or slide into our inbox—we might collect:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details (website, industry, etc.)</li>
              <li>Anything else you tell us to help us help you</li>
            </ul>
            
            <p className="font-medium">Stuff That Happens Automatically</p>
            <p>
              When you browse our site, we might automatically collect:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>IP address and browser/device info</li>
              <li>Pages visited and time spent on site</li>
              <li>Cookies (not the tasty kind—just the tech kind)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Why We Collect It</h2>
            <p>
              Because we want to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide you with epic services</li>
              <li>Make your experience smoother every time you visit</li>
              <li>Stay in touch with updates, insights, and the occasional marketing gold</li>
              <li>Improve how our site performs (and find bugs before you do)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Who We Share It With</h2>
            <p>
              <strong>Short answer:</strong> no one shady.<br />
              <strong>Long answer:</strong> sometimes we share with trusted third parties who help us run our business (like our web host, analytics tools, or email platforms). They're under contract to keep your info locked down.
            </p>
            <p>
              We'll never sell your info. That's just not how we roll.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Rights</h2>
            <p>
              Depending on where you're at, you might have rights like:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Seeing what data we've got on you</li>
              <li>Asking us to update or delete it</li>
              <li>Telling us to stop using it</li>
              <li>Getting a copy of it in a downloadable format</li>
            </ul>
            <p>
              Want to do any of that? Just email us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>
              We take security seriously. We use legit tech and best practices to protect your info. But—full transparency—nothing online is 100% bulletproof. If anything ever happens, you'll hear it from us first.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
            <p>
              Yes, we use cookies. They're tiny files that help us track what's working on our site and what needs work. You can block them in your browser settings, but some parts of the site might not work as smoothly.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We might update this policy every now and then. If we do, we'll change the date at the top. If it's a big change, we'll make it super obvious.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Got Questions?</h2>
            <p>
              Let's talk. You can reach us here:
            </p>
            <p className="my-4">
              <strong>📧</strong> <a href="mailto:hustledigi@gmail.com" className="text-hustle-accent hover:underline">hustledigi@gmail.com</a><br />
              <strong>📞</strong> +1 (555) 123-4567
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
