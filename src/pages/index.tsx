import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, SignUp, SignUpButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
;



const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser()

  return (
    <>
      <Head>
        <title>NextJs-Playground</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Playground</h1>
        { !user.isSignedIn && <> <SignInButton/> <SignUpButton/></>}
        {!!user.isSignedIn && <SignOutButton/>}
        <SignIn path="/signin" routing="path" signUpUrl="/signup"/>
        <SignUp path="signup" routing="path" signInUrl="/singin"/>
      </main>
    </>
  );
};

export default Home;
