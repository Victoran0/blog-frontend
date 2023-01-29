import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ListItem from './ListItem'
import Navbar from "./Navbar";
import './index.css'


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
      <Navbar />
      <div className='homePage'>
        <div>
          {posts.map((post,id) => {
            return (
                <ListItem key={id} post={post} />
              )})}
        </div>
        <div className='news'>
          <h2>Sign up to my newsletter</h2>
        </div>
      </div>
    </div>
  )
}

export default Posts
