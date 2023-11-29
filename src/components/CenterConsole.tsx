import SliderCenter from './SliderCenter'

function CenterConsole() {
  return (
    <div className='w-full xl:w-10/12 m-auto flex flex-wrap py-10'>
        <div className='w-full sm:w-9/12 border-t border-b'>
            <div className='w-full p-5'>
                <SliderCenter />
            </div>
        </div>
        <div className='w-full sm:w-3/12 p-5 flex flex-col gap-3'>
        </div>
    </div>
  )
}

export default CenterConsole