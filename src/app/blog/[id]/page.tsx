import PageTitle from "@/app/components/PageTitle";

type Post = {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    category: string;
}

// display all content of selected Blog Post

export default async function Post({ params }: { params: { id: number } }) {
    const { id } = await params;

    // fetch selected blog Post from external api
    const res = await fetch(`https://api.vercel.app/blog/${id}`);
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
            <PageTitle title = "Blog post" />
            <h1>{post.title}</h1>
            <h2>By {post.author} on {post.date}</h2>
            <article>
                {post.content}
            </article>
        </main>
    );
}