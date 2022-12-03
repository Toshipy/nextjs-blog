import React from 'react'

interface Post {
  title: string;
  except: string;
}

const PostCard = ({ post }: { post:Post }) => {
  return (
    <div>
      {post.title}
      {post.except}
    </div>
  )
}

export default PostCard
