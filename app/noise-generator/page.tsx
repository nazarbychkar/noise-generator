import Divider from '@/components/ui/divider'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-200 p-20">
      <h1 className="py-10 text-5xl font-bold">How it works?</h1>
      <Divider />
      <h1 className="py-10 text-5xl font-bold">If you want to try full access:</h1>
      <Link href="/api/auth/login" className="btn btn-secondary text-slate-50">
        Get sign up for the ultimate access
      </Link>
    </div>
  )
}
