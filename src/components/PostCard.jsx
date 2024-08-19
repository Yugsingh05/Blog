import React,{memo} from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import "../App.css"
import { useSelector } from 'react-redux'

function PostCard({$id, title, featuredImage}) {
    const userData  = useSelector(state => state.auth.userData)

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 flex-wrap   rounded-xl p-2 postcard'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl ' />

            </div>
            <h2
            className='  font-bold tex'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default memo(PostCard)