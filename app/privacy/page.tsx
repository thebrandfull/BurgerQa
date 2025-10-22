'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display font-bold text-5xl mb-8">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <div className="card p-8 space-y-6 text-dark-300">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Information We Collect
              </h2>
              <p>
                Burger Qatar collects minimal information to provide our ranking service.
                We use browser local storage to track your votes and ensure fair voting practices.
                We do not collect personal information such as names, email addresses, or phone numbers.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                How We Use Your Information
              </h2>
              <p>
                The voting data stored in your browser is used solely to prevent duplicate votes
                and provide you with a personalized experience showing which restaurants you've voted for.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Data Security
              </h2>
              <p>
                All voting data is stored locally in your browser and is not transmitted to our servers.
                We take the security of our platform seriously and implement industry-standard practices
                to protect the integrity of our ranking system.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                hello@burgerqa.com
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
