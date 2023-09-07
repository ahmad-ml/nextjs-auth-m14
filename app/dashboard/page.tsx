import { SignOutButton } from '@/components/buttons';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ProfileForm } from './ProfileForm';


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserName = session?.user?.name!;
  const user = await prisma.user.findUnique({
    where: {
      name: currentUserName,
    },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <SignOutButton />
      <ProfileForm user={user} />
    </>
  );
}
