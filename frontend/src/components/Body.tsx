import { Navigate, useNavigate } from 'react-router-dom';
import HeroImg from '../assets/HeroImg.png';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { Button } from './Button';



export const BodyComponent = () => {

    const navigate = useNavigate();
    return <div className="max-h-screen   ">
        <div className="md:max-w-7xl max-w-2xs flex flex-col md:flex-row mx-auto md:py-20 py-10 xl:py-25 lg:gap-1 md:gap-8 gap-8 md:px-4 2xl:px-0">
            <div className="md:w-1/3 px-3 flex flex-col justify-between lg:justify-center lg:gap-6  gap-5  md:items-start items-center ">
                <div className='md:w-55 lg:w-60 bg-indigo-100 text-blue-600 rounded-2xl md:py-1 md:px-2 px-4 py-1 flex justify-center'>
                    Your thoughts. organised
                </div>
                <div className=' xl:text-5xl md:text-3xl lg:text-4xl text-3xl font-bold flex flex-col md:items-start items-center'>
                    <p className='tracking-tighter'>Save anything.</p>
                    <p className='bg-linear-to-r from-indigo-500 to-50% to-blue-950 bg-clip-text text-transparent leading-tight'>Remember</p>
                    <p className='tracking-tighter bg-linear-to-r from-indigo-500 to-60% to-blue-950 bg-clip-text text-transparent leading-tight'>Everything.</p>
                </div>
                <div className='text-black/70 pl-4 md:pl-0 '>
                    Second brain helps you collect and organize tweets, videos, documents, and more -
                    all in one place.
                </div>
                <div>
                <Button text='Get start for free' size='md' variant='primary' onClick={() => navigate("/signup") } endIcon={<RightArrowIcon size='md'/>  }/>
                </div>
            </div>
            <div className="md:w-2/3 border-blue-600/50 border rounded-xl overflow-hidden  md:shadow-xl shadow-lg shadow-indigo-400  ">
                <img src={HeroImg} alt='#' className='h-full aspect-video  object-cover'/>
            </div>
        </div>
    </div>
}