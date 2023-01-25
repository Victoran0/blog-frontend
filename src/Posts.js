import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ListItem from './ListItem'

const Posts = () => {
  let [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
    console.log(posts)
  }, [])
  
  let getPosts = async () => {
    let response = await fetch('/blog/posts/')
    let data = await response.json()
    setPosts(data)
  }

  return (
    <div>
      {posts.map((post,id) => {
        return (
        //   <div key={id}>
        // <h1>{post.title}</h1>
        // <p>{post.body}</p>
        // <img src={post.image} alt={post.title} />
        //   </div>
        <ListItem key={id} post={post} />
      )})}
    </div>
  )
}

export default Posts
