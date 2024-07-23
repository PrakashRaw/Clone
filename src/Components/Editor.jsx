import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';




function Editor() {
  return (
    <div className='font-serif mt-4'>
      <div className='flex items-center justify-between text-white w-[600px]  border border-[#8f8f8f] p-2'>
        <div className='flex items-center gap-1'>
        <span>HTML</span>
        <IoIosArrowDropdown />
       </div>
       <div className='flex items-center gap-2'>
      <HiOutlineMenuAlt2 />
      <span>Tidy</span>
      </div>
      </div>
      <CodeMirror />
    </div>
  )
}

export default Editor