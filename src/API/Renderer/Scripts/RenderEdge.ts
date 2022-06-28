import { GraphNode } from "../../GUI_Objects/GraphNode";

function DrawEdge(ctx: CanvasRenderingContext2D, node1: GraphNode, node2: GraphNode) {
    let prevStroke = ctx.strokeStyle
    
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'grey'
    ctx.moveTo(node1.GetX(), node1.GetY())
    ctx.lineTo(node2.GetX(), node2.GetY())
    ctx.stroke()
    ctx.strokeStyle = 'black'
    ctx.closePath()
    ctx.lineWidth = 1
    ctx.strokeStyle = prevStroke
}

export function RenderEdge(node_list: GraphNode[], adjList: number[][], ctx: CanvasRenderingContext2D) {
    node_list.forEach((node, i) => {
        adjList[node?.id].forEach((node2, j) => {
            DrawEdge(ctx, node, node_list[node2])
        })
    })
}