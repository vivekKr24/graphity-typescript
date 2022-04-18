import { GraphNode } from "../../GUI_Objects/GraphNode";

function DrawEdge(ctx: CanvasRenderingContext2D, node1: GraphNode, node2: GraphNode) {
    let prevStroke = ctx.strokeStyle
    
    ctx.strokeStyle = "10px"
    ctx.moveTo(node1.GetX(), node1.GetY())
    ctx.lineTo(node2.GetX(), node2.GetY())
    ctx.stroke

    // console.log(node1.id, node2.id)

    ctx.strokeStyle = prevStroke
}

export function RenderEdge(node_list: GraphNode[], adjList: number[][], ctx: CanvasRenderingContext2D) {
    node_list.forEach((node, i) => {
        // console.log("Drawing for", node.id)
        adjList[node?.id].forEach((node2, j) => {
            console.log("Drawing", node.id, node2)
            DrawEdge(ctx, node, node_list[node2])
        })
    })
}