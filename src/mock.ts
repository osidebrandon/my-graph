
export default {
    nodes: {
        '1': {
            id: '1',
            data: {
                name: 'Node 1'
            },
        },
        '2': {
            id: '2',
            data: {
                name: 'Node 2'
            },
        },
        '3': {
            id: '3',
            data: {
                name: 'Node 3'
            },
        },
        '4': {
            id: '4',
            data: {
                name: 'Node 4'
            },
        },
    },
    edges: {
        '1-2': {
            id: '1-2',
            fromId: '1',
            toId: '2',
        },
        '1-3': {
            id: '1-3',
            fromId: '1',
            toId: '3',
        },
        '2-3': {
            id: '2-3',
            fromId: '2',
            toId: '3',
        },
        '2-4': {
            id: '2-4',
            fromId: '2',
            toId: '4',
        },
    },
}