import { useEffect } from "react";
import { CreateTXT, GetString } from "../API/DataTypes/adjListConvertor";
import { ObjectTracker } from "../API/Events/object_tracker";

export function DownloadGraph() {
    function OnSelectExportOption(e: Event) {
        let sel: any = e.target;
        // Set preview
        let val = sel.value;
        console.log(GetString(val))
        console.log(document.querySelector("textarea"))
        document.querySelector("textarea")!!.value = GetString(val)
    }

    function Download() {
        let v: any = document.querySelector('select#select_export_type_id')
        if (v.value === "none") {
            return
        }
        CreateTXT(GetString(document.querySelector("select")!!.value), document.querySelector("select")!!.value)
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
                    <option label="Select format" value="none" selected disabled></option>
                    <optgroup label="Python Data Types">
                        <option value="python_2d_list_m">
                            Python 2D List (Adj Matrix)
                        </option>
                        <option value="python_2d_list_l">
                            Python 2D List (Adj List)
                        </option>
                        <option value="python_dict">
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
            <textarea value={"Select format"} rows={15} cols={30} id="download_preview" style={{ overflow:"scroll", resize: "none", tabSize:"4"}}> </textarea>
            <button onClick={(e) => {Download()}}> DOWNLOAD TEXT FORMAT </button>
        </div>
    )
}