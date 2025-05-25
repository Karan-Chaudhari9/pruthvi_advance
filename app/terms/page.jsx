export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using Pruthvi Advance Laboratory services, you agree to be bound by these 
                  Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-600">
                  We provide diagnostic laboratory services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Medical testing and diagnostics</li>
                  <li>Sample collection (including home collection)</li>
                  <li>Test result reporting</li>
                  <li>Health consultations</li>
                  <li>Online appointment booking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Appointment and Cancellation</h2>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Appointments must be scheduled in advance</li>
                  <li>24-hour notice is required for cancellations</li>
                  <li>Late arrivals may result in rescheduling</li>
                  <li>No-shows may incur a cancellation fee</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-600">
                  Payment is required at the time of service unless otherwise arranged. We accept:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Cash payments</li>
                  <li>Credit/Debit cards</li>
                  <li>Online payments</li>
                  <li>Insurance coverage (where applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Test Results</h2>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Results will be provided within the specified timeframe</li>
                  <li>Confidentiality of results is maintained</li>
                  <li>Results can be accessed through our secure online portal</li>
                  <li>Physical copies are available upon request</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability Limitations</h2>
                <p className="text-gray-600">
                  While we strive for accuracy, we cannot guarantee that all test results are 100% accurate. 
                  Our liability is limited to the cost of the tests performed. We are not liable for:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Indirect or consequential damages</li>
                  <li>Delays in service delivery due to unforeseen circumstances</li>
                  <li>Errors in results due to incorrect sample collection or handling</li>
                  <li>Issues arising from incorrect information provided by patients</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For questions or concerns about these terms, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p>Email: info@pruthvilabs.com</p>
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