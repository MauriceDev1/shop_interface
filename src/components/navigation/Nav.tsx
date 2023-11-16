import React from 'react'

function Nav() {
  return (
    <nav className='w-full py-2 sticky top-0 bg-gray-50'>
        <div className='w-10/12 m-auto flex justify-between items-center'>
            <div>
                Logo
            </div>
            <div className='flex gap-4'>
                <button className='px-10 rounded border h-9'>Login</button>
                <button className='px-10 rounded border h-9'>Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav
