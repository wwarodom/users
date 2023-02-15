import Link from 'next/link'
import React from 'react'

function nav() { 

    return (
        <nav className='bg-blue-200 p-2 text-xl'> 
            Logo: {' '} 
            <Link href='/'>Home</Link> | About | Contact us
        </nav>
    )
}

export default nav