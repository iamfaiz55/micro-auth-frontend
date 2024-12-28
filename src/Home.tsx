import React from 'react'
import { useItsMeMutation } from './redux/authApi'
// import { useItsMeQuery } from './redux/authApi'

const Home = () => {
    // const  useItsMeQuery()
    const [callMe]= useItsMeMutation()


  return <>
     <div className='flex justify-center align-middle'>
        <h1>who I am </h1>
        <button type='button' onClick={callMe}>Clickkk</button>
     </div>
  
  </>
}

export default Home