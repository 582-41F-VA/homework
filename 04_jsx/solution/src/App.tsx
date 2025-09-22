import { posts } from "./dummy.ts";
import { Account, Post } from "./Post.tsx";

export default function App() {
    return <Timeline posts={posts} />;
}

type Post = {
    id: number;
    content: {
        text: string;
        image?: URL;
    };
    author: Account; // show name, handle and ✅ if verified
    published: Date;
    likes: Array<Account>; // show total number, plus avatar of last 5
};

type TimelineProps = {
    posts: Array<Post>;
};

function Timeline({ posts }: TimelineProps) {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Post {...post} />
                </li>
            ))}
        </ul>
    );
}
