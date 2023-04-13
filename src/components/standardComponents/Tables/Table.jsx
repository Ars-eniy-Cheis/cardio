import { React } from "react"

import { useTable, useSortBy, usePagination } from 'react-table'

import UserEditableCell from "../Cells/UserEditableCell"
import PatientEditableCell from "../Cells/PatientEditableCell"

//import "../../../styles/components/standardComponents/tables/table.css"

const defaultColumn = {
    //Cell: UserEditableCell,
    Cell: PatientEditableCell
}

function Table({ columns, data, skipPageReset, additionalTableComponents }) {

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
                                {additionalTableComponents[i]}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}

export default Table;