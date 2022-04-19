import { useEffect, useInsertionEffect, useState } from "react"
import { EventSystem } from "../API/Events/event_system"
import { ObjectTracker } from "../API/Events/object_tracker"

interface node_edge_list {
    node_id: number
    edge_list: number[]
}

function NodeList( {node_id, edge_list}: node_edge_list ) {
    let [edge_list_, setEdgeList] = useState(edge_list)

    useEffect(() => {
        let canvas = document.querySelector("canvas")
        setEdgeList(ObjectTracker.GetAdjList()[node_id])

        canvas!!.addEventListener('mousemove', (e) => {
            let mouse_x = e.clientX
            let mouse_y = e.clientY
            let canvas_x = canvas!!.getBoundingClientRect().x
            let canvas_y = canvas!!.getBoundingClientRect().y
            
            let x_rel = mouse_x - canvas_x
            let y_rel = mouse_y - canvas_y
            
            setEdgeList(ObjectTracker.GetAdjList()[node_id])
        })
    })

    let edge_node_id_list: JSX.Element[] = []

    edge_list_.forEach((val) => {
        edge_node_id_list = [...edge_node_id_list, <td className="edge_node_id"> { val } </td>]
    })


    return (
        <>
            <tr>
                <td className="node_id">
                    { node_id } {": "} 
                </td>
                {edge_node_id_list}
            </tr>
        </>
    )
}

export function AdjecencyListView() {
    let [adjList, setAdjList] = useState(ObjectTracker.GetAdjList())

    useEffect(() => {
        let canvas = document.querySelector("canvas")
        setAdjList(ObjectTracker.GetAdjList())

        canvas!!.addEventListener('mousemove', (e) => {
            let mouse_x = e.clientX
            let mouse_y = e.clientY
            let canvas_x = canvas!!.getBoundingClientRect().x
            let canvas_y = canvas!!.getBoundingClientRect().y
            
            let x_rel = mouse_x - canvas_x
            let y_rel = mouse_y - canvas_y
            
            setAdjList(ObjectTracker.GetAdjList())
        })
    })

    let list: JSX.Element[] = []

    adjList.forEach((edge_list, node) => {
        list = [...list, <NodeList node_id={ node } edge_list = {edge_list}/>]
    })

    return (
        <div id="adj-list-view">
            <table>
                {list}
            </table>
        </div>
    )
}