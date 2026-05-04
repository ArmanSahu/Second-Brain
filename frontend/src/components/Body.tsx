import { useNavigate } from 'react-router-dom';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { Button } from './Button';
import HeroImg from "../assets/HeroImg.png";


export const BodyComponent = () => {

    const navigate = useNavigate();
    return <div className="md:max-w-7xl h-full max-w-2xs flex flex-col  mx-auto min-h-screen  justify-center items-center py-10 md:py-14 md:gap-15 gap-8 md:px-6 xl:px-2 ">
            <div className="px-3 flex flex-col justify-between gap-8 items-center ">
                <div className=' xl:text-7xl md:text-6xl  text-4xl tracking-tighter max-w-2xl font-bold flex flex-col items-center'>
                    <p >Save anything.</p>
                    <p className='bg-linear-to-r from-indigo-500 to-50% to-blue-950 bg-clip-text text-transparent leading-tight'>Remember</p>
                    <p className='bg-linear-to-r from-indigo-500 to-60% to-blue-950 bg-clip-text text-transparent leading-tight'>Everything.</p>
                </div>
                 <div className='bg-indigo-100 text-blue-600 md:text-lg text-base md:rounded-3xl rounded-2xl  md:px-25 px-5 py-2 flex justify-center'>
                    Your thoughts. organised
                </div>
                <div className='text-black/50 md:max-w-md md:px-5 px-3 '>
                    Second brain helps you collect and organize tweets, videos, documents, and more — all in one place. 
                    Turn scattered information into a structured knowledge hub that grows with you.
                </div>
                <div className='w-full px-2 md:px-6'>
                <Button text='Get start for free' size='custom' variant='primary' onClick={() => navigate("/signup") } endIcon={<RightArrowIcon size='md'/>  }/>
                </div>
            </div>
            <div className='overflow-hidden md:aspect-video rounded-2xl xl:ml-10 mt-7 md:mt-0  md:shadow-2xl shadow-2xl shadow-indigo-400'>
               <img src={HeroImg} className='object-cover' />
            </div>
            <div className="py-16 bg-white text-center">  
                <h2 className="text-3xl md:text-4xl font-bold">
                Everything you need in one place
                </h2>

                <p className="text-gray-500 mt-3">
                Capture, organize and access your knowledge instantly
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    
                    <div className="p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg">Save Anything</h3>
                        <p className="text-sm text-gray-500 mt-2">
                        Store tweets, videos, docs, and links effortlessly.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg">Organize Smartly</h3>
                        <p className="text-sm text-gray-500 mt-2">
                        Categorize content and find it instantly.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg">Access Anywhere</h3>
                        <p className="text-sm text-gray-500 mt-2">
                        Your second brain is always with you.
                        </p>
                    </div>

                </div>
            </div>
            
        </div>
}