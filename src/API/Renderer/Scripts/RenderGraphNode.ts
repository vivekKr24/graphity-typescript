import { EventSystem } from "../../Events/event_system";
import { GraphNode } from "../../GUI_Objects/GraphNode";

function RenderGraphNode(node: GraphNode, ctx: CanvasRenderingContext2D) {
    if (EventSystem.GetSelectedNode() === node.id) ctx.fillStyle = 'green'
    let x = node.GetX()
    let y = node.GetY()
    ctx.beginPath()
    ctx.arc(x, y, 40, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'black'
    ctx.closePath()
    ctx.stroke()
}

export function RenderNodes(node_list: GraphNode[], ctx: CanvasRenderingContext2D) {
    node_list.forEach(node => {RenderGraphNode(node, ctx)})
}