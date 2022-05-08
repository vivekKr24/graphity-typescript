import { useEffect } from "react";
import { ToCPPveclist, ToCPPvecvecMatrix, ToJSON, ToPythonDictAdjMatrix, ToPythonListAdjMatrix, ToPythonListMatrix } from "../API/DataTypes/adjListConvertor";
import { ObjectTracker } from "../API/Events/object_tracker";

export function DownloadGraph() {
    function OnSelectExportOption(e: Event) {
        let sel: any = e.target
        switch (sel.value) {
            default:
                console.log("list adjmatrix:", ToPythonListAdjMatrix(ObjectTracker.GetAdjList()))
                console.log("dict:", ToPythonDictAdjMatrix(ObjectTracker.GetAdjList()))
                console.log("veclist:", ToCPPveclist(ObjectTracker.GetAdjList()))
                console.log("veclist:", ToCPPveclist(ObjectTracker.GetAdjList()))
                console.log("list adjlist:", ToPythonListMatrix(ObjectTracker.GetAdjList()))
                console.log("json:", ToJSON(ObjectTracker.GetAdjList()))
                
                break;
        }
    }

    useEffect(() => {
        document.getElementById("select_export_type_id")!!.onchange = (e) => {
            OnSelectExportOption(e)
        }
    })
    return (
        <div>
            <label htmlFor="select_export_type"></label>
            <select name="select_export_type" id="select_export_type_id">
                    <optgroup label="Python Data Types">
                        <option value="python_2d_list_m">
                            Python 2D List (Adj Matrix)
                        </option>
                        <option value="python_2d_list_l">
                            Python 2D List (Adj List)
                        </option>
                        <option value="python dictionary">
                            Python Dictionary (Adj List)
                        </option>
                    </optgroup>
                    <optgroup label="CPP Data Types">
                        <option value={"cpp_vec_list_int_l"}>
                            {"C++ vector<list<int>> (Adj List)"}
                        </option>
                        <option value={"cpp_vec_vec_int_m"}>
                            {"C++ vector<vector<int>> (Adj Matrix)"}
                        </option>
                    </optgroup>
                <optgroup label="Database Formats">
                    <option value="json"> JavaScript Object Notation </option>
                    <option value="json"> GarphQL graph {"<Test this>"} </option>
                </optgroup>
            </select>
        </div>
    )
}