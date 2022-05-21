import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import "./utils/interceptors";

import "./App.scss";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
