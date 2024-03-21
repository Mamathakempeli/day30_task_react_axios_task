import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ListPages from "./components/ListPage";
import { UserContextProvider } from "./components/context/usercontex";

function App() {
  return (
    <div className="App bg-secondary">
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;