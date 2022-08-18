import type { NextPage} from "next";
import { motion } from "framer-motion";
import classNames from 'classnames';

import Logo from "./Logo"

interface Props {
    time?: string,
    text: string,
    response: boolean,
  }

  const Message: NextPage<Props> = ({time, text, response }) => {
    return (
        <div className="flex flex-col space-y-2">
            <span className="text-[#8A8A8D] self-center text-xs">{time}</span>
            <p 
                className={classNames("text-xs p-2 rounded-lg w-fit max-w-[65%] shadow-md", response ? "bg-[#6ACE6B] text-white self-end" : "bg-[#E9E9EB] text-black self-start")}>
                {text}
            </p>
        </div>)
  }


const Story: NextPage = () => {
    return (
        <div className="flex flex-col rounded-3xl bg-white min-h-[524px] w-3/4 max-w-[320px] border-4 border-black">
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
            <motion.div className="p-4 space-y-3">
                <Message 
                    time = "Today, 12:00PM"
                    text = 'Are you gaming tonight? Please respond following example format: &quot;yes @ 8:00PM&quot; or simply &quot;no&quot;.'
                    response={false}
                />
                <Message 
                    text = 'Yes @ 7:30PM'
                    response={true}
                />
                <Message 
                    time="Today, 6:00PM"
                    text = 'Tonight, 3 friends will be gaming at the average time of 7:45PM EST'
                    response={false}
                />
            </motion.div>
        </div>
    )
}

export default Story;
