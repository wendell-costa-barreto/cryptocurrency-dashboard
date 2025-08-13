
import { createSupabaseServerClient } from '@/utils/server'
import { redirect } from 'next/navigation'

/**
 * Server Action to handle user sign-in.
 * @param {FormData} formData - The form data containing email and password.
 * @returns {Promise<{error: string | null}>} - An object indicating success or error.
 */
export async function signIn(formData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const supabase = createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Sign-in error:', error.message)
    return { error: error.message }
  }

  redirect('/dashboard')
}

/**
 * Server Action to handle user sign-up.
 * @param {FormData} formData - The form data containing email, password, and username.
 * @returns {Promise<{error: string | null}>} - An object indicating success or error.
 */
export async function signUp(formData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const username = formData.get('username') // Assuming you have a username field
  const supabase = createSupabaseServerClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  })

  if (error) {
    console.error('Sign-up error:', error.message)
    return { error: error.message }
  }

  redirect('/login')
}

/**
 * @returns {Promise<{error: string | null}>} - An object indicating success or error.
 */
export async function signOut() {
  const supabase = createSupabaseServerClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Sign-out error:', error.message)
    return { error: error.message }
  }

  // Revalidate the path to clear any cached authenticated data
  revalidatePath('/', 'layout')
  // Redirect to the home page or login page after sign-out
  redirect('/')
}