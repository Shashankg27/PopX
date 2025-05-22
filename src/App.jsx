import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Account from './components/Account';

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/Register' element={<CreateAccount />}/>
        <Route path='/Account' element={<Account />}/>
      </Routes>
    </>
  )
}

export default App
