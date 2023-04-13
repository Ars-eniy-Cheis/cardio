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

    if (id === "dateOfAdmission") {
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

export default PatientEditableCell