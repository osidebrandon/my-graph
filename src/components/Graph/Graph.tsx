import { useState, useEffect } from "react";
import EdgeComponent from "../Edge";
import NodeComponent from "../Node";
import {
    Edge,
    EdgeUI,
    EdgeUIMap,
    Graph,
    Node,
    NodeUI,
    NodeUIMap,
    Point
} from "./types";

const GraphComponent = ({
    nodes, edges
}: Graph) => {

    const [nodesUI, setNodesUI] = useState<NodeUIMap>({});
    const [edgesUI, setEdgesUI] = useState<EdgeUIMap>({});

    useEffect(() => {
        generateNodesUI();
    }, []);

    useEffect(() => {
        if (Object.keys(nodesUI).length <= 0) return;
        generateEdgesUI();
    }, [nodesUI]);

    const generateNodesUI = () => {
        const newNodesUIMap: NodeUIMap = {};
        nodes.map((node: Node, index: number) => {
            const initialPosition = {
                x: 100 + index * 200,
                y: 100,
            };
            const newNodeUI: NodeUI = {
                id: node.id,
                initialPosition,
                position: initialPosition,
            };
            newNodesUIMap[node.id] = newNodeUI;
        });
        setNodesUI(newNodesUIMap);
    }

    const generateEdgesUI = () => {
        const newEdgesUIMap: EdgeUIMap = {};
        edges.map((edge: Edge) => {
            const newEdgeUI: EdgeUI = {
                id: edge.id,
                position: generateEdgePosition(
                    edge.fromId,
                    edge.toId,
                ),
                rotation: generateEdgeRotation(
                    edge.fromId,
                    edge.toId,
                ),
                length: generateEdgeLength(
                    edge.fromId,
                    edge.toId,
                ),
            };
            newEdgesUIMap[edge.id] = newEdgeUI;
        });
        setEdgesUI(newEdgesUIMap);
    }

    const generateEdgePosition = (
        fromId: string, toId: string
    ): Point => {
        const fromNodeUI: NodeUI = nodesUI[fromId];
        const toNodeUI: NodeUI = nodesUI[toId];
        const x: number = (toNodeUI.position.x + fromNodeUI.position.x) / 2;
        const y: number = (toNodeUI.position.y + fromNodeUI.position.y) / 2;
        return {
            x,
            y,
        }
    }

    const generateEdgeRotation = (
        fromId: string, toId: string
    ): number => {
        const fromNodeUI: NodeUI = nodesUI[fromId];
        const toNodeUI: NodeUI = nodesUI[toId];
        const xDelta = toNodeUI.position.x - fromNodeUI.position.x;
        const yDelta = toNodeUI.position.y - fromNodeUI.position.y;
        return Math.atan(yDelta / xDelta);
    }
    const generateEdgeLength = (
        fromId: string, toId: string
    ): number => {
        const fromNodeUI: NodeUI = nodesUI[fromId];
        const toNodeUI: NodeUI = nodesUI[toId];
        return Math.sqrt(
            Math.pow((toNodeUI.position.x - fromNodeUI.position.x), 2) +
            Math.pow((toNodeUI.position.y - fromNodeUI.position.y), 2)
        );
    }

    const handleNodePositionChange = (
        nodeUI: NodeUI, newPosition: Point
    ): void => {
        const newNodesUI: NodeUIMap = {...nodesUI};
        newNodesUI[nodeUI.id] = {
            ...nodeUI,
            position: newPosition,
        };
        setNodesUI(newNodesUI);
    }

    return (
        <>
            {Object.keys(nodesUI).map((nodeId: string) => {
                return (
                    <NodeComponent
                        key={nodeId}
                        onPositionChange={handleNodePositionChange}
                        nodeUI={nodesUI[nodeId]}
                    />
                );
            })}
            {Object.keys(edgesUI).map((edgeId: string) => {
                return (
                    <EdgeComponent
                        key={edgeId}
                        edgeUI={edgesUI[edgeId]}
                    />
                );
            })}
        </>
    );
}

export default GraphComponent;