import Link from 'next/link'

export default function Home() {
  return (
    <div className="gradient-bg hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">NoiseNest</h1>
          <p className="py-6 text-white">
            Immersive Soundscapes for Focus and Relaxation
          </p>
          <Link href="/noise-generator" className="btn btn-outline text-white">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
