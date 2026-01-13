import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className='text-2xl font-semibold'>Login Page</h1>
        <Login />
        <Profile />
      
    </UserContextProvider>
  )
}

export default App
