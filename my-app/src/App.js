
import AboutMe from './Pages/About/AboutMe';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skill/Skill';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services';
import Header from './component/Header';

function App() {
  
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
    
      <Route path="/home" element={<Home />}/>
      <Route path="/services" element={<Services />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/aboutme' element={<AboutMe />} />
     
      
    </Routes>
  </BrowserRouter>
          

   
  );
}

export default App;
