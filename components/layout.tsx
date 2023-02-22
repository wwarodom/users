import { ReactNode, useEffect, useState } from 'react'
import Footer from './footer'
import Head from './head'
import Nav from './nav'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {

    const [isHydated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <>
            {isHydated ?
                (<div>
                    <Head />
                    <Nav />
                    <main className='flex-col justify-center items-center'>
                        {children}
                    </main>
                    <Footer />
                </div>)
                : <div>Loading...</div>}
        </>
    )
}
