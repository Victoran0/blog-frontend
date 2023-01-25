import React from "react";
import Posts from "./Posts";
import Post from "./Post";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/post/:id' element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
