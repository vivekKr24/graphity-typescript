export function ToPythonListAdjMatrix(adjlist: number[][]): String {
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

export function ToPythonDictAdjMatrix(adjlist: number[][]): String {
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



export function ToCPPveclist(adjlist: number[][]): String {
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

export function ToCPPvecvecMatrix(adjlist: number[][]): string {
    let t = ToPythonListAdjMatrix(adjlist).replaceAll("[", "{")
    t = t.replaceAll(']', '}')
    return t
}

export function ToPythonListMatrix(adjlist: number[][]): string {
    let t = ToCPPveclist(adjlist).replaceAll("{", "[")
    t = t.replaceAll('}', ']')
    return t
}

export function ToJSON(adjlist: number[][]): string {
    let t = JSON.stringify(adjlist)
    return t
}