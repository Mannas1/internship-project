
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AuthLayout from './pages/Auth/AuthLayout'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import HomeFailed from './pages/HomeFailed'
import CreatePost from './pages/CreatePost'



function App() {

 
  return (
    <Routes>
      {localStorage.getItem("cookieFallback") ? (
        <>
        <Route path='/' element={<Home />}/>
        <Route path='/create-post' element={<CreatePost />}/>
        </>
        
      ) : (
        <Route path='/' element={<HomeFailed />}/>
      )}
      
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Route>
    </Routes>
  )
}

export default App
