import Link from 'next/link'
import React from 'react'

export default function RouteDemo() { 
    return (
        <>
            <ol className="ml-8 mt-8 flex flex-col justify-center list-inside list-decimal">
                <li>
                    <Link href="/blog/hello">Nested link: pages/blog/hello </Link>
                </li>
                <li>
                    <Link href={`/blog/foo`}>Route params: pages/blog/foo </Link>
                </li>
                <li>
                    <Link href="/blog/abc?foo=bar">Route params: /blog/abc?foo=bar</Link>
                </li>
                <li>
                    <Link href="/blog/abc/a-comment">
                        Go to pages/post/[pid]/[comment].tsx
                    </Link>
                </li>
                <li>
                    <Link href="/posts/b-comment">
                        /posts/b-comment go to /post/[...slug].tsx
                    </Link>
                </li>
                <li>
                    <Link href="/posts/c-comment/zzzz">
                    /post/c-comment/zzzz go to /post/[...slug].tsx
                    </Link>
                </li>
                <li>
                    <Link href="/posts/pushRoute">
                    /posts/pushRoute.tsx (High priority than [...slug].tsx)
                    </Link>
                </li>
            </ol>
        </>
    )
}
