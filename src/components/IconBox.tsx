import React from 'react'

interface IconBoxProps {
  color: string,
  icon: any,
  label: string,
  href: string,
  tabs: number,
}

const IconBox = ({color, icon, label, href, tabs} : IconBoxProps) => {
  return (
    <a href='https://google.com' target={tabs === 1 ?'_self' : '_blank'} rel="noreferrer">
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
    </a>
  )
}

export default IconBox