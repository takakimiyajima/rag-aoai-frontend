import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa'
import NavItem from './NavItem'

interface NavListProps {
  id: string
  label: string
  link: string
  icon: React.ReactNode
}

const NavList = () => {
  const navList: NavListProps[] = [
    {
      id: '1',
      label: 'On Your Data',
      link: '/',
      icon: <BsRocketTakeoff className='size-5' />,
    },
  ]

  return (
    <div className='mt-12'>
      {navList.map((navItem) => (
        <NavItem key={navItem.id} {...navItem} />
      ))}
    </div>
  )
}

export default NavList
