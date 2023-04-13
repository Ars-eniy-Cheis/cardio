import { React, useEffect, useState } from "react"

import { roles } from "../../../config"

const UserEditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateData,
}) => {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const selectOnChange = e => {
        setValue(e.target.value)
        updateData(index, id, e.target.value)
    }

    const onBlur = () => {
        updateData(index, id, value)
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    if (id === "id") {
        return value
    }
    else if (id === "registrationDate") {
        if (value !== 0) {
            return new Date(value * 1000).toLocaleDateString("en-GB")
        }
        return ""
    }
    else if (id === "role") {
        let tabRoles = structuredClone(roles)
        tabRoles.delete(value)
        let options = [<option value={value}>{value}</option>]

        for (let i of tabRoles) {
            options.push(
                <option value={i}>{i}</option>
            )
        }
        return (<select value="role" onChange={selectOnChange} >
            {options}
        </select>)
    }
    return <input className="table-input" value={value} onChange={onChange} onBlur={onBlur} />
}

export default UserEditableCell