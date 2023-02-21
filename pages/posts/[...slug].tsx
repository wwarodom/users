import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug)
    return <>
        <h2 className='mt-4 ml-4'>
            {JSON.stringify(slug)}
        </h2> 
    </>
}

export default Post