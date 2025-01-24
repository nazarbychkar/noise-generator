'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Waves, Volume2, Headphones, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { redirect } from "next/dist/server/api-utils"

export default function NoiseGeneratorLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-green-800">NoiseZen</span>
          </div>
          <div className="flex space-x-4">
            <a href="#features" className="text-green-700 hover:text-green-900">Features</a>
            <a href="#pricing" className="text-green-700 hover:text-green-900">Pricing</a>
            <Button onClick={() => router.push("/login")} variant="outline" className="text-green-700 border-green-300 hover:bg-green-100">
              Log in
            </Button>
            <Button className="bg-green-600 text-white hover:bg-green-700">Sign up</Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Find Your Perfect Sound Oasis
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Discover tranquility with our customizable noise generator. Create your ideal acoustic environment for focus, relaxation, or sleep.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg" onClick={() => window.location.href='/noise-generator'}>
              Start Listening
            </Button>
            <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">
              Immerse Yourself in Soothing Sounds
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<Volume2 className="h-10 w-10 text-green-600" />}
                title="Customizable Soundscapes"
                description="Mix and match various ambient sounds to create your perfect acoustic environment."
              />
              <FeatureCard
                icon={<Headphones className="h-10 w-10 text-green-600" />}
                title="High-Quality Audio"
                description="Experience crystal-clear, high-fidelity sound that envelops your senses."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-green-600" />}
                title="Instant Relaxation"
                description="One-click activation for immediate stress relief and improved focus."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">
              Choose Your Zen Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Basic Calm"
                price="Free"
                features={[
                  "5 basic soundscapes",
                  "Limited mixing options",
                  "Ad-supported"
                ]}
                buttonText="Start Free"
              />
              <PricingCard
                title="Serene Pro"
                price="$9.99/month"
                features={[
                  "Unlimited soundscapes",
                  "Advanced mixing",
                  "Ad-free experience",
                  "Offline mode"
                ]}
                buttonText="Go Pro"
                highlighted={true}
              />
              <PricingCard
                title="Zen Master"
                price="$19.99/month"
                features={[
                  "All Pro features",
                  "Exclusive premium sounds",
                  "Personal sound consultant",
                  "Priority support"
                ]}
                buttonText="Maximize Zen"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Transform Your Sonic Environment?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who have discovered the power of customized ambient sound. Start your journey to better focus and relaxation today.
            </p>
            <div className="flex justify-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-64 bg-white text-green-800"
              />
              <Button className="bg-white text-green-700 hover:bg-green-100">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-green-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Waves className="h-6 w-6" />
              <span className="text-xl font-semibold">NoiseZen</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            © {new Date().getFullYear()} NoiseZen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-green-700">{description}</p>
    </div>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

function PricingCard({ title, price, features, buttonText, highlighted = false }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${highlighted ? 'ring-2 ring-green-500' : ''}`}>
      <h3 className="text-2xl font-semibold text-green-800 mb-4">{title}</h3>
      <p className="text-3xl font-bold text-green-600 mb-6">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-green-700">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full ${highlighted ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
        {buttonText}
      </button>
    </div>
  )
}

