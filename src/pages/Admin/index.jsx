import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { UserColumn } from "../../components/standardComponents/Cells/UserEditableCell";

import { handleGetUsers, handleDeleteUser } from "../../model/app/Handlers";

import { usersHeader } from "../../config/tableHeaders";

import Admin from './Admin';

import "../../styles/test.css"

function AdminComponent(props) {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users)

    const setUsersState = (usersValue) => {
        dispatch({ type: "SET_USERS", users: usersValue })
    }

    const columns = useMemo(
        () => usersHeader,
        []
    )

    const additionalTableComponents = [];
    for(let i = 0; i < usersState.length; i++){
        additionalTableComponents.push
        (
            <>
                <td>
                    <button onClick={() => { handleDeleteUser(props.navigate, usersState, setUsersState, usersState[i].id) }}> <tablebutton>Удалить</tablebutton> </button>
                </td>                
                <td>
                    <button onClick={() => { }}> <tablebutton>Сохранить</tablebutton> </button>
                </td>     
            </>
        )
    }

    const didMount = useRef(false);
    useEffect(() => {
        if (!didMount.current) {
            handleGetUsers(setUsersState)
        }
        setSkipPageReset(false)
    }, [])

    const [skipPageReset, setSkipPageReset] = useState(false)

    return (
        <Admin
            defaultColumn={UserColumn}
            columns={columns}
            data={usersState}
            skipPageReset={skipPageReset}
            additionalTableComponents={additionalTableComponents}
        />
    )
}

export default withRouter(AdminComponent)