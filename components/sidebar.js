import BarIcon from '@/icons/barIcon'
import BellIcon from '@/icons/bellIcon'
import CheckIcon from '@/icons/checkIcon'
import ClkIcon from '@/icons/clkIcon'
import FlagIcon from '@/icons/flagIcon'
import HomeIcon from '@/icons/homeIcon'
import IntegrationIcon from '@/icons/integrationIcon'
import LayerIcon from '@/icons/layerIcon'
import LifeIcon from '@/icons/lifeIcon'
import LogoutIcon from '@/icons/logoutIcon'
import NavIcon from '@/icons/navIcon'
import NotificationIcon from '@/icons/notificationIcon'
import PieIcon from '@/icons/pieIcon'
import SettingsIcon from '@/icons/settingsIcon'
import StarIcon from '@/icons/starIcon'
import UsersIcon from '@/icons/usersIcon'
import UserSqIcon from '@/icons/userSqIcon'
import React from 'react'


const Sidebar = ({openPanel,setOpenPanel}) => {
  return (
    <div
    onMouseEnter={()=>setOpenPanel(true)}
    onMouseLeave={()=>setOpenPanel(false)}
    className='hidden lg:flex h-screen fixed z-20 bg-white'>
        <div
        className='w-[81px] flex flex-col  py-8 border-r-[1px] h-full'>
           <div className='flex flex-1 flex-col items-center gap-5'>
            <div className='cursor-pointer'><NavIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><HomeIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><BellIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><LayerIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><CheckIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><PieIcon/></div>
            <div className='hover:bg-gray-100 p-2 rounded-md cursor-pointer'><UsersIcon/></div>
           </div>

            <div className='flex flex-col gap-6 items-center'>
                <div className='cursor-pointer'><LifeIcon/></div>
                <div className='cursor-pointer'><SettingsIcon/></div>
                <div className='h-12 w-12 cursor-pointer'>
                    <img src='./Avatar.png' className='h-full w-full' alt=''/>
                </div>
            </div>
        </div>
        {openPanel && <div className='w-[281px] py-8 pl-4 border-r-[1.5px] flex flex-col'>
            <h1 className='text-[16px] font-medium'>Settings</h1>
            <div className='flex-1 text-[16px] font-semibold text-[#344054] flex flex-col items-center  mt-6 ml-6 gap-1.5'>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><FlagIcon/></span>
                    <span>My Details</span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><UserSqIcon/></span>
                    <span className='flex w-full pr-2 items-center'>
                        <span className='flex-1'>Profile</span>
                        <span className='p-1 px-2 text-[12px] bg-gray-200 rounded-xl'>10</span>
                    </span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><BarIcon/></span>
                    <span>Password</span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><StarIcon/></span>
                    <span>Team</span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><ClkIcon/></span>
                    <span>Billing</span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><NotificationIcon/></span>
                    <span>Notifications</span>
                </h2>
                <h2 className='flex gap-3 items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md -ml-8'>
                    <span><IntegrationIcon/></span>
                    <span>Integrations</span>
                </h2>
            </div>
            <div>
            <h1 className='text-[14px] font-medium text-[#101828] flex items-center'>
                <span className='flex-1'>Olivia Rhye</span>
                <span className='mr-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'><LogoutIcon/></span>
            </h1>
            <p className='text-[14px] font-normal text-[#475467] -mt-2'>
                olivia@untitledui.com
            </p>
            </div>
        </div>}
    </div>
  )
}

export default Sidebar