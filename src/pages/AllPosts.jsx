import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import "./style.css";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
           
            if (posts) {
                setPosts(posts.documents)
                
            }
        });
    }, [])
    
   
  return (
<div className = {` w-full py-2 allbg`}>
        <Container>
            <div className='flex flex-wrap  gap-12 mt-3 justify-center align-items-center'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-1 mt-4 mb-4 w-1/4'>
                        <PostCard {...post} /> 
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts