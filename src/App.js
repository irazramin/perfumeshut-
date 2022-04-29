import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import ErrorRoute from "./Components/ErrorRoute/ErrorRoute";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventoty from "./Components/Inventory/Inventoty";

function App() {
  return (
   <div className="bg-stone-50 h-full">
     <Header ></Header>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/inventory" element={<Inventoty/>}></Route>
       <Route path="/blogs" element={<Blogs/>}></Route>
       <Route path="*" element={<ErrorRoute/>}></Route>
     </Routes>
     <Footer />
   </div>
  );
}

export default App;
