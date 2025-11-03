import PageTitle from "@/app/components/PageTitle";
import { Parser } from 'html-to-react';

type Post = {
    title: string;
    author: string;
    date: string;
    content: string;
    category: string;
}

// display all content of selected Blog Post

export default async function Post({ params }: { params: { id: string } }) {
    const { id } = await params;

    // fetch selected blog Post from external api
    // const res = await fetch(`https://vercel-blog-api-eta.vercel.app/api/v1/posts/${id}`);

    // use env var for api domain
    const apiDomain: string = process.env.API_DOMAIN!;
    const res: Response = await fetch(`${apiDomain}/posts/${id}`);

    //console.log(res);

    //convert response json to a Post objec
    const post: Post = await res.json();
    // not found error handler
    if (!res.ok) {
        return (
            <h1>Post not Found</h1>
        );
    }

    // display blog post
    return (
        <main>
            <PageTitle title="Blog post" />
            <h1>{post.title}</h1>
            <h2>By {post.author} on {new Date(post.date).toLocaleDateString()}</h2>
            <article>
                {Parser().parse(post.content)}
            </article>
        </main>
    );
}