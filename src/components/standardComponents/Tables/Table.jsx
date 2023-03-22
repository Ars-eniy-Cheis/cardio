import { React, useEffect, useState, useRef, useMemo } from "react"

import { useTable, useSortBy, usePagination } from 'react-table'

import { roles } from "../../../config"

//import "../../../styles/components/standardComponents/tables/table.css"

const EditableCell = ({
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

const defaultColumn = {
    Cell: EditableCell,
}

function Table({ columns, data, updateData, skipPageReset, onDelete, onSave }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            autoResetPage: !skipPageReset,
            updateData,
        },
        useSortBy,
        usePagination
    )

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    { }
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                            <th>
                            </th>
                            <th>
                            </th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                                <td>
                                    <button onClick={() => { }}> <tablebutton>Удалить</tablebutton> </button>
                                </td>
                                <td>
                                    <button onClick={() => { }}> <tablebutton>Сохранить</tablebutton> </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}

export default Table;