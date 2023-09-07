import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { base_uri } from "../api/routes";


export const metadata: Metadata = {
    title: 'Blog',
    description: 'Learn more about our company',
}

export default async function Blog() {

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect(`${base_uri}/api/auth/signin`);
  } else 

  return (
    <div>
      <h1>Ahmad Blog</h1>
      <p>We are a app development company that wants to boost bussiness productivity !</p>
    </div>
  );
}