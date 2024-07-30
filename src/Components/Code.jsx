import { useState, useRef, useEffect } from 'react'
import React from 'react'
import CodeEditor from './CodeEditor'
import { Box } from '@chakra-ui/react';

function Code() {
  const [htmlCode, setHtmlCode] = useState('<div>Hello, world!</div>');
  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState('');
  const iframeRef = useRef(null);

  const handleHtmlChange = (value) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value) => {
    setCssCode(value);
  };

  const handleJsChange = (value) => {
    setJsCode(value);

  };
  useEffect(() => {
    updatePreview();
  }, [htmlCode, cssCode, jsCode]);

  const updatePreview = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      const head = iframeDocument.head;
      const body = iframeDocument.body;

      // Clear existing content for a fresh start
      body.innerHTML = '';

      // Create and append style element
      const styleElement = iframeDocument.createElement('style');
      styleElement.textContent = cssCode;
      head.appendChild(styleElement);

      // Create and append script element
      const scriptElement = iframeDocument.createElement('script');
      scriptElement.textContent = jsCode;
      body.appendChild(scriptElement);

      // Create and append HTML content (using a container element)
      const htmlElement = iframeDocument.createElement('div');
      htmlElement.innerHTML = htmlCode;
      body.appendChild(htmlElement);
    }
    
  };
  return (
    <Box className='grid grid-cols-2'>
      <CodeEditor
        heading="Html"
        language="html"
        value={htmlCode}
        onChange={handleHtmlChange}
      />
      <CodeEditor
        heading="Css"
        language="css"
        value={cssCode}
        onChange={handleCssChange} />

      <CodeEditor
        heading="Js"
        language="javascript"
        value={jsCode}
        onChange={handleJsChange}
      />
      <div className='bg-[#1B1C1E] mt-8 ml-1 h-[40vh] w-[82vh]'>
        <h1 className='font-bold text-white text-center m'>Output</h1>
      <iframe   ref={iframeRef} title="preview" />
      </div>
    </Box>
  )
}

export default Code