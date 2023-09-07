import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit Amet",
    slug: "2",
    content:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Consectetur Adipiscing",
    slug: "3",
    content:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Integer Nec Odio",
    slug: "4",
    content:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
  {
    title: "Praesent Libero",
    slug: "5",
    content:
      "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.",
  },
];

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    // redirect or render something else
  }
  return NextResponse.json(posts);
}
