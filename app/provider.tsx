"use client";
import { SessionProvider } from "next-auth/react";

export const CustomProviders = ({ children }: any) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};
