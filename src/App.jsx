// import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayouts from "./components/RootLayouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Journal from "./pages/Journal";
import Error from "./pages/Error";
import MyAccount from "./pages/MyAccount";
import LogOut from "./pages/LogOut";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayouts/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/journal' element={<Journal/>}/>
      <Route path='/my-account' element={<MyAccount/>}/>
      <Route path='/log-out' element={<LogOut/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
    </> 
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

