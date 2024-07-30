import React, { useContext } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { HiSaveAs } from "react-icons/hi";
import { LuMessageSquare } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiFlashlightLine } from "react-icons/ri";


function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between text-white font-thin font-serif px-4 bg-[#1B1C1E]'>
            <div className='flex gap-6 items-center  '>
            <img  className='w-28 mix-blend-multiply bg-blue-500' src={"logo5.jpg"} alt="" />
            <div className='flex gap-1 items-center'>
            <span><CiPlay1 /></span>
            <button>run</button>
            </div>
            <div className='flex gap-1 items-center'>
                <span><HiSaveAs /></span>
                <p>Save</p>
            </div>
            <div className='flex gap-1 items-center'>
                <span><LuMessageSquare /></span>
                <p>Collborate</p>
            </div>
             <div className='flex gap-1 items-center'>
                <button className='bg-green-700 w-12 rounded-md'>New</button>
             <span>Import fiddles as modules</span>
             </div>
             
            </div>
            <div className='flex gap-6 items-center'>
            <button className='flex text-[#FFB82E] items-center gap-1 border-solid border-[1px] border-[#FFB82E] w-20 rounded-md'><RiFlashlightLine /> Go Pro</button>
            <span className='flex items-center gap-1'><GiSettingsKnobs />Setting</span>
            <p>Sign in</p>
            </div>

        </div>
    </>
  )
}

export default Navbar