
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-hustle-light mb-8">Last Updated: April 14, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              At Hustle Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Important Information</h2>
            <p>
              This privacy policy aims to give you information on how Hustle Digital collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our newsletter, purchase a service, or take part in a survey.
            </p>
            <p>
              It is important that you read this privacy policy together with any other privacy policy or fair processing notice we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Financial Data: includes bank account and payment card details.</li>
              <li>Transaction Data: includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li>Profile Data: includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
              <li>Usage Data: includes information about how you use our website, products and services.</li>
              <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="my-4">
              <strong>Email:</strong> <a href="mailto:hustledigi@gmail.com" className="text-hustle-accent hover:underline">hustledigi@gmail.com</a><br />
              <strong>Phone:</strong> +1 (555) 123-4567<br />
              <strong>Address:</strong> 123 Marketing Street, Digital City, DC 10101, United States
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
