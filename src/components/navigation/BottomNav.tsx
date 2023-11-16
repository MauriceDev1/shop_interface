import Button from '../general/Button';

function BottomNav() {

  return (
    <div className='w-10/12 bg-gray-100 flex m-auto'>
        <div className='w-9/12 py-8 px-5'>
            <div className='w-full flex gap-5'>
                <Button title={'Test'} />
                <Button title={'Test'} />
                <Button title={'Test'} />
                <Button title={'Test'} />
                <Button title={'Test'} />
                <Button title={'Test'} />
            </div>
        </div>
        <div className='w-3/12 bg-gray-300 py-8 h-96'>
            test 2
        </div>
    </div>
  )
}

export default BottomNav