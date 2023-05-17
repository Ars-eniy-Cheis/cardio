import { React, useEffect, useState } from "react"

import { roles } from "../../../config"
import { type } from "@testing-library/user-event/dist/type"

const PatientEditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateData,
}) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    if (id === "createdAt" || id === "updatedAt") {
        if (value !== 0) {
            return new Date(value * 1000).toLocaleDateString("en-GB")
        }
        return ""
    }
    else if(typeof value === "boolean"){
        return value ? "Да" : "Нет"
    }
    return value
}

const PatientColumn = {
    Cell: PatientEditableCell
}

export { PatientEditableCell, PatientColumn }