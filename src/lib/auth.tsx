import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const res = await fetch("https://www.melivecode.com/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();

        // If no error and we have user data, return it
        if (response.status) {
          return response.user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
