import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegisterUser from "./RegisterUser/RegisterUser";
import Header from "./Header/Header";
// import { AddFamilyMember } from "./AddFamilyMember/AddFamilyMember";
import FamilyTree from "./FamilyTree/FamilyTree";
import { ChakraProvider } from "@chakra-ui/provider";

const App = () => {
  const [user, setUser] = useState(null);

  const register = async (user) => {
    await axios.post(`http://localhost:5020/api/users/`).then((res) => {
      localStorage.setItem("token", res.data);
      const jwt = localStorage.getItem("token");
      setUser(jwtDecode(jwt));
      console.log(res);
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
      {/* <RegisterUser login={register} user={user} setUser={setUser}  /> */}
      {/* <AddFamilyMember /> */}
      <ChakraProvider>
        <FamilyTree />
      </ChakraProvider>
    </div>
  );
};

export default App;
