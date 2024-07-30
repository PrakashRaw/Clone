import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Box } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';




function CodeEditor({heading, language, value, onChange}) {
  return (
    <Box className='font-serif mt-1 text-white w-[600px] p-1'>
      <Box className='flex items-center justify-between'>
        <Box className='flex items-center gap-1'>
        <span className='text-green-200'>{heading}</span>
        <IoIosArrowDropdown />
       </Box>
       <Box className='flex items-center gap-2'>
      <HiOutlineMenuAlt2 />
      <span>Tidy</span>
      </Box>    
      </Box>
      <Editor theme="vs-dark" height="40vh"  language={language} value={value} onChange={onChange} />
      </Box> 
   
  )
}

export default CodeEditor;