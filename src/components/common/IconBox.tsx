import React from 'react'

interface IconBoxProps {
  color: string,
  icon: any,
  label: string,
}

const IconBox = ({color, icon, label} : IconBoxProps) => {
  return (
    <div className='w-full sm:w-1/6 justify-center flex'>
      <div>
        <div className='w-32 h-24 bg-gray-50 rounded border flex' style={{backgroundColor: `${color}`}}>
          <p className='m-auto'>
            {icon}
          </p>
        </div>
        <div className='text-center mt-3'>
          {label}
        </div>
      </div>
    </div>
  )
}

export default IconBox