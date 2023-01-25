
import HeaderSection from '@/components/headerSection'
import Navbar from '@/components/navbar'
import ProfileSection from '@/components/profileSection'
import Sidebar from '@/components/sidebar'
import MailIcon from '@/icons/mailIcon'
import UploadIcon from '@/icons/uploadIcon'

import { Inter } from '@next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'],weight:['400','500','600'] })

export default function Home() {

  const [openPanel,setOpenPanel] = useState(false);

  return (
    <>
    <div className={`flex ${inter.className}`}>
<Sidebar openPanel={openPanel} setOpenPanel={setOpenPanel}/>
 <div className={`w-full ${openPanel? ' lg:ml-[362px]':'lg:ml-[81px]'} bg-[#FCFCFD]`}>
 <div className='md:hidden'>
  <Navbar/>
  </div>

    <HeaderSection/>

    <div className='pt-6 px-4 md:px-8'>
    <div className='flex flex-col lg:flex-row lg:gap-4'>
      <div className='font-medium text-[14px] leading-5 lg:pt-4 lg:w-[30%]'>
      <h1 className='text-[14px] font-medium text-[#344054]'>Personal Info</h1>
      <p className='text-[14px] font-normal text-[#475467]'>Update your photo and personal details.</p>
      </div>
      <div className='lg:flex-1 box_border  mt-4 font-medium text-[14px] leading-5'>
        <div id='section-content' className=''>
        <div className='flex flex-col md:flex-row'>
        <div className="w-full px-4 flex flex-col gap-2 mt-4">
          <label className="label">
            <span className="text-[#344054]">First Name</span>
          </label>
          <div className={`w-full ${!openPanel && 'md:w-80'} md:pr-2`}>
          <input type="text" placeholder="Type here" className="w-full input_border py-[10px] px-[14px] text-[#101828] text-[16px]" defaultValue={'Olivia'}/>
          </div>
          </div>
        <div className="w-full px-4 flex flex-col gap-2 mt-4">
          <label className="label">
            <span className="text-[#344054]">Last Name</span>
          </label>
        <div className={`w-full ${!openPanel && 'md:w-80'} md:pr-2`}>
        <input type="text" placeholder="Type here" className="w-full input_border py-[10px] px-[14px] text-[#101828] text-[16px]" defaultValue={'Rhye'}/>
        </div>
        </div>
        </div>
        <div className="w-full px-4 flex flex-col gap-2 mt-4">
          <label className="label">
            <span className="text-[#344054]">Email address</span>
          </label>
          <div className={`flex gap-2 input_border items-center pl-4 w-full ${!openPanel && 'md:w-[600px]'}`}>
            <span><MailIcon/></span>
            <input type="email" placeholder="Type here" className="py-[10px] pl-[12px] w-full text-[#101828] text-[16px] input_border_2" defaultValue={'olivia@untitledui.com'}/>
          </div>
        </div>
        <div className='pt-6 '>
          <div className='flex flex-col md:flex-row'>
            <div className='px-4 md:pt-4'>
              <div className='h-[64px] w-[64px]'>
                <img src='./Avatar.png' alt='' className='h-full w-full'/>
              </div>
            </div>
            <div className='mt-4 px-4 md:flex-1'>
              <div className='upload_border w-full py-[16px] px-[24px] flex flex-col gap-1 items-center'>
                <div>
                <UploadIcon/>
                </div>
                <div className='text-[14px] w-52'>
                  <span className='text-[#6941c6] font-semibold'>Click or upload </span>
                  <span className='font-normal'>or drag and drop </span>
                  <span className='text-[12px] font-normal'>SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full mt-4 gap-4 border-t-2 justify-end py-4 pr-4 text-[14px] font-semibold'>
            <button className='button_border flex gap-2 py-[10px] px-[16px] rounded-lg'>
              <span>Cancel</span>
            </button>
            <button className='py-[10px] px-[16px] bg-[#7f56d9] rounded-lg text-white '>
              Save Changes
            </button>
          </div>
        </div>
        </div>

        <div id='section-footer'>

        </div>
      </div>
    </div>
  </div>

<div className='md:w-fill md:border-b-2 md:mx-8 md:mt-8'></div>
    <ProfileSection/>
    
 </div>

    </div>
    </>
  )
}
