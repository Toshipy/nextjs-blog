import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

type Post = {
  title: string;
  except: string;
  node: any;
  categories: any;
  slug: any;

}

type Posts = {
  posts: Post[];
}

// const posts = [
//   {title: 'React Testing', except: 'Learn React Testing'},
//   {title: 'React Testing', except: 'Learn React Testing'},
// ];

// export default function Home({ posts }) {
const Home: React.FC<Posts> = ({ posts }) => {
  return (  
    <div className="container mx-auto px-10 mb-8 bg-white-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => 
            <PostCard post={post.node} key={post.title} />
          // <div>
          //   {post.title}
          //   {post.except}
          // </div>
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>

  );
}
export default Home;

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }

}
