import { render } from '@testing-library/react';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { NodeUI, Point } from '../Graph/types';

const NodeLayout = styled.div<NodeUI>`
  display: inline-block;
  position: absolute;
  z-index: 1;
`;

type NodeComponentProps = {
    nodeUI: NodeUI;
    render: () => any;
    onPositionChange: (nodeUI: NodeUI, newPosition: Point) => void;
}
const NodeComponent = ({ 
    nodeUI, onPositionChange, render
}: NodeComponentProps) => {

    const nodeRef = useRef(null);

    const handleOnDrag = (event: any) => {
        const { x, y, width, height } = event.target.getBoundingClientRect();

        if (!x || !y) return;
        const newPosition: Point = { 
            x: x + width / 2, 
            y: y + height / 2, 
        };
        onPositionChange(nodeUI, newPosition);
    }

    return (
        <Draggable
            nodeRef={nodeRef}
            onDrag={handleOnDrag}
            defaultPosition={nodeUI.initialPosition}
            positionOffset={{
                x: '-50%',
                y: '-50%',
            }}>
            <NodeLayout
                ref={nodeRef}
                {...nodeUI}>
                {render()}
            </NodeLayout>
        </Draggable>
    );
}

export default NodeComponent;