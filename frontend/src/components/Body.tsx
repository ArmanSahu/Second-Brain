import HeroImg from '../assets/HeroImg.png';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { Button } from './Button';



export const BodyComponent = () => {
    return <div className="min-h-screen   ">
        
        <div className="max-w-7xl flex mx-auto  pt-25  gap-1">
            <div className="w-1/3  p-3  flex flex-col justify-between ">
                <div className='w-60 bg-indigo-100 text-blue-600 rounded-2xl py-1 px-2 flex justify-center'>
                    Your thoughts. organised
                </div>
                <div className=' text-5xl font-bold'>
                    <p className='tracking-tighter'>Save anything.</p>
                    <p className='bg-linear-to-r from-indigo-500 to-50% to-blue-950 bg-clip-text text-transparent leading-tight'>Remember</p>
                    <p className='tracking-tighter bg-linear-to-r from-indigo-500 to-60% to-blue-950 bg-clip-text text-transparent leading-tight'>Everything.</p>
                </div>
                <div className='text-black/70'>
                    Second brain helps you collect and organize tweets, videos, documents, and more -
                    all in one place
                </div>
                <div>
                <Button text='Get start for free' size='md' variant='primary' endIcon={<RightArrowIcon size='md'/> }/>
                </div>
            </div>
            <div className="w-2/3 flex drop-shadow-2xl drop-shadow-indigo-300  border-gray-400 rounded-xl overflow-hidden  ">
                <img src={HeroImg} alt='#' className='h-full  '/>
            </div>
        </div>
    </div>
}