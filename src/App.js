import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Sigin } from './pages/sigin/Sigin';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { AuthContext } from './componets/context/userContext';
import { NavBar } from './componets/navbar/NavBar'
import { LeftBar } from './componets/leftBar/LeftBar'
import { RightBar } from './componets/rightBar/RightBar'
import { useContext } from 'react';
function App() {

  const {currentUser} = useContext(AuthContext);

  return (

    <div className="App bg-gray-100 dark:bg-gray-700 dark:text-gray-50">
 


      <Router>
      {currentUser?<div>
      <NavBar/>
          <LeftBar  />
           <RightBar />
    </div>:<></>}
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Sigin />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
