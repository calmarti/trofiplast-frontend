import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/database" element={<Database />} /> */}
        {/* <Route path="/contributions" element={<Contributions />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      {/*   <Route path="/donate" element={<Donate />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
