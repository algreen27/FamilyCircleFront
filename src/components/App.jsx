import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./RegisterUser/RegisterUser";
import Header from "./Header/Header";

const App = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const register = async (user) => {
    await axios
      .post(`http://localhost:5020/api/users/register`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
      });
  };

  // const login = async (user) => {
  //     await axios
  //       .post(`http://localhost:50200/api/users/login`, user)
  //       .then((res) => {
  //         localStorage.setItem("token", res.data);
  //         const jwt = localStorage.getItem("token");
  //         setUser(jwtDecode(jwt));
  //         getPosts(user);
  //       if(!posts) setPosts(null)
  //       });
  //   };

  return (
    <div className="App">
      <Header />

      {/* <BrowserRouter>
        <Routes>
          {!user && (
            <Route
              path="/register"
              element={
                <RegisterUser login={register} user={user} setUser={setUser} />
              }
            />
          )}
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
