// app/ModernNavbarWrapper.js (or .tsx) — This file IS a client component
"use client";

import { useAuth } from "@/utils/auth";
import ModernNavbar from "./Navbar";

export default function ModernNavbarWrapper() {
  const { user } = useAuth();

  return <ModernNavbar user={user} />;
}
