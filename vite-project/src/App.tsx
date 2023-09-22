import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faqs from "./components/Faqs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route path="/faqs" Component={Faqs} />
      </Routes>
    </>
  );
}

export default App;
