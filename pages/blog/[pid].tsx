import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid , foo } = router.query
  
  console.log("Query: ", router.query)

  return <>Post: {pid}, Foo: {foo} </>
}

export default Post