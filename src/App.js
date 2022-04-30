import { Route, Routes } from 'react-router-dom';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import Blogs from './Components/Blogs/Blogs';
import ErrorRoute from './Components/ErrorRoute/ErrorRoute';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItem/MyItems';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import RequireRoute from './Components/RequireRoute/RequireRoute';

function App() {
  return (
    <div className='bg-stone-50 h-full'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/manageInventory'
          element={
            <RequireRoute>
              <ManageInventory />
            </RequireRoute>
          }
        ></Route>
        <Route
          path='/inventory/:inventoryId'
          element={
            <RequireRoute>
              <ProductDetails />
            </RequireRoute>
          }
        ></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route
          path='/addnewitem'
          element={
            <RequireRoute>
              <AddNewItem />
            </RequireRoute>
          }
        ></Route>
        <Route
          path='/myitem'
          element={
            <RequireRoute>
              <MyItems />
            </RequireRoute>
          }
        ></Route>
        <Route path='*' element={<ErrorRoute />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
