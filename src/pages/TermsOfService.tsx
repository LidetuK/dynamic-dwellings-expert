
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FileText, Scale } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | Qatken Properties</title>
        <meta name="description" content="Qatken Properties terms of service and conditions for using our website and services." />
      </Helmet>

      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 flex items-center">
                <Scale className="mr-3 h-8 w-8 text-qatken-blue" />
                Terms of Service
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the Qatken Properties website and services. By accessing or using our website and services, you agree to be bound by these Terms.
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>

              <h2>Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>Use our services in any way that violates any applicable law or regulation</li>
                <li>Attempt to interfere with the proper functioning of our services</li>
                <li>Attempt to bypass any security measures we have put in place</li>
                <li>Collect or harvest any personal data from our services</li>
                <li>Use our services to transmit or upload any viruses or malicious code</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                Our website, services, and all content and materials included on our website (including but not limited to text, graphics, logos, images, and software) are owned by Qatken Properties or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2>User Accounts</h2>
              <p>
                When you create an account with us, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
              </p>

              <h2>Property Listings</h2>
              <p>
                Property listings on our website are provided for informational purposes only. While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of any listings. You should verify all information directly with the property owner or agent before making any decisions.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Qatken Properties be liable for any indirect, special, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any errors, omissions, or defects in the content or functionality of our services</li>
              </ul>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Qatken Properties and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: info@qatkenproperties.com</li>
                <li>Phone: +254 714 001 000</li>
                <li>Address: Nextgen Mall, Mezzanine Floor, Office No. 9, Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default TermsOfService;
