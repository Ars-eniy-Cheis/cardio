import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import Admin from './Admin';

import { withRouter } from '../../utils/withRouter';

import Users from "../../model/dataClasses/Users";

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

    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    // Let's add a data resetter/randomizer to help
    // illustrate that flow...
    //const resetData = () => setData(originalData)

    return (
        <Admin
            columns={columns}
            data={data}
            updateData={updateData}
            skipPageReset={skipPageReset}
        />
    )
}

export default withRouter(AdminComponent)