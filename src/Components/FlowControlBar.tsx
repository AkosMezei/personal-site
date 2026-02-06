import { useReactFlow} from '@xyflow/react'
import {useEffect, useRef, useState} from 'react'
import {useSetActiveNodeIds} from "../Contexts/ActiveNodeContext.tsx";

type FlowControlBarProps = {
    isInteractive: boolean,
    onToggleMode: () => void,
    currentNodeId: string,
    setCurrentNodeId: (nodeId: string) => void
}

export const FlowControlBar = ({
    isInteractive,
    onToggleMode,
    currentNodeId,
    setCurrentNodeId
} : FlowControlBarProps) => {
    const {getEdges, getNode, setCenter, zoomTo} = useReactFlow();
    const setActiveIds = useSetActiveNodeIds();
    const [options, setOptions] = useState<{ label: string; targetId: string; type: 'neutral'|'success'|'danger' }[]>([])

    //track prev mode so it doesn't run on initial render
    const prevModeRef = useRef(isInteractive);

    useEffect(() => {
        if (prevModeRef.current === isInteractive) return;
        prevModeRef.current = isInteractive;

        if (isInteractive) {
            setCurrentNodeId('AddNewItem');
            const startNode = getNode('AddNewItem');
            if (startNode) {
                setCenter(startNode.position.x, startNode.position.y, {
                    zoom: 1.05,
                    duration: 1300
                });
            }
        } else {
            zoomTo(0.85, { duration: 1000 });
        }
    }, [isInteractive, getNode, setCenter, zoomTo, setCurrentNodeId]);

    useEffect(() => {
        if (!isInteractive || !currentNodeId) return;
        const edges = getEdges() // get all edges
        const outgoing = edges.filter(edge => edge.source === currentNodeId) //filter edges, to only show ones starting from the current node

        setActiveIds([currentNodeId]);

        if (outgoing.length === 0) { // if there are no outgoing edges, we are at the last node
            setOptions([])
            return;
        }

        const nextOptions = outgoing.map(edge => {
            let type: 'neutral'|'success'|'danger' = 'neutral'
            let label = "Next Step"

            if (edge.sourceHandle === "yes") {
                type = 'success'
                label = "Yes"
            } else if (edge.sourceHandle === "no") {
                type = 'danger'
                label = "No"
            }

            if (edge.label) label = edge.label as string
            return {label, targetId: edge.target, type}
        })
        setOptions(nextOptions)
        setActiveIds([currentNodeId])

    }, [currentNodeId, isInteractive, getEdges, setActiveIds]);

    const handleStep = (targetId: string) => {
        const targetNode = getNode(targetId)
        if (!targetNode) return;

        setCurrentNodeId(targetId)
        setCenter(targetNode.position.x, targetNode.position.y, {
            zoom:1.05,
            duration: 1200
        })
    }

    const handleReset = () => {
        setCurrentNodeId('AddNewItem');
        const startNode = getNode('AddNewItem')
        if (startNode) {
            setCenter(startNode.position.x, startNode.position.y, {
                zoom: 1.05, duration: 3000
            })
        }
    }

    return (
        <div className="flex justify-between items-center bg-slate-800 p-4 border-b-2 border-slate-700">
            {/* LEFT: Mode Toggle */}
            <div className="flex items-center gap-3">
                <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">
                    {isInteractive ? 'Interactive Mode' : 'Overview Mode'}
                </span>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onToggleMode()
                    }}
                    className={`
                        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                        ${isInteractive ? 'bg-teal-500' : 'bg-slate-600'}
                    `}
                >
                    <span className={`
                        inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                        ${isInteractive ? 'translate-x-6' : 'translate-x-1'}
                    `} />
                </button>
            </div>

            {/* RIGHT: Navigation Buttons */}
            {isInteractive && (
                <div className="flex gap-3">
                    {options.length > 0 ? (
                        options.map((opt) => (
                            <button
                                key={opt.targetId}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleStep(opt.targetId)
                                }}
                                className={`
                                    px-4 py-1.5 rounded-md font-bold text-sm shadow-lg transition-transform active:scale-95
                                    ${opt.type === 'success' ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : ''}
                                    ${opt.type === 'danger' ? 'bg-rose-600 hover:bg-rose-500 text-white' : ''}
                                    ${opt.type === 'neutral' ? 'bg-blue-600 hover:bg-blue-500 text-white' : ''}
                                `}
                            >
                                {opt.label}
                            </button>
                        ))
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleReset()
                            }}
                            className="px-4 py-1.5 rounded-md font-bold text-sm bg-slate-600 hover:bg-slate-500 text-white"
                        >
                            Restart Process
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};