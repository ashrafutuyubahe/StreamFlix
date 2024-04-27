import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header";
import FetchMovie from "./components/movieFetch";
import Home from "./pages/home";
import TopRated from "./pages/topRated";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home/>
      
        <Routes>
          <Route path="/home" element={<FetchMovie/> } />
          <Route path="/top rated"  element={<TopRated/>}/>
          <Route path="/popular"  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
