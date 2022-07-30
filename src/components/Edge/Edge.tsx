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
  height: 5px;
  z-index: 0;
  background-color: darkgrey;
`;

// const EdgeLayout = styled.div<EdgeUI>`
//   display: inline-block;
//   position: absolute;
//   left: ${props => props.position.x}px;
//   top: ${props => props.position.y}px;
//   width: ${props => props.length}px;
//   height: 5px;
//   z-index: 0;

//   transform: 
//     translate(-50%, -50%) 
//     rotate(${props => props.rotation}rad);
//   background-color: darkgrey;
// `;

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