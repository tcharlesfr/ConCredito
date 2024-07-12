import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import { createContext, useContext } from "react";

import Login from "./pages/Login";
import Create from "./pages/Create";
import Home from "./pages/Home";
import List from "./pages/List";
import Nav from "./pages/Nav";
import Update from "./pages/Update";

import { AuthProvider } from "./Context/AuthProvider";
import Delete from "./pages/Delete";

// const Context = createContext();

function App() {
  return (
    <div className="App">
      <header className="contain">
        <Nav></Nav>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<Create />} />
              <Route path="/update" element={<Update />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
