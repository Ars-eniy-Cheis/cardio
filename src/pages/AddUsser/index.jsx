import { React, useEffect, useState, useRef, useMemo } from "react"

import { withRouter } from '../../utils/withRouter';

import {handleAddUser} from '../../model/app/Handlers'

import "../../styles/addUserForm.css";
import "../../styles/components/standardComponents/buttons/StandardButton.css";

const AddUser = (props) => {
  const [userData, setUserData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    username: "",
    password: "",
    role: "user",
  });

  const [errors, setErrors] = useState({
    lastName: "",
    firstName: "",
    username: "",
    password: ""
  });

  const back = () => {
    props.navigate(-1)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    let error = "";
    if (value === "") {
      error = "Обязательное поле";
    } else if (name === "password" && value.length < 6) {
      error = "Пароль должен быть не менее 6 символов";
    }

    setErrors({
      ...errors,
      [name]: error
    });

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    let newErrors = {
      lastName: userData.lastName === "" ? "Обязательное поле" : "",
      firstName: userData.firstName === "" ? "Обязательное поле" : "",
      username: userData.username === "" ? "Обязательное поле" : "",
      password: userData.password === "" ? "Обязательное поле" : "",
    };

    if (newErrors.lastName || newErrors.firstName || newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    handleAddUser(userData);
  };

  return (
    <>
    <button className="standard-button go-back-button" onClick={back}>
        Назад
    </button>
    <div className="form" >
      <label htmlFor="lastName">Фамилия:</label>
      <input
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
        required
      />
      {errors.lastName && <div className="error">* {errors.lastName}</div>}
      <label htmlFor="firstName">Имя:</label>
      <input
        type="text"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
        required
      />
      {errors.firstName && <div className="error">* {errors.firstName}</div>}
      <label htmlFor="middleName">Отчество:</label>
      <input
        type="text"
        name="middleName"
        value={userData.middleName}
        onChange={handleChange}
      />
      <label htmlFor="username">Логин:</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        required
      />
      {errors.username && <div className="error">* {errors.username}</div>}
      <label htmlFor="password">Пароль:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        minLength="6"
        required
      />
      {errors.password && <div className="error">* {errors.password}</div>}
      <label htmlFor="role">Роль:</label>
      <select name="role" value={userData.role} onChange={handleChange}>
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>
      <button onClick={() => {handleAddUser(userData, handleSubmit)}} className="standard-button" type="submit">
        Добавить пользователя
      </button>
    </div>
    </>
  );
};

export default withRouter(AddUser);


