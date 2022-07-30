import { Graph } from "./components/Graph/types";


const mockGraphData: Graph = {
    nodes: [
        {
            id: '1',
            data: {
                name: 'File 1'
            },
        },
        {
            id: '2',
            data: {
                name: 'File 2'
            },
        },
    ],
    edges: [
        {
            id: '1-2',
            fromId: '1',
            toId: '2',
        }
    ],
}

export default mockGraphData;