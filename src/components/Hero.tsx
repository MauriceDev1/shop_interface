import Image from '../assets/image.jpg'

export default function Hero() {
  return (
    <div className='bg-gray-500 h-36 flex' style={{backgroundImage:`url(${Image})`}}>
        <div className='w-10/12 m-auto'>
            <h1 className='m-2'>GPA</h1>
        </div>
    </div>
  )
}
