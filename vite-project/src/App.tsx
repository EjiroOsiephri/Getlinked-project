import { Route, Routes } from "react-router-dom";
import React from "react";
import Faqs from "./components/Faqs";

const Register = React.lazy(() => import("./pages/Register"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Register />} path="/Register" />
        <Route path="/faqs" Component={Faqs} />
      </Routes>
    </>
  );
}

export default App;
