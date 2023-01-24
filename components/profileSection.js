import React, { useState } from 'react'
import AusIcon from '@/icons/australiaIcon'
import BoldIcon from '@/icons/boldIcon'
import ClipIcon from '@/icons/clipIcon'
import ClockIcon from '@/icons/clockIcon'
import DownIcon from '@/icons/downIcon'
import ItalicIcon from '@/icons/italicIcon'

import OrderedListIcon from '@/icons/orderedListIcon'
import UnorderedListIcon from '@/icons/unOrderedListIcon'


const ProfileSection = () => {

  const [charCount,setCharCount] = useState(500);

  return (
    <div className='pt-6 px-4 pb-6 md:px-8'>
      <div className='flex flex-col lg:flex-row lg:gap-4'>
        <div className='font-medium text-[14px] leading-5 lg:pt-4 lg:w-[30%]'>
        <h1 className='text-[#344054] font-semibold'>Profile</h1>
        <p className='text-[#475467] font-normal'>Update your portfolio and bio.</p>
        </div>
        <div className='box_border lg:flex-1 mt-4 font-medium text-[14px] leading-5' id="input-form">
          <div id='section-content' className=''>
          <div className="w-full px-4 flex flex-col mt-4"> 
            <div className='flex gap-3'>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="w-11 h-6 bg-white rounded-full dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:left-[2px] after:bg-white after:rounded-full after:h-[19px] after:w-[19px] after:transition-all peer-checked:bg-[#7F56D9]"></div>
            </label>
            <h1 className='text-[14px] font-semibold text-[#344054]'>Available For Projects</h1>   
            </div>
            <p className='font-normal text-[14px] text-[#475467] ml-[55px] -mt-[4px] w-[80%]'>I'm open and available for freelance work</p>
          </div>
          <div className="w-full px-4 flex flex-col gap-2 mt-4">
            <label className="label">
              <span className="text-[#344054]">Username</span>
            </label>
            <div className='flex input_border items-stretch'>
            <span className='text-[16px] text-[#475467] py-3 px-2 border-r-2 font-normal'>
              untitledui.com/
            </span>
            <input type="text" placeholder="Type here" className="w-full input_border_2 pt-[10px] pb-[12px] px-[14px] text-[#101828] text-[16px]" />
            </div>
          </div>
          <div className="w-full px-4 flex flex-col gap-2 mt-4">
            <label className="label">
              <span className="text-[#344054]">Website</span>
            </label>
            <div className='flex input_border items-stretch text-[16px]'>
            <span className='text-[16px] text-[#475467] py-3 px-2 border-r-2 font-normal'>
              http://
            </span>
            <input type="text" placeholder="Type here" className="w-full input_border_2 pt-[10px] pb-[12px] px-[14px] text-[#101828] text-[16px]" />
            </div>
          </div>
          <div className="w-full px-4 flex flex-col gap-2 mt-4">
            <label className="label">
              <span className="text-[#344054]">Description</span>
            </label>
            <div className='flex  items-stretch text-[16px]'>
            <textarea onChange={(e)=>setCharCount(()=>(500-e.target.value.length))} className='input_border w-full text-[16px] p-2' rows={6}></textarea>
            </div>
            <span className='text-[14px] font-normal text-[#475467]'>{charCount} characters left</span>
          </div>
          <div className='flex flex-col md:flex-row md:items-center'>
          <div className="w-full px-4 flex flex-col gap-2 mt-4">
            <div className='cursor-pointer input_border text-[16px] p-3 pl-3 flex items-center'>
            <h1 className='flex-1'>Regular</h1>
            <span className='px-4'><DownIcon/></span>
            </div>
           </div>
           <div className='flex w-full mt-4 pl-6 gap-2'>
            <span className='cursor-pointer p-2 rounded-md hover:bg-gray-100'><BoldIcon/></span>
            <span className='cursor-pointer p-2 rounded-md hover:bg-gray-100'><ItalicIcon/></span>
            <span className='cursor-pointer p-2 rounded-md hover:bg-gray-100'><ClipIcon/></span>
            <span className='cursor-pointer p-2 rounded-md hover:bg-gray-100'><UnorderedListIcon/></span>
            <span className='cursor-pointer p-2 rounded-md hover:bg-gray-100'><OrderedListIcon/></span>
           </div>
          </div>
           <div className="w-full px-4 flex flex-col gap-2 mt-4">
           <h1 className='text-[14px] font-medium text-[#344054]'>Country</h1>
            <div className='cursor-pointer input_border text-[16px] p-3 pl-3 flex items-center'>
            <span><AusIcon/></span>
            <h1 className='flex-1 pl-2'>Australia</h1>
            <span className='px-4'><DownIcon/></span>
            </div>
           </div>
           <div className="w-full px-4 flex flex-col gap-2 mt-4">
           <h1 className='text-[14px] font-medium text-[#344054]'>Timezone</h1>
            <div className='cursor-pointer input_border text-[16px] p-3 pl-3 flex items-center'>
            <span><ClockIcon/></span>
            <h1 className='flex-1 pl-2'>
              <span className='font-medium'>PST</span>
              <span className='font-normal pl-2'>UTC-08:00</span>
            </h1>
            <span className='px-4'><DownIcon/></span>
            </div>
           </div>
          <div className='pt-6 '>
            <div className='flex w-full mt-4 gap-4 border-t-2 justify-end py-4 pr-4'>
              <button className='button_border flex gap-2 py-[10px] px-[16px] rounded-lg text-[14px] font-semibold'>
                <span>Cancel</span>
              </button>
              <button className='py-[10px] px-[16px] bg-[#7f56d9] rounded-lg text-white text-[14px] font-semibold'>
                Save Changes
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection