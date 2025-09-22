export type Account = {
    name: string;
    handle: string;
    avatar: URL;
    isVerified: boolean;
};

type PostProps = {
    content: {
        text: string;
        image?: URL;
    };
    author: Account; // show name, handle and ✅ if verified
    published: Date;
    likes: Array<Account>; // show total number, plus avatar of last 5
};

export function Post({ content, author, published, likes }: PostProps) {
    return (
        <article>
            <p>{content.text}</p>
            {content.image && <img src={String(content.image)} />}
            <Author {...author} />
            <time>{String(published)}</time>
            <Likes accounts={likes} />
        </article>
    );
}

type LikesProps = {
    accounts: Array<Account>;
};

function Likes({ accounts }: LikesProps) {
    return (
        <>
            <p>{accounts.length}</p>
            <ul>
                {accounts.slice(-5).map(account => (
                    <li key={account.handle}>
                        <img src={String(account.avatar)} />
                    </li>
                ))}
            </ul>
        </>
    );
}

type AuthorProps = {
    name: string;
    handle: string;
    isVerified: boolean;
};

function Author({ name, handle, isVerified }: AuthorProps) {
    return (
        <dl>
            <dt>Name</dt>
            <dd>{name}</dd>
            <dt>Handle</dt>
            <dd>{handle}</dd>
            <dt>Verified</dt>
            <dd>{isVerified && "✅"}</dd>
        </dl>
    );
}
