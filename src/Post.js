import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from './Navbar';


const Post = () => {
  let {id} = useParams();
  let [post, setPost] = useState(null)
  // const navigate = useNavigate()

  useEffect(() => {
    getPost()
  }, [id])
  
  const getPost = async () => {
    let response = await fetch(`/blog/posts/${id}/`)
    let data = await response.json()
    setPost(data)
  }


  return (
    <div>
      <Navbar />
      <h1>{post?.body}</h1>
      <img src={post?.image} alt={post?.title} />
      <p>{post?.date_created}</p>
    </div>
  )
}

export default Post
