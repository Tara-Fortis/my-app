// add link import
import Link from "next/link";
import PageTitle from "../components/PageTitle";

// set structure of blog post data
interface Post {
    // convered id => _id to use Rich's blog
    _id: number;
    title: string;
}

export default async function Blog() {
    // use fetch API to get blog data from Vercel sample blog API
    //const data: Response = await fetch('https://api.vercel.app/blog');
    // rich's demo blog
    const data: Response = await fetch('https://vercel-blog-api-eta.vercel.app/api/v1/posts');

    // convert API json to an array of Post objects (defined above)
    const posts: Post[] = await data.json();

    // display a page and show the blog post data we recieved
    return (
        <main>
            <PageTitle title="Blog Post" />
            <h1>Blog</h1>
            <ul className="list-none p-4 space-y-2">
                {/* foreach loop */}
                {posts.map((post) => (
                    <li key={post._id} className="bg-white p-4 rounded shadow">
                        <Link href={`/blog/${post._id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}