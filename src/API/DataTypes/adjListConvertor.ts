import { ObjectTracker } from "../Events/object_tracker";

let pythonComment = "# This is a python comment"
let cppComment = "/* This is a cpp comment */"

function ToPythonListAdjMatrix(adjlist: number[][]): string {
    let n: number = adjlist.length
    let list: string = "[\n";
    adjlist.forEach((nodelist, i) => {
        if (i) list += ",\n"
        list += "\t["
        for (let x: number = 0; x < n; x++) {
            if (x) list += ", "
            let val: string = nodelist.find(t => t == x) != undefined ? "1" : "0"
            list += val
        }
        list += "]"
    })

    list += "\n]"
    
    return list
}

function ToPythonDictAdjMatrix(adjlist: number[][]): string {
    let n: number = adjlist.length
    let list: string = "{\n";
    adjlist.forEach((nodelist, i) => {
        if (i) list += ",\n"
        list += "\t" + i.toString() + ": ["
        nodelist.forEach((val, i) => {
            if (i) list += ", "
            list += val.toString()
        })
        list += "]"
    })

    list += "\n}"
    
    return list
}

function ToPythonListAdjList(adjlist: number[][]): string {
    let t = ToCPPveclist(adjlist).replaceAll("{", "[")
    t = t.replaceAll('}', ']')
    return t
}

function ToCPPveclist(adjlist: number[][]): string {
    let list: string = "{\n";
    adjlist.forEach((nodelist, i) => {
        if (i) list += ",\n"
        list += "\t{"
        nodelist.forEach((val, i) => {
            if (i) list += ", "
            list += val.toString()
        })
        list += "}"
    })

    list += "\n}"
    
    return list
}

function ToCPPvecvecMatrix(adjlist: number[][]): string {
    let t = ToPythonListAdjMatrix(adjlist).replaceAll("[", "{")
    t = t.replaceAll(']', '}')
    return t
}


function ToJSON(adjlist: number[][]): string {
    let t = JSON.stringify(adjlist)
    return t
}

export function CreateTXT(text: string, filename: string) {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
    a.download = filename + ".txt";
    a.click();
}

export function GetString(value: any): string {
    switch (value) {
        case "python_2d_list_m":
            return ToPythonListAdjMatrix(ObjectTracker.GetAdjList())
        case "python_2d_list_l":
            return ToPythonListAdjList(ObjectTracker.GetAdjList())
        case "cpp_vec_list_int_l":
            return ToCPPveclist(ObjectTracker.GetAdjList())
        case "cpp_vec_vec_int_m":
            return ToCPPvecvecMatrix(ObjectTracker.GetAdjList())
        case "python_dict":
            return ToPythonDictAdjMatrix(ObjectTracker.GetAdjList())
        case "json":
            return ToJSON(ObjectTracker.GetAdjList())
        default:
            return ""
    }
}