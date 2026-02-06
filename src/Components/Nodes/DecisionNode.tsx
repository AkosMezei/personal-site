import { Handle, Position} from '@xyflow/react'
import { motion } from 'framer-motion';
import {useActiveNodeIds} from "../../Contexts/ActiveNodeContext.tsx";
import {nodeProps} from "../Sections/Flowchart.tsx";

const InfoTooltip = ({text, isActive, side = 'right'} :{text:string, isActive:boolean, side:string}) => {
    const positionClass = side === 'left'
        ? 'right-[100%] mr-12 origin-right'
        : 'left-[100%] ml-12 origin-left'

    return (
        <motion.div
            animate={{
                scale: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
                filter: isActive ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{ duration: 0.3 }}

            className={`absolute ${positionClass} w-64 bg-slate-800/90 border border-slate-600 rounded-lg shadow-xl z-50 pointer-events-none`}>
            <div className="m-3">
                {text}
            </div>
        </motion.div>
    )
}

export const DecisionNode = ({id, data}:nodeProps) => {
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
            transition={{ duration: 0.3 }} className="relative w-28 h-28">
            {/* The Actual Diamond Shape */}
            <div className="absolute inset-0 bg-white border-2 border-amber-500 rotate-45 rounded-sm shadow-sm" />

            {/* The Content (Un-rotated) */}
            <div className="text-sky-400 absolute inset-0 flex items-center justify-center p-2 text-center text-xs font-semibold leading-tight">
                {data.label}
            </div>

            {/* Handles aligned to the diamond points */}
            <Handle type="target" position={Position.Top} className="!bg-amber-500" />
            <Handle type="source" position={Position.Left} id="yes" className="!bg-green-500" />
            <Handle type="source" position={Position.Right} id="no" className="!bg-red-500" />
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