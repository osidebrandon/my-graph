import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { NodeUI, Point } from '../Graph/types';

const NodeLayout = styled.div<NodeUI>`
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: lightskyblue;
  box-shadow: 0 0 2px 1px grey;
  border-radius: 5px;
  z-index: 1;
`;

type NodeComponentProps = {
    nodeUI: NodeUI;
    onPositionChange: (nodeUI: NodeUI, newPosition: Point) => void;
}
const NodeComponent = ({ 
    nodeUI, onPositionChange 
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
                {nodeUI.id}
            </NodeLayout>
        </Draggable>
    );
}

export default NodeComponent;