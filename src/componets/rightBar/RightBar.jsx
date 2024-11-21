
import hat from './../../images/hat.jpg'
import m from './../../images/m.jpg'
import money from './../../images/mony.jpg'
import naghb from './../../images/naghb.jpg'
import jcor from './../../images/jcor.jpg'
export const RightBar = () => {
  return (
    <div className="rightScrollBar lg:w-[30%] fixed top-16 right-0   flex-col space-y-5 pb-6 z-30 hidden lg:flex w-0">

    {/*  item 1 */}

  <div id="" className=" border-t pb-16 flex flex-col space-y-3 bg-white px-4 shadow  rounded-lg dark:bg-gray-800 dark:text-white pt-8">
    
    <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5">
      <p className='pl-5 text-gray-400 mb-4'>Suggestion For you</p>
{/* img 1 */}
      <div className="flex space-x-12">
        {/* users */}
      <div className='flex space-x-2 justify-center items-center w-full'> 
        <img src={jcor} alt="suggest pictureUSer" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Aref Mohammadi</p></div>
      {/* btns */}
    <div className=" flex justify-center items-center space-x-2 ">
    <button className="p-1 rounded-lg bg-red-600 border border-red-600 hover:bg-white text-white hover:text-black text-xs">Follow</button>
    <button className="p-1 rounded-lg bg-blue-600 border border-blue-600 hover:bg-white text-white hover:text-black text-xs">dismiss</button>
    </div>
      
      </div>

            {/* img 2 */}
        <div className="flex space-x-12">
        {/* users */}
      <div className='flex space-x-2 justify-center items-center w-full'> 
        <img src={hat} alt="pictureUser" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Alax</p></div>
      {/* btns */}
    <div className=" flex justify-center items-center space-x-2 ">
    <button className="p-1 rounded-lg bg-red-600 border border-red-600 hover:bg-white text-white hover:text-black text-xs">Follow</button>
    <button className="p-1 rounded-lg bg-blue-600 border border-blue-600 hover:bg-white text-white hover:text-black text-xs">dismiss</button>
    </div>
      
      </div>

    </div>


  </div>

 {/*  item 2 */}
  <div id="" className=" border-t pb-4 flex flex-col space-y-3 bg-white p-4 shadow  rounded-lg w-full mt-5 dark:bg-gray-800 dark:text-white">
  <p className='pl-5 text-gray-400 mb-4'>Last Activities</p>
    {/* user 1 */}
    <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
{/* img 1 */}
      <div className="flex  w-full justify-between items-center">
        {/* users */}
      <div className='flex space-x-2 justify-start items-center'> 
        <img src={m} alt="userPictur" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Asif</p></div>

      {/* recently */}
    <div className="flex justify-center items-center text-xs px-2 text-gray-400">
         changed the coer picture 2 min ago</div>
      
      </div>


    </div>
     {/* user 2*/}
     <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
      {/* img 1 */}
            <div className="flex  w-full justify-between items-center">
              {/* users */}
            <div className='flex space-x-2 justify-start items-center'> 
              <img src={naghb} alt="userPictur" className="object-cover bg-contain w-8 h-8 rounded-full" />
            <p className='text-sm capitalize'>Mohammadi</p></div>
      
            {/* recently */}
          <div className="flex justify-center items-center text-xs px-2 text-gray-400">
               changed the coer picture 2 min ago</div>
            
            </div>
      
      
          </div>

         {/* user 3*/}
         <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
      {/* img 1 */}
            <div className="flex  w-full justify-between items-center">
              {/* users */}
            <div className='flex space-x-2 justify-start items-center'> 
              <img src={money} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
            <p className='text-sm capitalize'>Ahmad</p></div>
      
            {/* recently */}
          <div className="flex justify-center items-center text-xs px-2 text-gray-400">
               changed the coer picture 2 min ago</div>
            
            </div>
      
      
          </div>
         {/* user 4*/}
         <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
      {/* img 1 */}
            <div className="flex  w-full justify-between items-center">
              {/* users */}
            <div className='flex space-x-2 justify-start items-center'> 
              <img src={hat} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
            <p className='text-sm capitalize'>joly</p></div>
      
            {/* recently */}
          <div className="flex justify-center items-center text-xs px-2 text-gray-400">
               changed the coer picture 2 min ago</div>
            
            </div>
      
      
          </div>

  </div>

  {/* item 3 */}

  <div  className=" border-t flex flex-col space-y-3 bg-white p-4 shadow  rounded-lg w-full mt-5 dark:bg-gray-800 dark:text-white">
  <p className='pl-5 text-gray-400 mb-4'>Online Friends</p>
    {/* user 1 */}
    <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
{/* img 1 */}
      <div className="flex  w-full justify-between items-center">
        {/* users */}
      <div className='relative flex space-x-2 justify-start items-center'>
        <div className='absolute h-3 w-3 bg-green-400 rounded-full left-8 top-0'></div> 
        <img src={m} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Aref Mohammadi</p></div>
      </div>


    </div>
{/* user 2 */}
        <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
{/* img 1 */}
      <div className="flex  w-full justify-between items-center">
        {/* users */}
      <div className='relative flex space-x-2 justify-start items-center'>
        <div className='absolute h-3 w-3 bg-green-400 rounded-full left-8 top-0'></div> 
        <img src={money} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Ali</p></div>
      </div>


    </div>
{/* user 3 */}
        <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
{/* img 1 */}
      <div className="flex  w-full justify-between items-center">
        {/* users */}
      <div className='relative flex space-x-2 justify-start items-center'>
        <div className='absolute h-3 w-3 bg-green-400 rounded-full left-8 top-0'></div> 
        <img src={jcor} alt="jcor" className="object-cover bg-contain w-8 h-8 rounded-full" />
      <p className='text-sm capitalize'>Mmaruf</p></div>
      </div>


    </div>

    {/* user 3 */}
    <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
      {/* img 1 */}
            <div className="flex  w-full justify-between items-center">
              {/* users */}
            <div className='relative flex space-x-2 justify-start items-center'>
              <div className='absolute h-3 w-3 bg-green-400 rounded-full left-8 top-0'></div> 
              <img src={jcor} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
            <p className='text-sm'>Mohammadi</p></div>
            </div>
      
      
          </div>

          {/* user 3 */}
        <div className=" flex flex-col justify-center items-start space-y-3  space-x-2 mt-5 w-full">
      
      {/* img 1 */}
            <div className="flex  w-full justify-between items-center">
              {/* users */}
            <div className='relative flex space-x-2 justify-start items-center'>
              <div className='absolute h-3 w-3 bg-green-400 rounded-full left-8 top-0'></div> 
              <img src={naghb} alt="userPicture" className="object-cover bg-contain w-8 h-8 rounded-full" />
            <p className='text-sm'>nli</p></div>
            </div>
      
      
          </div>
  </div>

  </div>
  )
}
