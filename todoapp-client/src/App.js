import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/details/:taskId" element={<Details />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
