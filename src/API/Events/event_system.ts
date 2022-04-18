import { NodeParam } from "../../components/node_param_list";
import { ObjectTracker } from "./object_tracker"

export class EventSystem {
    private static node_selected: number = -1
    private static edge_selected: number[] = [-1, -1]
    // public static node_details: NodeParam[] = []

    public static GetSelectedNode() {
        return this.node_selected;
    }

    public static GetSelectedEdge() {
        return this.edge_selected;
    }
    
    public static SelectNode(x: number, y: number, shiftKey = false): number {
        let create_edge = this.node_selected !== -1
        let node_clicked = ObjectTracker.GetNodeId(x, y)

        //Return -1 when no node hit with mouse
        if (node_clicked === -1) return -1

        if (create_edge && shiftKey) {
            // Create undirected edge between node at (x, y) and selected_node
            ObjectTracker.AddEdgeWithID(node_clicked, this.node_selected)
            ObjectTracker.AddEdgeWithID(this.node_selected, node_clicked)
            console.log('Created edge', node_clicked, this.node_selected)
            this.Deselect()
            //Return -2 when edge created
            return -2
        }

        console.log("Node", node_clicked, "clicked" )
        this.node_selected = node_clicked

        // Return node id when node selected
        return node_clicked
    }

    public static SelectEdge(x: number, y: number, dlt = false) {
        let edge_clicked = ObjectTracker.GetEdgeId(x, y)
        if (edge_clicked === [-1, -1]) return
        if (dlt) {
            ObjectTracker.DeleteEdge(edge_clicked)
        }

        this.edge_selected = edge_clicked
    }

    public static OnDelete() {
        ObjectTracker.DeleteNode(this.node_selected)
    }

    public static Hover(x: number, y: number) {
        if (ObjectTracker.GetNodeId(x, y) !== -1) {
            // Show node label with css
            return
        }

        if (ObjectTracker.GetEdgeId(x, y) !== [-1, -1]) {
            // Show edge weight with css
            return
        }
    }

    // public static GetNodeDetails(x_rel: number, y_rel: number): NodeParam | null {
    //     let t = ObjectTracker.GetNodeId(x_rel, y_rel)
    //     if (t !== -1) return this.node_details[t]
    //     return null
    // }

    // public static GetNodeDetailsByID(id: number) : NodeParam {
    //     return this.node_details[id]
    // }

    public static Deselect() {
        this.node_selected = -1
        this.edge_selected = [-1, -1]
    }
}