import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Resources from './components/Pages/Resources';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Articles from './components/Resources/Articles';
import Tutorials from './components/Resources/Tutorials';
import CaseStudies from './components/Resources/CaseStudies';
import Contact1 from './components/Contacts/Contact1';
import Contact2 from './components/Contacts/Contact2';
import Protect from './components/Protect';
import NotFound from './components/Pages/NotFound';
import OutletComponent from './components/OutletComponent';
import UseState from './components/Pages/UseState';
import SuccessFull from './components/Pages/SuccessFull';
import SignIn from './components/ReusableComponent/SignIn';
import SignUp from './components/ReusableComponent/SignUp';

// Model
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<Protect />} >
        <Route element={<OutletComponent />}>
          <Route path='/home' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/articles' element={<Articles />} />
          <Route path='/resources/tutorials' element={<Tutorials />} />
          <Route path='/resources/case-studies' element={<CaseStudies />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/contacts/contact1/:id/:name" element={<Contact1 />} />
          <Route path='/contacts/contact2/:id/:name' element={<Contact2 />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/usestate' element={<UseState />} />
          <Route path='/Successfull' element={<SuccessFull/>} />




          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
