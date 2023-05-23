import React from 'react'
import Layout from '../component/Layout/Layout'
import { useAuth } from '../Context/AuthContext'

const HomePage = () => {
  const[auth,setAuth] = useAuth()
  return (
    <div>
     
            <h1>HomePage</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
    
      
    </div>
  )
}

export default HomePage
