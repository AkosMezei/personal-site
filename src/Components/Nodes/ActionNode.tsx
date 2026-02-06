import {Handle, Position} from '@xyflow/react'
import { motion } from 'framer-motion';
import {useActiveNodeIds} from "../../Contexts/ActiveNodeContext.tsx";
import {nodeProps} from "../Sections/Flowchart.tsx";

const InfoTooltip = ({text, isActive, side = 'right'} :{text:string, isActive:boolean, side:string}) => {
    const positionClass = side === 'left'
    ? 'right-[100%] mr-6 origin-right'
    : 'left-[100%] ml-6 origin-left'

    return (
        <motion.div
            animate={{
                scale: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
                filter: isActive ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{ duration: 0.3 }}

            className={`absolute ${positionClass} w-48 bg-slate-800/90 border border-slate-600 rounded-lg shadow-xl z-50 pointer-events-none`}>
        <div className="m-3">
                {text}
            </div>
        </motion.div>
    )
}


export const ActionNode = ({id, data}:nodeProps) => {
    const activeIds = useActiveNodeIds();
    const isActive = activeIds.includes(id);
    return (
        <div className="flex items-center">
        <motion.div
            animate={{
                scale: isActive ? 1.1 : 0.9,
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{ duration: 0.3 }}

            className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 max-w-60">
            <div className="text-sky-400 break-words text-center">
                {data.label}
            </div>

            <Handle type="target" position={Position.Top} />
            <Handle type="target" position={Position.Left} id="left"/>
            <Handle type="target" position={Position.Right} id="right"/>

            <Handle type={"source"} position={Position.Bottom} />
        </motion.div>
            {data.description &&
                <InfoTooltip
                    text={data.description}
                    isActive={isActive}
                    side={data.tooltipSide || 'right'}
                />
            }
        </div>
    );
};