import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    Node,
    Controls,
    PanOnScrollMode,
} from '@xyflow/react'

import '@xyflow/react/dist/base.css';
import {DecisionNode} from "../Nodes/DecisionNode.tsx";
import { DaemonNode } from '../Nodes/DaemonNode.tsx';
import {AiNode} from "../Nodes/AiNode.tsx";
import {DatabaseNode} from "../Nodes/DatabaseNode.tsx";
import {ActionNode} from "../Nodes/ActionNode.tsx";
import {FlowInteraction} from "../../Utils/FlowInteraction.tsx";
import {ActiveNodeProvider} from "../../Contexts/ActiveNodeContext.tsx";
import {useState} from "react";
import {FlowControlBar} from "../FlowControlBar.tsx";
import {useTranslation} from "react-i18next";

const nodeTypes = {
    decision: DecisionNode,
    daemon: DaemonNode,
    ai: AiNode,
    database: DatabaseNode,
    action: ActionNode,
};

const STEP_X = 400;
const STEP_Y = 250;

const generatePosition = (level: number, lane = 0) => ({
    x: lane * STEP_X,
    y: level * STEP_Y,
})

export type nodeProps = {
    id: string,
    data: {
        label: string,
        description: string,
        tooltipSide?: 'left' | 'right'
    }
}

const scraperEdges = [
    {
        id: 'AddNewItem-SendToDb',
        source: 'AddNewItem',
        target: 'SendToDb',
        type: 'smoothstep',
    },
    {
        id: 'SendToDb-InitialScrapingDaemon',
        source: 'SendToDb',
        target: 'InitialScrapingDaemon',
    },
    {
        id: 'InitialScrapingDaemon-DomainPresence',
        source: 'InitialScrapingDaemon',
        target: 'DomainPresence',
    },
    {
        id: 'DomainPresence-SelectorCredibilityInitial',
        source: 'DomainPresence',
        target: 'SelectorCredibilityInitial',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'DomainPresence-AskAIInitial',
        source: 'DomainPresence',
        target: 'AskAIInitial',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},

    },
    {
        id: 'SelectorCredibilityInitial-AskAIInitial',
        source: 'SelectorCredibilityInitial',
        target: 'AskAIInitial',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'left',
    },
    {
        id: 'AskAIInitial-ApiCallSuccessInitial',
        source: 'AskAIInitial',
        target: 'ApiCallSuccessInitial',
    },
    {
        id: 'ApiCallSuccessInitial-AskAIInitial',
        source: 'ApiCallSuccessInitial',
        target: 'AskAIInitial',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'right',
    },
    {
        id: 'SelectorCredibilityInitial-UseCredibleSelector',
        source: 'SelectorCredibilityInitial',
        target: 'UseCredibleSelector',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'UseCredibleSelector-SaveInitialToDb',
        source: 'UseCredibleSelector',
        target: 'SaveInitialToDb',
    },
    {
        id: 'ApiCallSuccessInitial-SaveInitialToDb',
        source: 'ApiCallSuccessInitial',
        target: 'SaveInitialToDb',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'SaveInitialToDb-UpdaterDaemon',
        source: 'SaveInitialToDb',
        target: 'UpdaterDaemon',
    },
    {
        id: 'UpdaterDaemon-Shuffle',
        source: 'UpdaterDaemon',
        target: 'Shuffle',
    },
    {
        id: 'Shuffle-LaunchBrowser',
        source: 'Shuffle',
        target: 'LaunchBrowser',
    },
    {
        id: 'LaunchBrowser-GetSingleItemToUpdate',
        source: 'LaunchBrowser',
        target: 'GetSingleItemToUpdate',
    },
    {
        id: 'GetSingleItemToUpdate-DomainPresenceUpdater',
        source: 'GetSingleItemToUpdate',
        target: 'DomainPresenceUpdater',
    },
    {
        id: 'DomainPresenceUpdater-SelectorCredibilityUpdater',
        source: 'DomainPresenceUpdater',
        target: 'SelectorCredibilityUpdater',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'DomainPresenceUpdater-AskAIUpdater',
        source: 'DomainPresenceUpdater',
        target: 'AskAIUpdater',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
    },
    {
        id: 'SelectorCredibilityUpdater-AskAIUpdater',
        source: 'SelectorCredibilityUpdater',
        target: 'AskAIUpdater',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'left',
    },
    {
        id: 'AskAIUpdater-ApiCallSuccessUpdater',
        source: 'AskAIUpdater',
        target: 'ApiCallSuccessUpdater',
    },
    {
        id: 'SelectorCredibilityUpdater-UseSavedSelectors',
        source: 'SelectorCredibilityUpdater',
        target: 'UseSavedSelectors',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'ApiCallSuccessUpdater-AskAIUpdater',
        source: 'ApiCallSuccessUpdater',
        target: 'AskAIUpdater',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'right',
    },
    {
        id: 'UseSavedSelectors-Availability',
        source: 'UseSavedSelectors',
        target: 'Availability',
    },
    {
        id: 'ApiCallSuccessUpdater-Availability',
        source: 'ApiCallSuccessUpdater',
        target: 'Availability',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'Availability-SetUnavailable',
        source: 'Availability',
        target: 'SetUnavailable',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'left',
    },
    {
        id: 'Availability-ReasonablePriceChange',
        source: 'Availability',
        target: 'ReasonablePriceChange',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'ReasonablePriceChange-GetNewSelectors',
        source: 'ReasonablePriceChange',
        target: 'GetNewSelectors',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'ReasonablePriceChange-AskAIUpdater',
        source: 'ReasonablePriceChange',
        target: 'AskAIUpdater',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
        targetHandle: 'right',
    },
    {
        id: 'GetNewSelectors-SelectorExists',
        source: 'GetNewSelectors',
        target: 'SelectorExists',
    },
    {
        id: 'SelectorExists-IncreaseCredibility',
        source: 'SelectorExists',
        target: 'IncreaseCredibility',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'SelectorExists-DecreaseCredibility',
        source: 'SelectorExists',
        target: 'DecreaseCredibility',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
    },
    {
        id: 'IncreaseCredibility-AddNewSelectors',
        source: 'IncreaseCredibility',
        target: 'AddNewSelectors',
    },
    {
        id: 'DecreaseCredibility-AddNewSelectors',
        source: 'DecreaseCredibility',
        target: 'AddNewSelectors',
    },
    {
        id: 'AddNewSelectors-PriceThreshold',
        source: 'AddNewSelectors',
        target: 'PriceThreshold',
    },
    {
        id: 'PriceThreshold-PriceDrop',
        source: 'PriceThreshold',
        target: 'PriceDrop',
        sourceHandle: 'yes',
        style: { stroke: '#2c7003', strokeWidth: 2},
    },
    {
        id: 'PriceDrop-UpdateDatabase',
        source: 'PriceDrop',
        target: 'UpdateDatabase',
    },
    {
        id: 'PriceThreshold-UpdateDatabase',
        source: 'PriceThreshold',
        target: 'UpdateDatabase',
        sourceHandle: 'no',
        style: { stroke: '#f87171', strokeWidth: 2},
    }

]

