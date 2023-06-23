import React from "react";
// TODO: answer here
import { Routes, Route } from "react-router-dom";
import AddStudent from "./Routes/AddStudent";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";


const App = () => {
    return (
        // TODO: replace this
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="add" element={<AddStudent/>} />
            <Route path="student" element={<Student/>} />
            <Route path="student/:id" element={<EditStudent/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
};

export default App;
