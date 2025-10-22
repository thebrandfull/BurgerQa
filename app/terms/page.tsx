'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display font-bold text-5xl mb-8">
            Terms of <span className="gradient-text">Service</span>
          </h1>

          <div className="card p-8 space-y-6 text-dark-300">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using Burger Qatar, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Voting Policy
              </h2>
              <p>
                Users are allowed to vote once per restaurant. We use browser storage to track
                votes and maintain fair rankings. Attempting to manipulate votes through
                fraudulent means is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Content Accuracy
              </h2>
              <p>
                While we strive to maintain accurate restaurant information, details such as
                hours, phone numbers, and addresses may change. We recommend confirming
                information directly with restaurants before visiting.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Limitation of Liability
              </h2>
              <p>
                Burger Qatar is provided "as is" without warranties of any kind. We are not
                responsible for any decisions made based on information provided on this platform.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the
                platform constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Contact
              </h2>
              <p>
                For questions about these Terms of Service, contact us at hello@burgerqa.com
              </p>
            </div>

            <div className="pt-6 border-t border-dark-800 text-sm text-dark-500">
              Last updated: October 2024
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
