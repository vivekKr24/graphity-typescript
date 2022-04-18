import { NodeParam } from "./node_param_list"

export function NodeParamView({node_label, id, desc} : NodeParam) {
    return (
        <>
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        {node_label}
                    </td>
                </tr>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        {id}
                    </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        {desc}
                    </td>
                </tr>
            </table>
        </>
    )
}