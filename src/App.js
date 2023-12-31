// import "./App.css";
// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter,Routes,Route} from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//       <div>
//       <Navbar/>
//           <Routes>
//             <Route exact path="/"element={<News key="general" pageSize={12} country="in" category="general" />}/>
//             <Route exact path="/sports" element={<News key="sports" pageSize={12} country="in" category="sports"/>}/>
//             <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} country="in" category="entertainment" />}/>
//             <Route exact path="/science" element={<News key="science" pageSize={12} country="in" category="science" />}/>
//             <Route exact path="/health" element={<News key="health" pageSize={12} country="in" category="health" />}/>
//             <Route exact path="/technology" element={<News key="technology" pageSize={12} country="in" category="technology" />}/>
//             <Route exact path="/business" element={<News key="business" pageSize={12} country="in" category="business" />}/>
//           </Routes>   
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="general" pageSize={12} country="in" category="general" />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News key="sports" pageSize={12} country="in" category="sports" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News key="science" pageSize={12} country="in" category="science" />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News key="health" pageSize={12} country="in" category="health" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News key="business" pageSize={12} country="in" category="business" />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

