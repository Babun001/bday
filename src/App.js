import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Elements/Home";
import BirthdayPage from './Elements/bday';

function App() {
  return (
    <>
    <Router>
        <div className='bg-dark'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/birthday" element={<BirthdayPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
