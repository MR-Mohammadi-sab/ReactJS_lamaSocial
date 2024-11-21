import React from 'react'
import { Stroes } from './stroes/Stroes'
import { Post } from './posts/post'

export const OutLet = () => {
  return (
    <div className='lg:ml-[18%] md:ml-[30%] pr-4 lg:pr-0 lg:max-w-[51%]  mt-12 overflow-hidden flex flex-col space-x-3'>
      <Stroes />
      <Post />
    </div>
  )
}
