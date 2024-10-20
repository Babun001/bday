import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Elements/Home";
import BirthdayPage from './Elements/bday';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle'

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
