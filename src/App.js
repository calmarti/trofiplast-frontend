import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Detail from "./components/Detail/Detail";
import Contribute from "./components/Contribute/Contribute";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

//what does this code do?
//TODO al ser el menú position fixed ha dejado de ser responsive: fix it

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Detail />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/about" element={<About />} />
        {/*   <Route path="/donate" element={<Donate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
