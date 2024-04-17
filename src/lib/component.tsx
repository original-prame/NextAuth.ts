"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@material-tailwind/react";

export const LoginBtn = () => {
  return (
    <Button color="green" onClick={() => signIn()}>
      Login
    </Button>
  );
};

export const LogoutBtn = () => {
  return (
    <Button color="red" onClick={() => signOut()}>
      Logout
    </Button>
  );
};
