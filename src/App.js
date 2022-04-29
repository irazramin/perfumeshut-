import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";
import Blogs from "./Components/Blogs/Blogs";
import ErrorRoute from "./Components/ErrorRoute/ErrorRoute";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div className='bg-stone-50 h-full'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='*' element={<ErrorRoute />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
