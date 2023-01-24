import React from 'react'
import BurgerIcon from '@/icons/burger'
import BrandIcon from '@/icons/brandIcon'

const Navbar = () => {
  return (
    <nav className='h-[64px] flex items-center border-b-[1px] border-[#EAECF0] px-4'>
    <span className='flex flex-1 items-center gap-2'>
    <span>
    <BrandIcon/>
    </span>
    <h1 className='text-xl font-semibold'>Untitled UI</h1>
    </span>

    <span className='cursor-pointer'>
      <BurgerIcon/>
    </span>
    </nav>
  )
}

export default Navbar