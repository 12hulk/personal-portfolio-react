import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import NoPage from './pages/NoPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Projects';

function App() {


  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />

          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Project />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
