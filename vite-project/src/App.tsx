import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faqs from "./components/Faqs";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

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
