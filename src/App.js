import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/home"
import Login from "./pages/login"
import Profil from "./pages/profil"
import { postProfil, logUser } from './store/store'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch()
  const request = (token) => {
    return {Authorization: `Bearer ${token}`}
   }
  useEffect(() => {
    if(window.localStorage.token) {
      postProfil(request(window.localStorage.token))
      .then((res) => {
        console.log(res.data)
        const user = { ...res.data.body, token: window.localStorage.token}
        dispatch(logUser(user))
        //dispatch(logUser(window.localStorage.token))
      })
    }
  }, [])
  return (
    <div className="app">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profil />} />
    </Routes>
    </div>
    
  );
}

export default App;
