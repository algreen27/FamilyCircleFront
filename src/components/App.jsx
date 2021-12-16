import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import RegisterUser from './RegisterUser/RegisterUser';


import React from 'react'

const App = () => {

    const register = async (user) => {
        await axios
          .post(`http://localhost:5020/api/users/register`, user)
          .then((res) => {
            localStorage.setItem("token", res.data);
            const jwt = localStorage.getItem("token");
            setUser(jwtDecode(jwt));
          });
      };


    const login = async (user) => {
        await axios
          .post(`http://localhost:50200/api/users/login`, user)
          .then((res) => {
            localStorage.setItem("token", res.data);
            const jwt = localStorage.getItem("token");
            setUser(jwtDecode(jwt));
            getPosts(user);
          if(!posts) setPosts(null)
          });
      };

    return (
        <BrowserRouter>
        <Routes>
          {!user && (
            <Route
              path="/"
              element={
                <>
                  <GatePage login={login} user={user} setUser={setUser} />
                </>
              }
            />
          )}
          {!user && (
            <Route
              path="/register"
              element={
                <RegisterUser
                  login={register}
                  user={user}
                  setUser={setUser}
                />
              }
            />
          )}
          {user && (
            <Route
              path="/"
              element={
                <Timeline
                  user={user}
                  setUser={setUser}
                  getPosts={getPosts}
                  posts={posts}
                  like={like}
                  newPost={newPost}
                  jwt={jwt}
                />
              }
            />
          )}
        </Routes>
    </BrowserRouter>
  );
    )
}

export default App
