import { createSupabaseServerClient } from '@/utils/server'
import AuthForm from '@/components/ui/AuthForm'
import { cookies } from 'next/headers'

// This is a Server Component, meaning it renders on the server.
export default async function HomePage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient()

  // Fetch the session on the server for initial render
  const { data: { session } } = await supabase.auth.getSession()

  // You can set metadata here based on the session or user data
  // For example:
  // export const metadata = {
  //   title: session ? `Welcome, ${session.user.email}` : 'Auth App',
  //   description: 'Authentication example with Next.js and Supabase',
  // }

  return (
    <main>
      {/* AuthForm is a client component, but it can be rendered by a server component */}
      <AuthForm />
    </main>
  )
}