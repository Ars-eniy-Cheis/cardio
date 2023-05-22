import { React, useEffect, useState } from "react"

import { roles } from "../../../config"
import { type } from "@testing-library/user-event/dist/type"

import { useDispatch, useSelector } from "react-redux";

const UserEditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateData,
}) => {
    const [value, setValue] = useState(initialValue)

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users)

    const setUsersState = (usersValue) => {
        dispatch({ type: "SET_USERS", users: usersValue })
    }

    const onChange = (e, key) => {
        setValue(e.target.value)
        usersState[index][key] = e.target.value
    }

    const onBlur = () => {
        //updateData(index, id, value)
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
        return (<select value="role" onChange={(e) => {onChange(e, id)}} >
            {options}
        </select>)
    }
    return <input className="table-input" value={value} onChange={(e) => {onChange(e, id)}} onBlur={onBlur} />
}

const UserColumn = {
    Cell: UserEditableCell
}

export { UserEditableCell, UserColumn }
