import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { LoginBtn, LogoutBtn } from "@/src/lib/component";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <>
          <h1 className="py-4">Welcome to Client session page</h1>
          <pre className="py-4">
            email: {JSON.stringify(session.user?.email)}
          </pre>
          <LogoutBtn />
        </>
      ) : (
        <>
          <h1 className="py-4">Welcome to NextAuth practice</h1>
          <LoginBtn />
        </>
      )}
    </>
  );
}
