import { createServerClient, parseCookies, serializeCookies } from '@supabase/ssr'

export function createSupabaseServerClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `cookies()` helper can be called only when a Server Action or Route Handler is executing
            // This error is safe to ignore in a development environment if you're not using Server Actions/Route Handlers yet
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `cookies()` helper can be called only when a Server Action or Route Handler is executing
            // This error is safe to ignore in a development environment if you're not using Server Actions/Route Handlers yet
          }
        },
      },
    }
  )
}