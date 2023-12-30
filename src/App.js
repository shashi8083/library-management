import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminHome from './Components/AdminHome';
import UserHome from './Components/UserHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} /> 
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/user' element={<UserLogin/>}/> 
        <Route path='/adminhome/*' element={<AdminHome/>}/> 
        <Route path='/userhome/*' element={<UserHome/>}/>
        {/* we use * after / of adminhome(/adminhome/*) that indicate that if there is wrong link ,it will come back to AdminHome page */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
