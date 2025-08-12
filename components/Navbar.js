import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (

    <nav className='h-14 bg-purple-700 flex justify-between px-3  items-center text-white'>
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link></div>
      <ul className=' hidden sm:flex justify-center items-center gap-4 '>
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About</li></Link>
        <Link href="/Shorten"><li>Shorten</li></Link>
        <Link href="/Contact"><li>Contact</li></Link>
        <li className='flex gap-3'>
          <Link href="/Shorten"><button className='bg-purple-400 rounded-lg p-3 py-1 font-bold'>Try now</button></Link>
          <Link href="/github"><button className='bg-purple-400 rounded-lg p-3 py-1 font-bold'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
