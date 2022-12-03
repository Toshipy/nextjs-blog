import React from 'react';
import moment from 'moment';
import Link from 'next/link';

interface Post {
  title: string;
  except: string;
  // featuredImage: string;
  featuredImage:{url: string}

}

const PostCard = ({ post }: { post:Post }) => {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cocver shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

    </div>
    // <div>
    //   {post.title}
    //   {post.except}
    // </div>
  )
}

export default PostCard
