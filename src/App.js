  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignupForm from '../src/pages/SignupForm';
  import WelcomePage from '../src/pages/WelcomePage';
  import DribbblePage from '../src/pages/DribbblePage';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/welcome/dribbble" element={<DribbblePage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;