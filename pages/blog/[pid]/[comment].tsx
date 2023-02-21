import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid, comment } = router.query
  return <>Post: {pid} <hr /> Comment: {comment}</>
}

export default Post