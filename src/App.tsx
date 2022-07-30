import styled from 'styled-components';
import GraphComponent from './components/Graph';
import mockGraphData from './mock';

const Layout = styled.div``;

const App = () => {
  return (
    <Layout>
      <GraphComponent {...mockGraphData}/>
    </Layout>
  );
}

export default App;
