import {GraphNode} from "../GUI_Objects/GraphNode"
import { EventSystem } from "./event_system"

export class ObjectTracker {
    private static node_list: GraphNode[] = []
    private static adjList: number[][] = []

    // Returns if graph node with coordinates (gx and px) includes (px, py)
    private static isInNode(gx: number, gy: number, px: number, py: number): boolean {
        return (gx - px) * (gx - px) + (gy - py) * (gy - py) <= GraphNode.radius * GraphNode.radius
    }

    private static isOnEdge(i: number, j: number, x: number, y: number) {
        let x1 = this.node_list[i].GetX()
        let y1 = this.node_list[i].GetY()

        let x2 = this.node_list[j].GetX()
        let y2= this.node_list[j].GetY()

        return (
            (y2 - y1) / (x2 - x1) === (y - y1) / (x - x1)
        )
    }

    public static GetNodeId(x: number, y: number): number {
        let t = this.node_list.find((node) => {
            return this.isInNode(node.GetX(), node.GetY(), x, y)
        })

        if (t != undefined) return t.id
        return -1
    }

    public static GetEdgeId(x: number, y: number): number[] {
        let edge = [-1, -1]
        this.adjList.forEach((edges, i) =>{
            edges.forEach((node_id) => {
                if (this.isOnEdge(i, node_id, x, y)) {
                    edge = [i, node_id]
                }
            })
        })
        
        return edge
    }

    public static AddNode(x: number, y: number) {
        // let label = prompt("Node label", "No Label")
        // let desc = prompt("Node Desc")
        let id = this.node_list.length
        // EventSystem.node_details = [...EventSystem.node_details, {node_label: label, id: id, desc: desc}]
        this.node_list = [...this.node_list, new GraphNode(x, y, id)]
        this.adjList = [...this.adjList, []]
    }

    public static AddEdge(x1: number, y1: number, x2: number, y2: number) {
        let node1 = this.node_list.find((node, idx) => {
            this.isInNode(node.GetX(), node.GetY(), x1, y1)
        })

        let node2 = this.node_list.find((node, idx) => {
            this.isInNode(node.GetX(), node.GetY(), x2, y2)
        })

        if (!this.adjList[node1!!.id].includes(node2!!.id)) {
            this.adjList[node1!!.id] = [...this.adjList[node1!!.id], node2!!.id]
        }
    }

    public static AddEdgeWithID(i: number, j: number) {
        if (!this.adjList[i].includes(j)) {
            this.adjList[i] = [...this.adjList[i], j]
        }
    }

    public static GetAdjList(): number[][] {
        return this.adjList
    }

    public static GetNodeList(): GraphNode[] {
        return this.node_list
    }

    public static DeleteNode(id: number) {

    }

    public static DeleteEdge(id: number[]) {

    }
}
