import { base_uri } from "@/app/api/routes";

export const revalidate = 420;



interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params : { slug: string };
}

// export async function generateStaticParams() {
//     const posts: Post[] = await fetch(`${base_uri}/api/content`).then(
//         (res) => res.json()
//     );

//     return posts.map((post) => ({
//         params: post.slug,
//     }));
// }

export default async function PostPage({ params }: Props) {
    
    const posts: Post[] = await fetch(`${base_uri}/api/content`).then(
        (res) => res.json()
    );


    const post = posts.find((post) => post.slug === params.slug)!;


    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p> 
        </div>
    );   
}