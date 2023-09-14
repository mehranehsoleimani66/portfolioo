
import AboutMe from './Pages/About/AboutMe';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services';
import Header from './component/Header';
import Skills from './Pages/Skill/Skills';

function App() {
  
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
    
      <Route index element={<Home />}/>
      <Route path="/services" element={<Services />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/aboutme' element={<AboutMe />} />
     
      
    </Routes>
  </BrowserRouter>
          

   
  );
}

export default App;
