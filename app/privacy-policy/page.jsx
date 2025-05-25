export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Name and contact information</li>
                  <li>Medical history and test results</li>
                  <li>Appointment scheduling information</li>
                  <li>Payment information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Provide medical testing and diagnostic services</li>
                  <li>Process your appointments and payments</li>
                  <li>Send you appointment reminders and results</li>
                  <li>Improve our services and develop new ones</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information. 
                  This includes encryption, secure servers, and strict access controls. However, 
                  no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-600">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Healthcare providers involved in your care</li>
                  <li>Insurance companies (with your consent)</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p>Email: privacy@pruthvilabs.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: 123, Healthcare Avenue, Ahmedabad</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 