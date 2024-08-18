import React, { memo } from 'react'
import { Container, PostForm } from '../components/index'

function AddPost() {
  return (
    <div className='py-8 bg-yellow-600'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default memo(AddPost)