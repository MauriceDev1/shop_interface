import React from 'react'
import Button from './common/Button'
import SliderTop from './SliderTop'
import SliderCenter from './SliderCenter'

function CenterConsole() {
  return (
    <div className='w-10/12 m-auto border flex flex-wrap py-10'>
        <div className='w-full sm:w-9/12 border'>
            <div className='w-full border p-5'>
                <SliderTop />
            </div>
            <div className='w-full border p-5'>
                <SliderCenter />
            </div>
        </div>
        <div className='w-full sm:w-3/12 p-5 border flex flex-col gap-3'>
            <Button title={"link"} />
            <Button title={"link"} />
            <Button title={"link"} />
            <Button title={"link"} />
            <Button title={"link"} />
            <Button title={"link"} />
            <Button title={"link"} />
        </div>
    </div>
  )
}

export default CenterConsole