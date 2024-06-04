import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import ForgetPassword from './pages/ForgetPassword';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import './App.css'
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/forget-password" element={<ForgetPassword />}/>
          <Route path="/Offers" element={<Offers />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
