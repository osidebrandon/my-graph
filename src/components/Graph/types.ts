
// Generates //

export type NodeUIMap = {
    [id: string]: NodeUI;
}
export type EdgeUIMap = {
    [id: string]: EdgeUI;
}
export type NodeUI = {
    id: string;
    position: Point;
    initialPosition: Point;
}
export type EdgeUI = {
    id: string;
    position: Point;
    rotation: number;
    length: number;
}
export type Point = {
    x: number;
    y: number;
}

// Givens //

export type Graph = {
    nodes: Node[];
    edges: Edge[];
};
export type Node = {
    id: string;
    data: any;
};
export type Edge = {
    id: string;
    fromId: string;
    toId: string;
};