import React, { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Adjusted conditionals in route elements */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />

        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
