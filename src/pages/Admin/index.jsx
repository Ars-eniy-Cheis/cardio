import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import Admin from './Admin';

import { withRouter } from '../../utils/withRouter';

import Users from "../../model/dataClasses/Users";

import "../../styles/test.css"

function AdminComponent(props) {

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Дата регистрации',
                accessor: 'registrationDate',
            },
            {
                Header: 'ФИО',
                accessor: 'fullName',
            },
            {
                Header: 'Логин',
                accessor: 'login',
            },
            {
                Header: 'Роль',
                accessor: 'role',
            },
            {
                Header: 'Удалён',
                accessor: 'deletionStatus',
            },
            {
                Header: 'Дата удаления',
                accessor: 'deletionDate',
            },
        ],
        []
    )

    let users = new Users()
    users.getUsers()
    const [data, setData] = useState(() => users.users)

    const [skipPageReset, setSkipPageReset] = useState(false)

    const updateData = (rowIndex, columnId, value) => {
        console.log("value: " + value);
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    const onDelete = () => {

    }

    const onSave = () => {

    }

    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    return (
        <Admin
            columns={columns}
            data={data}
            updateData={updateData}
            skipPageReset={skipPageReset}
            onDelete={onDelete}
            onSave={onSave}
        />
    )
}

export default withRouter(AdminComponent)