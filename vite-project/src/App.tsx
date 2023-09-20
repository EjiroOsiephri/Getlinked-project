import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/faqs" Component={Faqs} />
      </Routes>
    </>
  );
}

export default App;
