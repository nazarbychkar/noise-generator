import Divider from '@/components/ui/divider'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className="min-h-screen bg-base-200 p-20">
      <h1 className='text-5xl font-bold py-10'>How it works?</h1>
      <Divider />
    </div>
    <div>
      <Link href="/api/auth/login" className='btn btn-secondary text-slate-50'>Get sign up for the ultimate access</Link>
    </div>
    </div>
    
  )
}
