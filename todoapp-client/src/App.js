import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Home></Home>
        <Router>
          <Routes></Routes>
        </Router>
        {/* <Router>
          <Routes>
            <Route path="/">
            </Route>
            <Route path="/details/id">
              <Details></Details>
            </Route>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
