
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Bookmark, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Qatken Properties</title>
        <meta name="description" content="Qatken Properties privacy policy detailing how we collect, use, and protect your personal information." />
      </Helmet>

      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 flex items-center">
                <Shield className="mr-3 h-8 w-8 text-qatken-blue" />
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                At Qatken Properties, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in various ways, including:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact details you provide.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar technologies.</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing and maintaining our services</li>
                <li>Notifying you about changes to our services</li>
                <li>Providing customer support</li>
                <li>Gathering analysis to improve our services</li>
                <li>Monitoring the usage of our services</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Sending you marketing and promotional communications</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> Third parties that help us operate our business and provide services.</li>
                <li><strong>Business Partners:</strong> Companies we collaborate with to offer joint services or promotions.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>

              <h2>Security</h2>
              <p>
                We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
