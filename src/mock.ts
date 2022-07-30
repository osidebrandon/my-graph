import { Graph } from "./components/Graph/types";


const mockGraphData: Graph = {
    nodes: [
        {
            id: '1',
            data: {
                name: 'Node 1'
            },
        },
        {
            id: '2',
            data: {
                name: 'Node 2'
            },
        },
        {
            id: '3',
            data: {
                name: 'Node 3'
            },
        },
        {
            id: '4',
            data: {
                name: 'Node 4'
            },
        },
    ],
    edges: [
        {
            id: '1-2',
            fromId: '1',
            toId: '2',
        },
        {
            id: '1-3',
            fromId: '1',
            toId: '3',
        },
        {
            id: '2-3',
            fromId: '2',
            toId: '3',
        },
        {
            id: '2-4',
            fromId: '2',
            toId: '4',
        },
    ],
}

export default mockGraphData;