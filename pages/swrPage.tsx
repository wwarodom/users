import { usePaginatePosts } from '../hook/pageRequest';

type postType = { 
    post: { title: string, body: string, id: number } 
}

function Post({ post }: postType) {
    const { title, body, id } = post;
    return (
        <>
            <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
                <p className="font-medium">
                    {id}. {title}
                </p>
                <p>{body}</p>
            </div>
        </>
    );
}

export default function SwrPage() {
    const { posts, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginatePosts();

    if (error) return <h1>Something went wrong!</h1>;
    if (!posts) return <h1>Loading..</h1>;

    return (
        <div>
            <main className="max-w-xl mx-auto">
                <h1 className="font-bold m-5">My Posts</h1>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
                <button
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setSize(size + 1)}
                >
                    {isLoadingMore
                        ? 'Loading...'
                        : isReachingEnd
                            ? 'No more posts'
                            : 'Load more'}
                </button>
            </main>
        </div>
    );
}

// Ref: https://cloudcoders.xyz/blog/how-to-use-swr-in-next-js-client-side-data-fetching-technique/