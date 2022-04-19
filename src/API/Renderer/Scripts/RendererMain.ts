import { ObjectTracker } from "../../Events/object_tracker";
import { RenderEdge } from "./RenderEdge";
import { RenderNodes } from "./RenderGraphNode";

export function RenderToCanvas(ctx: CanvasRenderingContext2D) {
    let adjList = ObjectTracker.GetAdjList()
    let node_list = ObjectTracker.GetNodeList()
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // console.log("Rendering Edges")
    RenderEdge(node_list, adjList, ctx)
    // console.log("Rendering Nodes")
    RenderNodes(node_list, ctx)
}