import { React, useEffect, useState, useRef, useMemo } from "react"

import { withRouter } from '../../utils/withRouter';

import "../../styles/addUserForm.css";
import "../../styles/components/standardComponents/buttons/StandardButton.css";

const AddUser = (props) => {
  const [userData, setUserData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    login: "",
    password: "",
    role: "user",
  });

  const back = () => {
    props.navigate(-1)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User data submitted:", userData);
  };

  return (
    <>
    <button className="standard-button go-back-button" onClick={back}>
        Назад
    </button>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="lastName">Фамилия:</label>
      <input
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="firstName">Имя:</label>
      <input
        type="text"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="middleName">Отчество:</label>
      <input
        type="text"
        name="middleName"
        value={userData.middleName}
        onChange={handleChange}
      />
      <label htmlFor="login">Логин:</label>
      <input
        type="text"
        name="login"
        value={userData.login}
        onChange={handleChange}
      />
      <label htmlFor="password">Пароль:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <label htmlFor="role">Роль:</label>
      <select name="role" value={userData.role} onChange={handleChange}>
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>
      <button className="standard-button" type="submit">
        Добавить пользователя
      </button>
    </form>
    </>
  );
};

export default withRouter(AddUser);