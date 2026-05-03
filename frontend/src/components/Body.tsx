import { useNavigate } from 'react-router-dom';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { Button } from './Button';
import HeroImg from "../assets/HeroImg.png";


export const BodyComponent = () => {

    const navigate = useNavigate();
    return <div className="min-h-screen   ">
        <div className="md:max-w-7xl max-w-2xs flex  flex-col md:flex-row mx-auto md:py-20 py-10 xl:py-25 lg:gap-1 md:gap-8 gap-8 md:px-4 2xl:px-0">
            <div className="md:w-1/3 px-3 flex flex-col justify-between lg:justify-center gap-6 md:items-start items-center ">
                <div className=' xl:text-5xl md:text-3xl text-4xl  font-bold flex flex-col md:items-start items-center'>
                    <p className='tracking-tighter '>Save anything.</p>
                    <p className='bg-linear-to-r from-indigo-500 to-50% to-blue-950 bg-clip-text text-transparent leading-tight'>Remember</p>
                    <p className='tracking-tighter bg-linear-to-r from-indigo-500 to-60% to-blue-950 bg-clip-text text-transparent leading-tight'>Everything.</p>
                </div>
                 <div className='md:w-55 lg:w-60 bg-indigo-100 text-blue-600 rounded-2xl md:py-1 md:px-2 px-4 py-1 flex justify-center'>
                    Your thoughts. organised
                </div>
                <div className='text-black/50 pl-4 md:pl-0 '>
                    Second brain helps you collect and organize tweets, videos, documents, and more -
                    all in one place.
                </div>
                <div>
                <Button text='Get start for free' size='lg' variant='primary' onClick={() => navigate("/signup") } endIcon={<RightArrowIcon size='md'/>  }/>
                </div>
            </div>
            <div className='lg:w-2/3 md:w-1/2 overflow-hidden md:aspect-video rounded-2xl xl:ml-10 mt-7 md:mt-0  md:shadow-2xl shadow-2xl shadow-indigo-400'>
               <img src={HeroImg} className='object-cover' />
            </div>
        </div>
    </div>
}