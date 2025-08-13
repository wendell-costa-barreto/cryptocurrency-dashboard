import { useState } from 'react'
export const useSignUpState = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return {
    isSignUp,
    setIsSignUp
  }
}
