import { useReactFlow, useOnViewportChange } from '@xyflow/react';
import { useSetActiveNodeIds } from "../Contexts/ActiveNodeContext.tsx";

export const FlowInteraction = ({containerHeight = 600, containerWidth = 800}) => {
    const {getNodes} = useReactFlow();
    const setActiveIds = useSetActiveNodeIds();

    useOnViewportChange({
        onChange: (viewport) => {
            const middleY = containerHeight / 2;
            const middleX = containerWidth / 2;

            const targetWorldY = (middleY - viewport.y) / viewport.zoom;
            const targetWorldX = (middleX - viewport.x) / viewport.zoom;

            const nodes = getNodes();

            const rowNodes = nodes.filter(node => {
                const distanceY = Math.abs(node.position.y - targetWorldY);
                return distanceY < 150;
            })
            const baseToleranceX = viewport.zoom < 1 ? 600 : 200;

            const toleranceX = baseToleranceX / viewport.zoom;

            const activeIds = rowNodes.filter(node => {
                const distanceX = Math.abs(node.position.x - targetWorldX);
                return distanceX < toleranceX;
            })
                .map(node => node.id);

            setActiveIds(activeIds);
        }
    })

    return null
};