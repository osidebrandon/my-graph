import React from 'react';
import styled from 'styled-components';
import { EdgeUI } from '../Graph/types';

const EdgeLayout = styled.div<EdgeUI>`
  display: inline-block;
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: ${props => props.length}px;
  height: 5px;
  z-index: 0;

  transform: 
    translate(-50%, -50%) 
    rotate(${props => props.rotation}rad);
  background-color: darkgrey;
`;

type EdgeComponentProps = {
    edgeUI: EdgeUI;
}
const EdgeComponent = ({ edgeUI }: EdgeComponentProps) => {
    return (
        <EdgeLayout
            {...edgeUI}
        ></EdgeLayout>
    );
}

export default EdgeComponent;