import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { handleResetUserPassword } from "../../model/app/Handlers";

import { withRouter } from '../../utils/withRouter';

import "../../styles/ResetPassword.css";


const ResetPassword = (props) => {

  let currentManipulatingValueState = useSelector(state => state.currentManipulatingValue)

  const [newPassword, setNewPassword] = useState("");

  const handleChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleGoBack = () => {
    props.navigate(-1)
  };

  return (
    <div>
    <button
        className="standard-button go-back-button"
        type="button"
        onClick={handleGoBack}
        >
        Назад
    </button>
      <div className="form" >
        <label htmlFor="newPassword">Новый пароль:</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
        />
        <div className="reset-password-buttons">
          <button className="standard-button" type="button" onClick={() => {handleResetUserPassword(currentManipulatingValueState.id, newPassword)}}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ResetPassword);