export const Flowchart = () => {

    const { t } = useTranslation('flowchart');

    const nodeBlueprints = [
        {
            id: 'AddNewItem',
            type: 'action',
            lvl: 1,
            col: 0,
        },
        {
            id: 'SendToDb',
            type: 'action',
            lvl: 2,
            col: 0,
        },
        {
            id: 'InitialScrapingDaemon',
            type: 'daemon',
            lvl: 3,
            col: 0,
        },
        {
            id: 'DomainPresence',
            type: 'decision',
            lvl: 4,
            col: 0,
        },
        {
            id: 'SelectorCredibilityInitial',
            type: 'decision',
            data: {
                tooltipSide: "left"
            },
            lvl: 5,
            col: -0.5,
        },
        {
            id: 'AskAIInitial',
            type: 'ai',
            lvl: 5,
            col: 0.5,
        },
        {
            id: 'UseCredibleSelector',
            type: 'action',
            data: {
                tooltipSide: "left"
            },
            lvl: 7,
            col: -0.5,
        },
        {
            id: 'ApiCallSuccessInitial',
            type: 'decision',
            lvl: 7,
            col: 0.5,
        },
        {
            id: 'SaveInitialToDb',
            type: 'database',
            lvl: 8,
            col: 0,
        },
        {
            id: 'UpdaterDaemon',
            type: 'daemon',
            lvl: 9,
            col: 0,
        },
        {
            id: 'Shuffle',
            type: 'action',
            lvl: 10,
            col: 0,
        },
        {
            id: 'LaunchBrowser',
            type: 'action',
            lvl: 11,
            col: 0,
        },
        {
            id: 'GetSingleItemToUpdate',
            type: 'action',
            lvl: 12,
            col: 0,
        },
        {
            id: 'DomainPresenceUpdater',
            type: 'decision',
            lvl: 13,
            col: 0,
        },
        {
            id: 'SelectorCredibilityUpdater',
            type: 'decision',
            data: {
            tooltipSide: "left"
            },
            lvl: 14,
            col: -0.5,
        },
        {
            id: 'AskAIUpdater',
            type: 'ai',
            data: {
                tooltipSide: "left"
            },
            lvl: 14,
            col: 1,
        },
        {
            id: 'UseSavedSelectors',
            type: 'action',
            lvl: 15,
            col: -1,
        },
        {
            id: 'ApiCallSuccessUpdater',
            type: 'decision',
            data: {
                tooltipSide: "left"
            },
            lvl: 15,
            col: 1,
        },
        {
            id: 'Availability',
            type: 'decision',
            data: {
                tooltipSide: "left"
            },
            lvl: 16,
            col: -0.5,
        },
        {
            id: 'SetUnavailable',
            type: 'action',
            data: {
                tooltipSide: "left"
            },
            lvl: 16,
            col: 1,
        },
        {
            id: 'ReasonablePriceChange',
            type: 'decision',
            lvl: 17,
            col: 0,
        },
        {
            id: 'GetNewSelectors',
            type: 'action',
            lvl: 18,
            col: 0,
        },
        {
            id: 'SelectorExists',
            type: 'decision',
            lvl: 19,
            col: 0,
        },
        {
            id: 'IncreaseCredibility',
            type: 'action',
            lvl: 20.3,
            col: -1,
        },
        {
            id: 'DecreaseCredibility',
            type: 'action',
            data: {
                tooltipSide: "left"
            },
            lvl: 20.3,
            col: 1,
        },
        {
            id: 'AddNewSelectors',
            type: 'action',
            lvl: 21.3,
            col: 0,
        },
        {
            id: 'PriceThreshold',
            type: 'decision',
            lvl: 23,
            col: 0,
        },
        {
            id: 'PriceDrop',
            type: 'action',
            lvl: 24,
            col: -1,
        },
        {
            id: 'UpdateDatabase',
            type: 'action',
            lvl: 25,
            col: 0,
        },
    ]

    const scrapingNodes: Node[] = nodeBlueprints.map((node => ({
        id: node.id,
        type: node.type,
        data: {
            ...node.data,
            label: t(`${node.id}.label`),
            description: t(`${node.id}.description`)
        },
        position: generatePosition(node.lvl, node.col),
        origin: [0.5, 0.5],
    })))

    const [nodes] = useNodesState(scrapingNodes);
    const [edges] = useEdgesState(scraperEdges);

    const [isInteractive, setIsInteractive] = useState(false);
    const [currentNodeId, setCurrentNodeId] = useState('AddNewItem');

    const toggleMode = () => {
        setIsInteractive((prev) => !prev);
        // If switching TO interactive, reset to start
        if (!isInteractive) {
            setCurrentNodeId('AddNewItem');
        }
    };

    return (
        <ActiveNodeProvider>
            <div className="w-full border-2 border-slate-700 rounded-lg overflow-hidden bg-slate-900/50 shadow-2xl relative flex flex-col"
                 onMouseDown={(e) => e.stopPropagation()}
                 onMouseUp={(e) => e.stopPropagation()}
                 onClick={(e) => e.stopPropagation()}
            >
                <div className="h-[600px] relative">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        panOnScroll={!isInteractive}
                        panOnScrollMode={PanOnScrollMode.Vertical}
                        zoomOnScroll={false}
                        nodesDraggable={false}
                        preventScrolling={!isInteractive}
                        panOnDrag={!isInteractive}
                        defaultViewport={{ x: window.innerWidth / 2 - 450, y: 0, zoom: 0.85 }}
                        defaultEdgeOptions={{ type: 'smoothstep', animated: true, style: {strokeWidth: 2} }}
                    >
                        {!isInteractive && <FlowInteraction/>}
                        <Controls />

                        <div className="absolute top-0 left-0 w-full z-50">
                            <FlowControlBar
                                isInteractive={isInteractive}
                                onToggleMode={toggleMode}
                                currentNodeId={currentNodeId}
                                setCurrentNodeId={setCurrentNodeId}
                            />
                        </div>

                        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none animate-pulse" />
                    </ReactFlow>
                </div>
            </div>
        </ActiveNodeProvider>
    );
};