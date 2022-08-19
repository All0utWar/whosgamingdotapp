import type { NextPage} from "next";
import { motion } from "framer-motion";
import classNames from 'classnames';

interface Props {
    time?: string,
    text: string,
    response: boolean,
    animate?: object,
    transition?: object,
    initial?: object,
  }

  const Message: NextPage<Props> = ({time, text, response, animate, transition, initial }) => {
    return (
        <motion.div
            initial={initial}
            className="flex flex-col space-y-2"
            animate={animate}
            transition={transition}
        >
            <span className="text-[#8A8A8D] self-center text-xs">{time}</span>
            <p 
                className={classNames("text-xs p-2 rounded-lg w-fit max-w-[65%] shadow-md", response ? "bg-[#6ACE6B] text-white self-end" : "bg-[#E9E9EB] text-black self-start")}>
                {text}
            </p>
        </motion.div>)
  }

export default Message;
