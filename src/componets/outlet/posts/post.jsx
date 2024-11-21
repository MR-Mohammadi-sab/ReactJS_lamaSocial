
import { DATAS } from './data'
import { Posts } from './Posts'

export const Post = () => {
  return (
    <div>
        <div>
            {DATAS.map((post)=>{
                return <Posts Name={post.name} key={post.id} profile={post.profilePicture} />
            })}
        </div>
  
    </div>
  )
}
