import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";


function Sidebar() {
  const [collaps, setCollaps] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [group, setGroup] = useState(false)

  const handleClick = () => {
    setShowInputs(!showInputs);
  };
  const handleSubmit = () => {
    setGroup(!group);
  };

  return (
    <div
      className={`relative ${collaps ? "max-w-[80px]" : "max-w-[221px]"
        }  w-full px-3 mr-4  border-r-2 border-[#6cebcf] h-[666px] text-white`}
    >
      <div className="absolute -right-3 top-[320px] border border-[#1da678] text-[20px] rounded-full z-50 bg-white">
        <FaAngleRight
          onClick={() => setCollaps((prev) => !prev)}
          className={`text-[#1da678]  ${collaps ? " " : "rotate-[180deg]"}`}
        />
      </div>
      <div className="m-2">
        <h2 onClick={handleClick} className="pointer font-serif font-semibold ">
          Fiddle meta
        </h2> 
        {showInputs && (
          <div className="m-2">
            <input type="text" placeholder="untittled fiddle" className="bg-[#1B1C1E] h-8" />
            <textarea type="text" placeholder="no description" className="bg-[#1B1C1E] h-16 w-full mt-2 " />

          </div>
        )}

      </div>
      <div className="m-2">
        <div className='flex gap-1 mt-4 '>
          <span onClick={handleSubmit} className="pointer font-serif font-semibold">Groups</span>
          <button className=' bg-orange-500 w-10 h-5 rounded-md text-sm'>pro</button>
        </div>
        {group && (
          <div className="mt-2">
            <input type="text" placeholder="Assign to groups" className="bg-[#1B1C1E] h-8" />
          </div>
        )}

      </div>
      <div className="m-2">
        <div className='flex gap-1 items-center mt-4 '>
          <span onClick={handleSubmit} className="pointer font-serif font-semibold ">Resources</span>
          <button className=' w-10 h-5 rounded-md border text-sm'>url</button>
          <button className=' w-10 h-5 rounded-md border text-sm'>cdnjs</button>
        </div>
        {group && (
          <div className="mt-2">
            <input type="text" placeholder="javascript/CSS URl" className="bg-[#1B1C1E] h-8" />
          </div>
        )}
       <p className="pointer font-serif font-semibold mt-4">Asyn request</p>
       <p className="pointer font-serif font-semibold mt-4">Others link/licen</p>
      </div>

    </div>
  );
}

export default Sidebar;
