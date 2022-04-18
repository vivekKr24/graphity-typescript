import { useEffect, useState } from "react";
import { EventSystem } from "../API/Events/event_system";
import { ObjectTracker } from "../API/Events/object_tracker";
import { NodeParamView } from "./node_param_view";

export function NodeParamViewList() {
    let [node_count, setNodeCount] = useState(0)

    useEffect(() => {
        let canvas = document.querySelector('canvas')
        canvas!!.addEventListener('dblclick', (e) => {
            if (e.ctrlKey) {
                setNodeCount(node_count + 1)
            }
        })
    })

    let node_list: any = []

    // let node_list_obj_tracker = ObjectTracker.GetNodeList()

    // for (let i = 0; i < node_count - 1; i++) {
    //     let node_id = node_list_obj_tracker[i].id
    //     let node_details = EventSystem.GetNodeDetailsByID(node_id)
    //     let node_label = node_details.node_label
    //     let node_desc = node_details.desc
    //     node_list = [...node_list, <NodeParamView node_label = { node_label } id={ node_id } desc = { node_desc }/>]
    // }

    return (
        <>
            {node_list}
        </>
    )
}