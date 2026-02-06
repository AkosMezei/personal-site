import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    Node,
    Controls,
    PanOnScrollMode,
} from '@xyflow/react'

import '@xyflow/react/dist/base.css';
import {CustomNode} from "../Nodes/CustomNode.tsx";
import {DecisionNode} from "../Nodes/DecisionNode.tsx";
import { DaemonNode } from '../Nodes/DaemonNode.tsx';
import {AiNode} from "../Nodes/AiNode.tsx";
import {DatabaseNode} from "../Nodes/DatabaseNode.tsx";
import {ActionNode} from "../Nodes/ActionNode.tsx";
import {FlowInteraction} from "../../Utils/FlowInteraction.tsx";
import {ActiveNodeProvider} from "../../Contexts/ActiveNodeContext.tsx";
import {useState} from "react";
import {FlowControlBar} from "../FlowControlBar.tsx";

const nodeTypes = {
    custom: CustomNode,
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

const nodeBlueprints = [
    {
        id: 'AddNewItem',
        type: 'action',
        data: {
            label: "Add New Item",
            description: "Add a new item from the front end. It contains the URL of the item and the alert threshold set by the user (percentage or fixed price)."
        },
        lvl: 1,
        col: 0,
    },
    {
        id: 'SendToDb',
        type: 'action',
        data: {
            label: "Send the URL to the database and mark it for processing",
            description: "Persist the new tracking request. The item is flagged with a 'pending' status, queuing it for the initial scraping cycle.",
        },
        lvl: 2,
        col: 0,
    },
    {
        id: 'InitialScrapingDaemon',
        type: 'daemon',
        data: {
            label: "Initial Scraping Daemon Polls For A New Item",
            description: "The initial scraping daemon polls every 30 seconds for new items. It performs connectivity checks and dequeues pending items."
        },
        lvl: 3,
        col: 0,
    },
    {
        id: 'DomainPresence',
        type: 'decision',
        data: {
            label: "Is the domain already present in the selector database?",
            description: "Check if we have established scraping strategies (CSS selectors) for this specific domain to avoid unnecessary AI costs."
        },
        lvl: 4,
        col: 0,
    },
    {
        id: 'SelectorCredibilityInitial',
        type: 'decision',
        data: {
            label: "Are any selector credibility scores above threshold?",
            description: "Evaluate the reliability of existing selectors. Only selectors with a high success history are trusted for the initial check.",
            tooltipSide: "left"
        },
        lvl: 5,
        col: -0.5,
    },
    {
        id: 'AskAIInitial',
        type: 'ai',
        data: {
            label: "Ask AI w/ vision for the price, check OG tags for metadata",
            description: "Send a viewport screenshot to Gemini 2.5 Flash. The prompt requests a structured JSON response containing price, currency, and stock status."
        },
        lvl: 5,
        col: 0.5,
    },
    {
        id: 'UseCredibleSelector',
        type: 'action',
        data: {
            label: "Use saved high credibility selectors",
            description: "Extract data using the cached, high-trust CSS selectors. This path is faster and incurs zero API costs.",
            tooltipSide: "left"
        },
        lvl: 7,
        col: -0.5,
    },
    {
        id: 'ApiCallSuccessInitial',
        type: 'decision',
        data: {
            label: "Was the API call successful?",
            description: "Verify the AI response structure. If the API fails or returns malformed JSON, the system triggers a retry with exponential backoff."
        },
        lvl: 7,
        col: 0.5,
    },
    {
        id: 'SaveInitialToDb',
        type: 'database',
        data: {
            label: "Save the initial scraping result to the database",
            description: "Store the baseline price, item metadata (title, image), and availability. This establishes the reference point for future alerts."
        },
        lvl: 8,
        col: 0,
    },
    {
        id: 'UpdaterDaemon',
        type: 'daemon',
        data: {
            label: "Updater Daemon Polls For A New Item To Update",
            description: "A background service that continuously monitors the database for items that have passed their update interval window."
        },
        lvl: 9,
        col: 0,
    },
    {
        id: 'Shuffle',
        type: 'action',
        data: {
            label: "Shuffle list of sites by domain, shuffle domains",
            description: "Randomize the processing order of domains and items. This mimics human traffic patterns and prevents triggering rate limiters."
        },
        lvl: 10,
        col: 0,
    },
    {
        id: 'LaunchBrowser',
        type: 'action',
        data: {
            label: "Launch Browser",
            description: "Initialize a headless browser instance with stealth plugins to evade bot detection systems (Cloudflare/Akamai)."
        },
        lvl: 11,
        col: 0,
    },
    {
        id: 'GetSingleItemToUpdate',
        type: 'action',
        data: {
            label: "Get Single Item To Update",
            description: "Pop the next item from the shuffled queue. This ensures fair resource distribution across different tracked domains."
        },
        lvl: 12,
        col: 0,
    },
    {
        id: 'DomainPresenceUpdater',
        type: 'decision',
        data: {
            label: "Is the domain already present in the selector database?",
            description: "Verify if scraping logic exists for this domain. If not, the system must fallback to AI vision to learn the page structure."
        },
        lvl: 13,
        col: 0,
    },
    {
        id: 'SelectorCredibilityUpdater',
        type: 'decision',
        data: {
            label: "Are any selector credibility scores above threshold?",
            description: "Check if the existing selectors are trustworthy. Low scores indicate a site layout change, triggering a self-healing process.",
            tooltipSide: "left"
        },
        lvl: 14,
        col: -0.5,
    },
    {
        id: 'AskAIUpdater',
        type: 'ai',
        data: {
            label: "Ask AI w/ vision for price and availability",
            description: "Fallback mechanism: If selectors fail, the AI visually analyzes the page to locate the current price and 'Add to Cart' button.",
            tooltipSide: "left"
        },
        lvl: 14,
        col: 1,
    },
    {
        id: 'UseSavedSelectors',
        type: 'action',
        data: {
            label: "Use saved high credibility selectors",
            description: "Attempt to scrape the current price using the stored DOM selectors. This is the preferred, low-latency path."
        },
        lvl: 15,
        col: -1,
    },
    {
        id: 'ApiCallSuccessUpdater',
        type: 'decision',
        data: {
            label: "Was the API call successful?",
            description: "Ensure the AI returned usable data. Failures here log an error and mark the item for a retry in the next cycle.",
            tooltipSide: "left"
        },
        lvl: 15,
        col: 1,
    },
    {
        id: 'Availability',
        type: 'decision',
        data: {
            label: "Is the item still available?",
            description: "Parse stock indicators (e.g., 'Out of Stock' text, grayed-out buttons) to determine purchasing ability.",
            tooltipSide: "left"
        },
        lvl: 16,
        col: -0.5,
    },
    {
        id: 'SetUnavailable',
        type: 'action',
        data: {
            label: "Set item as unavailable",
            description: "Flag the item as OOS in the database. This pauses price drop alerts but keeps the item active in the tracking rotation.",
            tooltipSide: "left"
        },
        lvl: 16,
        col: 1,
    },
    {
        id: 'ReasonablePriceChange',
        type: 'decision',
        data: {
            label: "Is the price change within reasonable limits?",
            description: "Heuristic check: If a price drops by 99% (e.g. $1000 to $10), it's likely a bug or glitch. This triggers a re-verification."
        },
        lvl: 17,
        col: 0,
    },
    {
        id: 'GetNewSelectors',
        type: 'action',
        data: {
            label: "Get new selectors based on scraped price",
            description: "Self-Healing: Reverse-engineer the DOM to find which HTML elements contain the confirmed price, generating new CSS selectors."
        },
        lvl: 18,
        col: 0,
    },
    {
        id: 'SelectorExists',
        type: 'decision',
        data: {
            label: "Are the new selector/s already saved?",
            description: "Deduplication check to ensure we don't store redundant selectors for the same DOM element."
        },
        lvl: 19,
        col: 0,
    },
    {
        id: 'IncreaseCredibility',
        type: 'action',
        data: {
            label: "Increase selector credibility score",
            description: "Reward the selector that successfully found the correct price, increasing its probability of being used in future runs."
        },
        lvl: 20.3,
        col: -1,
    },
    {
        id: 'DecreaseCredibility',
        type: 'action',
        data: {
            label: "Decrease selector credibility score",
            description: "Penalize selectors that returned incorrect data or failed to find the element. Selectors dropping below 0 are pruned.",
            tooltipSide: "left"
        },
        lvl: 20.3,
        col: 1,
    },
    {
        id: 'AddNewSelectors',
        type: 'action',
        data: {
            label: "Add new selectors with base credibility score",
            description: "Store the new, AI-discovered selectors with a baseline score, allowing the system to adapt to site layout changes."
        },
        lvl: 21.3,
        col: 0,
    },
    {
        id: 'PriceThreshold',
        type: 'decision',
        data: {
            label: "Is the new price below the user defined threshold?",
            description: "Compare the verified price against the user's target. Logic handles both absolute values and percentage drops."
        },
        lvl: 22,
        col: 0,
    },
    {
        id: 'PriceDrop',
        type: 'action',
        data: {
            label: "Send an alert for the price drop",
            description: "Trigger the notification pipeline (Email/Discord) to alert the user of the deal immediately."
        },
        lvl: 23,
        col: -1,
    },
    {
        id: 'UpdateDatabase',
        type: 'action',
        data: {
            label: "Update database",
            description: "Commit the new price history, update the 'last checked' timestamp, and close the transaction."
        },
        lvl: 24,
        col: 0,
    },
]

const scrapingNodes: Node[] = nodeBlueprints.map((node => ({
    id: node.id,
    type: node.type,
    data: node.data,
    position: generatePosition(node.lvl, node.col),
    origin: [0.5, 0.5],
})))

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