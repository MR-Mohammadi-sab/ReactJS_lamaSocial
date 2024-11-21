
export const EachStroe = (props) => {

  return (
    <div className="">
        <div className=' flex justify-center items-center h-20 md:h-48  relative overflow-hidden rounded-lg'>
        <img src={props.profile} alt="stroes" className="h-[70px] w-[70px] rounded-full md:h-48 md:w-32 shadow-lg md:rounded-lg object-cover"/>
        <span className="absolute bottom-2 md:left-3 left-7 text-[10px] shadow-md text-gray-400">{props.Name}</span>
        </div>
    </div>
  )
}
