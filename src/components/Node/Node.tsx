import React from 'react';
import styled from 'styled-components';
import { NodeUI } from '../Graph/types';

const NodeLayout = styled.div<NodeUI>`
  display: inline-block;
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: 50px;
  height: 50px;
  background-color: lightskyblue;
  box-shadow: 0 0 2px 1px grey;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

type NodeComponentProps = {
    nodeUI: NodeUI;
}
const NodeComponent = ({ nodeUI }: NodeComponentProps) => {
    return (
        <NodeLayout
            {...nodeUI}>
            {nodeUI.id}
        </NodeLayout>
    );
}

export default NodeComponent;