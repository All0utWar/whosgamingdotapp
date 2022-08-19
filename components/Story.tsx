import type { NextPage} from "next";

import { IoIosCamera, IoIosAppstore } from 'react-icons/io'
import { FaArrowCircleUp } from 'react-icons/fa'

import Message from "./Message";


const Story: NextPage = () => {
    return (
        <div className="flex flex-col rounded-3xl bg-white min-h-[500px] min-w-[240px] max-w-[280px] border-4 border-black shadow-xl">
            <div className="flex flex-col bg-[#ECECED] rounded-t-3xl  items-center w-full border-b border-[#E9E9EB]">
                <div className="bg-black w-1/2 z-20 h-5 rounded-b-xl flex justify-center items-center">
                    <div className="flex gap-1">
                        <div className="h-1 w-6 rounded-lg bg-slate-700"></div>
                        <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1 mt-3 mb-1">
                    <div className="rounded-full h-10 w-10 bg-logo bg-black bg-auto bg-center bg-no-repeat"></div>
                    <p className="text-xs text-black">WhosGaming</p>
                </div>

            </div>
            <div className="p-4 space-y-3 mb-auto">
                <Message
                    time = "Today, 12:00PM"
                    text = 'Are you gaming tonight? Please respond following example format: &quot;yes @ 8:00PM&quot; or simply &quot;no&quot;.'
                    response={false}
                    initial={{opacity:0, x: -20}}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ delay:1,type:'spring', stiffness: 20}}
                />
                <Message 
                    text = 'Yes @ 7:30PM'
                    response={true}
                    initial={{opacity:0, x: 20}}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ delay:4, type:'spring', stiffness: 20}}
                />
                <Message 
                    time="Today, 6:00PM"
                    text = 'Tonight, 3 friends will be gaming at the average time of 7:45PM EST'
                    response={false}
                    initial={{opacity:0, x: -20}}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ delay:7, type:'spring', stiffness: 20}}
                />
            </div>
            <div className='flex p-2 justify-between items-center gap-2 px-4 pb-3'>
                <IoIosCamera className="text-[#999] h-7 w-7"/>
                <IoIosAppstore className="text-[#999] h-6 w-6"/>
                <div className="justify-self-end w-[65%] ml-auto self-center">
                    <div className="border border-[#999] rounded-xl flex items-center py-1 px-2">
                        <p className="text-xs text-[#999]">Text Message</p>
                        <FaArrowCircleUp className="ml-auto text-[#6ACE6B]/50 h-5 w-5" />
                    </div>
                </div>
            </div>
            <div className="bg-black h-1 w-[40%] rounded-xl self-center mb-2"></div>
        </div>
    )
}

export default Story;
