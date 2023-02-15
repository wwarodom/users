import type { ReactNode } from 'react'
import Footer from './footer'
import Head from './head'
import Nav from './nav'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head />
            <Nav />
            <main className='flex-col justify-center items-center'>
                {children}
            </main>
            <Footer />
        </>
    )
}
