import { useEffect, useState } from "react"
import { EventSystem } from "../API/Events/event_system"

export function ObjectTrackerView() {
    let [SelectedNode, setSelectedNode]  = useState(-1)
    let [SelectedEdge, setSelectedEdge]  = useState([-1, -1])

    useEffect(() => {
        let canvas = document.querySelector("canvas")
        canvas?.addEventListener('mousemove', (e) => {
            setTimeout(() => {

                let mouse_x = e.clientX
                let mouse_y = e.clientY
                let canvas_x = canvas!!.getBoundingClientRect().x
                let canvas_y = canvas!!.getBoundingClientRect().y
                
                let x_rel = mouse_x - canvas_x
                let y_rel = mouse_y - canvas_y
                
                setSelectedNode(EventSystem.GetSelectedNode())
                setSelectedEdge(EventSystem.GetSelectedEdge())
            }, 100)
        })
    })

    return (
        <>
            <table>
                <tr>
                    <th>Selected Node</th>
                </tr>
                <tr>
                    <td> {EventSystem.GetSelectedNode() === -1 && "NONE"}
                        {EventSystem.GetSelectedNode() !== - 1 && EventSystem.GetSelectedNode()}
                    </td>
                </tr>
            </table>
        </>
    )
}