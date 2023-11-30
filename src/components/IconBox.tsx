import React from 'react'

interface IconBoxProps {
  color: string,
  icon: any,
  label: string,
}

const IconBox = ({color, icon, label} : IconBoxProps) => {
  return (
    <div className="min-w-[160px] w-1/6 full p-2">
      <div className="w-full flex h-28 rounded" style={{backgroundColor:`${color}`}}>
        <div className="m-auto">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-center mt-3">
          {label}
        </p>
      </div>
    </div>
  )
}

export default IconBox