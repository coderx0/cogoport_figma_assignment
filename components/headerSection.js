import React from 'react'
import BlueTick from '@/icons/blueTick'
import UserIcon from '@/icons/userIcon'

const HeaderSection = () => {
  return (
    <div className='' id='page-header'>
    
    <div className='hidden md:block h-[240px]' id='backImage'>
    <img className='w-full h-full' src='./headerGradient.png' alt='background'/>
    </div>

    <div className='md:hidden h-[160px] h-max-[240px]' id='backImage'>
    <img className='w-full h-full' src='./headerGradient.png' alt='background'/>
    </div>

    <div className='flex flex-col md:flex-row md:px-4' id='header-container'>
      <div id='content' className='w-full -mt-[32px] md:-mt-[36px] flex flex-1 flex-col md:flex-row'>
        <div className='' id='profile-photo'>
        <div className='relative h-24 w-24 md:h-40 md:w-40'>
          <div className='h-24 w-24 md:h-40 md:w-40'>
          <img src='./desktopProfile.png' className='w-full h-full hidden md:block' alt='profile'/>
          <img src='./profile.png' className='w-full h-full md:hidden' alt='profile'/>
          </div>
          <span className='absolute bottom-[22%] left-[70%] md:hidden'>
          <BlueTick size={16}/>
        </span>
        <span className='absolute bottom-[19%] left-[70%] hidden md:block'>
          <BlueTick size={24}/>
        </span>
        </div>
        
        </div>
        <div id='profile-text' className='px-4 md:px-2 md:mt-14'>
        <h1 className='font-bold text-[24px] md:text-[30px] leading-8 tracking-wide'>Olivia Rhye</h1>
        <h2 className='font-normal text-[16px] text-[#475467] leading-6 pt-1 tracking-wide'>olivia@untitledui.com</h2>
        </div>
      </div>
      <div id='actions' className='flex items-start pl-4 md:pr-4 pt-6 gap-4 md:-mt-[5px]'>
      <button className='button_border tracking-wide flex gap-2 py-[10px] px-[16px] rounded-lg text-[14px] font-semibold'>
        <span>
          <UserIcon/>
        </span>
        <span>Share</span>
      </button>
      <button className='py-[10px] tracking-wide px-[16px] bg-[#7f56d9] rounded-lg text-white text-[14px] font-semibold'>
        View Profile
      </button>
      </div>
    </div>

    </div>
  )
}

export default HeaderSection