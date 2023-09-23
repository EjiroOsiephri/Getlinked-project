import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Faqs from "./components/Faqs";
import LoadingSpinner from "./components/LoadingSpinner";

const Register = React.lazy(() => import("./pages/Register"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="spinner">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Register />} path="/Register" />
          <Route path="/faqs" Component={Faqs} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
