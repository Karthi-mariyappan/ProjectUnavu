import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Forgot from './Components/pages/Forgot';
import Signup from './Components/pages/Signup';
import Header from './Components/card/Header';
import Panels from './Components/pages/Panels';
import Password_reset from './Components/pages/Password_reset';
import Profile from './Components/pages/Profile';
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Forgot' element={<Forgot/>} />
            <Route path='/Password_reset' element={<Password_reset/>} />
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Profile/:Profile' element={<><Header/><Profile/></>}/>
            <Route path='/Panel/:panel' element={<><Panels/></>}/>
        </Routes>
     </Router>
  )
}

export default App
