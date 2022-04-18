import { GraphNode } from "../../GUI_Objects/GraphNode";

function RenderGraphNode(node: GraphNode, ctx: CanvasRenderingContext2D) {
    let x = node.GetX()
    let y = node.GetY()
    // let image = new Image()
    // image.src = "../Images/node_background.bmp"
    // ctx.drawImage(image, x, y)
    ctx.beginPath()
    ctx.arc(x, y, 40, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
}

export function RenderNodes(node_list: GraphNode[], ctx: CanvasRenderingContext2D) {
    node_list.forEach(node => {RenderGraphNode(node, ctx)})
}