import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (post) => {
    return new Date(post.date_created).toLocaleDateString()
}

let getTitle = (post) => {
    let title = post.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0,45)
    }
    return title
}

let getContent = (post) => {
    let title = getTitle(post)
    let content = post.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')
    if (content.length > 45) {
        return content.slice(0,45) + '...'
    } else {
        return content
    }
}
const ListItem = ({post}) => {
  return (
    <Link to={`/post/${post.id}/`}>
        <div>
            <h3>{getTitle(post)}</h3>
            <p><span>{getTime(post)}</span>{getContent(post)}</p>
        </div>
    </Link>
  )
}

export default ListItem
