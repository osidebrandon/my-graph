import { render } from '@testing-library/react';
import styled from 'styled-components';
import { EdgeUI } from '../Graph/types';

const EdgeLayout = styled.div.attrs(({ position, length, rotation }: EdgeUI) => ({
  style: {
    left:  `${position.x}px`,
    top:   `${position.y}px`,
    width: `${length}px`,
    transform: `translate(-50%, -50%) rotate(${rotation}rad)`,
  }
}))<EdgeUI>`
  display: inline-block;
  position: absolute;
  z-index: 0;
`;

type EdgeComponentProps = {
    edgeUI: EdgeUI;
    render: () => any;
}
const EdgeComponent = ({ edgeUI, render }: EdgeComponentProps) => {
    return (
        <EdgeLayout
            {...edgeUI}
        >{render()}</EdgeLayout>
    );
}

export default EdgeComponent;