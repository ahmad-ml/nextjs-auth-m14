import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export const metadata: Metadata = {
    title: 'About us',
    description: 'Learn more about our company',
}

export default async function About() {

  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect('/api/auth/signin');
    return <p>You must be signed in...</p>
  } else 

  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}