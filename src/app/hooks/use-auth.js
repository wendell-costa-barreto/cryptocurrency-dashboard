
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase' // Import client-side supabase instance
import { signIn as serverSignIn, signUp as serverSignUp, signOut as serverSignOut } from '@/app/auth/action' // Import server actions

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    const fetchInitialSession = async () => {
      setLoading(true)
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error fetching initial session:', error)
        setAuthError(error.message)
      }
      setUser(session?.user ?? null)
      setLoading(false)
    }

    fetchInitialSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
      setAuthError(null) // Clear errors on state change
    })

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe()
  }, [])

  /**
   * @param {string} email - User's email.
   * @param {string} password - User's password.
   * @returns {Promise<{data: any | null, error: string | null}>}
   */
  const signIn = async (email, password) => {
    setLoading(true)
    setAuthError(null)
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try {
      const result = await serverSignIn(formData)
      if (result?.error) {
        setAuthError(result.error)
        return { data: null, error: result.error }
      }
      return { data: { user: supabase.auth.user() }, error: null } // Placeholder, actual user update is via listener
    } catch (error) {
      setAuthError(error.message)
      return { data: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  /**
   * @param {string} email - User's email.
   * @param {string} password - User's password.
   * @param {string} username - User's username.
   * @returns {Promise<{data: any | null, error: string | null}>}
   */
  const signUp = async (email, password, username) => {
    setLoading(true)
    setAuthError(null)
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('username', username)

    try {
      // Call the server action
      const result = await serverSignUp(formData)
      if (result?.error) {
        setAuthError(result.error)
        return { data: null, error: result.error }
      }
      // The server action handles redirect.
      return { data: { user: supabase.auth.user() }, error: null } // Placeholder
    } catch (error) {
      setAuthError(error.message)
      return { data: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  /**
   * Client-side function to initiate sign-out via a server action.
   * @returns {Promise<{error: string | null}>}
   */
  const signOut = async () => {
    setLoading(true)
    setAuthError(null)
    try {
      // Call the server action
      const result = await serverSignOut()
      if (result?.error) {
        setAuthError(result.error)
        return { error: result.error }
      }
      // The server action handles redirect.
      return { error: null }
    } catch (error) {
      setAuthError(error.message)
      return { error: error.message }
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, authError, signIn, signUp, signOut }
}
