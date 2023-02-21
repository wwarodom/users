import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug)
    return <> 
        <button 
            className='mt-4 ml-4 border-2 border-black p-2'
            onClick={() => router.push('/routeDemo')}>
            Click here to back to menu page
        </button>

    </>
}

export default Post