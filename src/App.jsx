import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Forgot from './Components/pages/Forgot';
import Password_reset from './Components/pages/Password_reset';
import Signup from './Components/pages/Signup';
import Header from './Components/card/Header';
import Panels from './Components/pages/Panels';
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Forgot' element={<Forgot/>} />
            <Route path='/Password_reset' element={<Password_reset/>} />
            <Route path='/Restaurant_Registration' element={<Signup/>}/>
            <Route path='/Panel/:panel' element={<><Header/><Panels/></>}/>
        </Routes>
     </Router>
  )
}

export default App
