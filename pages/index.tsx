import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>User App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='ml-8'>
        <h1 className='text-2xl mt-8'>Layout, Fetch, SWR user demo</h1>
        <ol className='flex flex-col justify-center list-disc'>
          <li>
            <Link href="/user1">
              Simple fetch
            </Link>
          </li>
          <li>
            <Link href="/user2">
              Multiple fetch 
            </Link>
          </li>
          <li>
            <Link href="/user3">
              SWR fetch users
            </Link>
          </li>
          <li>
            <Link href="/swrDemo">
              SWR fetch
            </Link>
          </li>
          <li>
            <Link href="/swrMutate">
              SWR Mutate
            </Link>
          </li>
          <li>
            <Link href="/swrPage">
              SWR Page
            </Link>
          </li>
        </ol>
      </main>
    </>
  )
}
