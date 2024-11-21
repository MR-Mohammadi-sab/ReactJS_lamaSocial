import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faUserGroup,faComment,faCirclePlay,faBookBookmark,faCircleQuestion,faBagShopping,faCalendar,faGraduationCap, faFeed}from "@fortawesome/free-solid-svg-icons"
import jcor from './../../images/jcor.jpg'
import hat from './../../images/hat.jpg'
import m from './../../images/m.jpg'
import money from './../../images/mony.jpg'
import naghb from './../../images/naghb.jpg'


export const LeftBar = () => {

  return (
    <div className="ScrollBar w-[30%] lg:w-[17%] bg-white fixed top-16 pt-4  left-0 bottom-0 right-1/3  flex-col space-x-5 pb-12 dark:bg-gray-800 dark:text-white hidden md:flex ">
      <div className="flex flex-col space-y-4 px-3 md:px-4 py-8 ">
          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i ><FontAwesomeIcon icon={faFeed} /></i>
            <h1 className="md:text-sm text-xs">Feed</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faComment} /></i>
            <h1 className="md:text-sm text-xs">Chats</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faCirclePlay} /></i>
            <h1 className="md:text-sm text-xs">Videoes</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faUserGroup} /></i>
            <h1 className="md:text-sm text-xs">Groups</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faBookBookmark} /></i>
            <h1 className="md:text-sm text-xs">Bookmark</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faCircleQuestion} /></i>
            <h1 className="md:text-sm text-xs">Question</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faBagShopping} /></i>
            <h1 className="md:text-sm text-xs">Jobs</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faCalendar} /></i>
            <h1 className="md:text-sm text-xs">Events</h1>
          </div>

          <div className="flex justify-start items-center space-x-3 font-semibold">
            <i><FontAwesomeIcon icon={faGraduationCap} /></i>
            <h1 className="md:text-sm text-xs">Courses</h1>
          </div>
      </div>
      {/* frinds images */}

    <div id="firends" className=" border-t pb-4 flex flex-col space-y-3">
      {/* img 1 */}
      <div className=" flex justify-start items-center space-x-2 mt-5">
    <img src={jcor} alt="It is the userImage" className="object-cover bg-contain md:w-8 md:h-8 w-6 h-6 rounded-full" />
        <p className="md:text-sm text-[10px] capitalize">Ali</p>
      </div>
          {/* img 2 */}
          <div className=" flex justify-start items-center space-x-2 mt-5">
    <img src={money} alt="It is the userImage" className="object-cover bg-contain md:w-8 md:h-8 w-6 h-6 rounded-full" />
        <p className="md:text-sm text-[10px] capitalize">mohammad</p>
      </div>

            {/* img 3 */}
            <div className=" flex justify-start items-center space-x-2 mt-5">
    <img src={m} alt="It is the userImage" className="object-cover bg-contain md:w-8 md:h-8 w-6 h-6 rounded-full" />
        <p className="md:text-sm text-[10px] capitalize">Ahamd</p>
      </div>

            {/* img 4 */}
            <div className=" flex justify-start items-center space-x-2 mt-5">
    <img src={naghb} alt="It is the userImage" className="object-cover bg-contain md:w-8 md:h-8 w-6 h-6 rounded-full" />
        <p className="md:text-sm text-[10px] capitalize">Mohammad maruf</p>
      </div>

            {/* img 5 */}
            <div className=" flex justify-start items-center space-x-2 mt-5">
    <img src={hat} alt="It is the userImage" className="object-cover bg-contain md:w-8 md:h-8 w-6 h-6 rounded-full" />
        <p className="md:text-sm text-[10px] capitalize">khan</p>
      </div>

    </div>

    </div>


  )
}
