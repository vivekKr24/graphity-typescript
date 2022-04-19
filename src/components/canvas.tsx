import { useEffect } from "react"
import { EventSystem } from "../API/Events/event_system"
import {ObjectTracker} from "../API/Events/object_tracker"
import { RenderToCanvas } from "../API/Renderer/Scripts/RendererMain"

// Draw area
export function Canvas() {
    useEffect(() => {
        let canvas = document.querySelector("canvas")
        canvas!!.width = 1280
        canvas!!.height = 720
        canvas!!.style.backgroundColor = "red"

        // Add event listeners
        window!!.addEventListener("dblclick", (e) => {
            e.stopImmediatePropagation()
            if (! e.ctrlKey) {
                console.log("Press ctrl for dblclick events")
                return
            }
            let mouse_x = e.clientX
            let mouse_y = e.clientY
            let canvas_x = canvas!!.getBoundingClientRect().x
            let canvas_y = canvas!!.getBoundingClientRect().y

            // alert("Added node")
            OnCanvasDoubleClick(mouse_x, mouse_y, canvas_x, canvas_y)
            console.log("Node list", ObjectTracker.GetNodeList())
            console.log("Adj List", ObjectTracker.GetAdjList())

            RenderToCanvas(canvas!!.getContext("2d")!!)
        })

        window!!.addEventListener("click", (e) => {
            e.stopImmediatePropagation()
            if (e.ctrlKey) {
                console.log("Don't press ctrl for click events")
                return
            }

            let mouse_x = e.clientX
            let mouse_y = e.clientY
            let canvas_x = canvas!!.getBoundingClientRect().x
            let canvas_y = canvas!!.getBoundingClientRect().y

            OnCanvasClick(mouse_x, mouse_y, canvas_x, canvas_y, e.shiftKey)

            RenderToCanvas(canvas!!.getContext("2d")!!)
        })

        window!!.addEventListener("mousemove", (e) => {
            if (e.altKey){
                e.stopImmediatePropagation()

                let mouse_x = e.clientX
                let mouse_y = e.clientY
                let canvas_x = canvas!!.getBoundingClientRect().x
                let canvas_y = canvas!!.getBoundingClientRect().y

                let rel_x = mouse_x - canvas_x
                let rel_y = mouse_y - canvas_y

                let t = ObjectTracker.GetNodeId(rel_x, rel_y)

                if (t !== -1) {
                    ObjectTracker.GetNodeList()[t].SetX(rel_x)
                    ObjectTracker.GetNodeList()[t].SetY(rel_y)
                }

                RenderToCanvas(canvas!!.getContext("2d")!!)
            }
        })

        
    })

    return <>
        <canvas id="canvas-draw-area">
            
        </canvas>
    </>
}

// Event Listeners

// Double Click Listener
function OnCanvasDoubleClick(mouse_x: number, mouse_y: number, canvas_x: number, canvas_y: number) {
    let x_rel = mouse_x - canvas_x
    let y_rel = mouse_y - canvas_y

    ObjectTracker.AddNode(x_rel, y_rel)
}

function OnCanvasClick(mouse_x: number, mouse_y: number, canvas_x: number, canvas_y: number, shiftKey: boolean = false) {
    let x_rel = mouse_x - canvas_x
    let y_rel = mouse_y - canvas_y

    
    // Select / Deselect node or edge  
    let t = EventSystem.SelectNode(x_rel, y_rel, shiftKey)
    console.log("Canvas Clicked at node ", t, x_rel, y_rel, )
    if (t === - 1) {
        EventSystem.SelectEdge(x_rel, y_rel, shiftKey)
    }
    // if shift was held, and new node selected,then join with prev one
}

function OnCanvasHover(mouse_x: number, mouse_y: number, canvas_x: number, canvas_y: number) {
    let x_rel = mouse_x - canvas_x
    let y_rel = mouse_y - canvas_y

    ShowNodeDetails(x_rel, y_rel)
}

function ShowNodeDetails(x_rel: number, y_rel: number) {
    // SHow
    // EventSystem.GetNodeDetails(x_rel, y_rel)
}