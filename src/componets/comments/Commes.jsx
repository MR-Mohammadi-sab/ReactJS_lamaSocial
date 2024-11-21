
export const Commes = (props) => {
 
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white  p-4 w-full rounded-lg '>

        <div className='flex '>

            <div className='h-[40px] w-[70px] '>
                <img src={props.profile} alt="comment Img" className='rounded-full object-cover w-10 h-10'/>
               
            </div>
        <div className='md:mx-4 mx-2'>
            <div className='flex justify-between my-4'>
            <span className='text-xs'>{props.name}</span>
            <span className='text-sm'> 1 hour ago</span>
            </div>
            <p className='text-sm'>{props.desc}</p>
        </div>
        </div>
    </div>
  )
}