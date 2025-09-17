# Homework: JSX

For this homework, your task is to implement the "timeline" view for a
social media website, similar to [Bluesky] or [Mastodon]. You will find
the data model below. Make sure all the information is displayed.

```ts
type Timeline = Array<Post>;

type Post = {
    content: {
        text: string;
        image?: URL;
    };
    author: Account; // show name, handle and ✅ if verified
    published: Date;
    likes: Array<Account>; // show total number, plus avatar of last 5
};

type Account = {
    name: string;
    handle: string;
    avatar: URL;
    is_verified: boolean;
};
```

[Bluesky]: https://bsky.app/
[Mastodon]: https://mastodon.social/explore
