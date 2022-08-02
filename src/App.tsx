import styled from 'styled-components';
import GraphComponent from './components/Graph';
import mockGraphData from './mock';

const Layout = styled.div``;

const mockNodes = mockGraphData.nodes;
const mockEdges = mockGraphData.edges;

const NodeStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightskyblue;
  box-shadow: 0 0 2px 1px grey;
  border-radius: 5px;
`;
const EdgeStyled = styled.div`
  height: 5px;
  background-color: darkgrey;
`;

const App = () => {
  return (
    <Layout>
      <GraphComponent 
        nodesMap={mockNodes}
        edgesMap={mockEdges}
        renderNode={() => <NodeStyled />}
        renderEdge={() => <EdgeStyled />}
      />
    </Layout>
  );
}

export default App;
