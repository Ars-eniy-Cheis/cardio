import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { withRouter } from '../../utils/withRouter';

import "../../styles/ResetPassword.css";


const ResetPassword = (props) => {
  const [newPassword, setNewPassword] = useState("");

  const handleChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New password submitted:", newPassword);
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
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="newPassword">Новый пароль:</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
        />
        <div className="reset-password-buttons">
          <button className="standard-button" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(ResetPassword);