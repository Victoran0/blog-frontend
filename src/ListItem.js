import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

let getTime = (post) => {
    return new Date(post.date_created).toLocaleDateString()
}

let getTitle = (post) => {
    let title = post.title.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0,60)
    }
    return title
}

let getContent = (post) => {
    let title = getTitle(post)
    let content = post.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')
    if (content.length > 150) {
        return content.slice(0,150) + '...'
    } else {
        return content
    }
}
const ListItem = ({post}) => {
  return (
    <Link className='posts' to={`/post/${post.id}/`}>
        <h3>{post.title}</h3>
        <img className='home-img' src={post.image} alt={post.title} />
        <p><span>{getTime(post)}</span> {getContent(post)}</p>
    </Link>
  )
}

export default ListItem
