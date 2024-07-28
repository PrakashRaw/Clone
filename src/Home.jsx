import React from 'react'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import Code from './Components/Code.jsx';
function Home() {
  return (
    <>
    <Navbar/>
     <div className='flex bg-[#222222]'>
     <Sidebar/>   
       <Code/>
     </div>  
    </>
  )
}

export default Home