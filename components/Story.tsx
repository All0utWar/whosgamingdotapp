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
            <span className="text-[#EBEBF5]/60 self-center text-xs">{time}</span>
            <p 
                className={classNames("text-white text-xs p-2 rounded-md w-fit max-w-[65%] ", response ? "bg-green-400 self-end" : "bg-[#1C1C1E] self-start")}>
                {text}
            </p>
        </div>)
  }


const Story: NextPage = () => {
    return (
        <div className="rounded-lg bg-black h-1/2 w-3/4 max-w-sm">
            <div className="flex h-16 bg-[#1C1C1E] rounded-t-lg p-4 items-center justify-center w-full">
                <div className="rounded-full h-10 w-10 bg-logo bg-black bg-auto bg-center bg-no-repeat">
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
