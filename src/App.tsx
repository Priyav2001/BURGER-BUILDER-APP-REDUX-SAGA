import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import Form from "./pages/Forms/Forms";
import Navbar from "./pages/Navbar/Navbar";
  function App() 
   {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Navbar/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/Forms" element={<Form/>}></Route>
            </Routes>
          </Router>
        </Provider>
      </>
    );
  }
// }

export default App;

