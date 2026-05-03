import { useParams } from "react-router-dom"
import { useShareBrain } from "../hooks/useSharedBrain";
import { Loader } from "../components/Loader";
import { Card } from "../components/Card";
import { HandWaveIcon } from "../Icons/HandWaveIcon";
import { BrainIcon } from "../Icons/BrainIcon";


export const Share = () => {

    const shareObj = useParams();
    if(!shareObj.shareId){
        return;
    }
    const {data,isLoading,error,isError} = useShareBrain(shareObj.shareId)

    return <div className=" bg-gray-100">
        <div className="md:max-w-7xl max-w-xs mx-auto py-5">
            <div className="flex md:justify-start justify-center py-4 items-center gap-3 text-lg font-semibold">
                {data?.username && <p>{`Welcome to ${data.username}'s Brain`}</p>}
                <BrainIcon  />
            </div>
            {isLoading && <div className="flex  h-screen w-screen justify-center items-center">
                <Loader />
            </div>}
            {isError && <div className="flex  h-screen w-screen justify-center items-center">
                <p className="text-red-500">{error.message}</p>
            </div>}
            <div className="flex md:flex-row  flex-col md:flex-wrap h-screen w-full gap-8 py-5 px-2">
                {data && data.contents.map(c => <Card title={c.title} link={c.link} type={c.type} key={c._id} id={c._id} />) }
            </div>
        </div>
    </div>
}