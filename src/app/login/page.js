'use client';

import { useAuth } from '@/utils/auth';
import AuthForm from '@/components/AuthForm';
import PortfolioDashboard from '../portfolio/page';
import { useEffect, useState } from 'react';

export default function Login() {
  const { user, loading } = useAuth();
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    if (!loading) {
      setInitialCheckDone(true);
    }
  }, [loading]);

  if (loading || !initialCheckDone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return user ? <PortfolioDashboard /> : <AuthForm />;
}