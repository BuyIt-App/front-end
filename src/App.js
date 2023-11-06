import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from "./pages/Home";
import MainLayout  from "./pages/MainLayout";
import Login  from "./pages/Login";
import Register  from "./pages/Register";
import Topbar from './Components/Home/Topbar';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
  <Route path="/" element={<MainLayout />}>
    <Route path="Home" element={<Home />} />
    <Route path="Cart" element={<Cart />} />
  </Route>
  <Route path="front-end/Auth">
    <Route path="Login" element={<Login />} />
    <Route path="Register" element={<Register />} />
  </Route>
  <Route path="Delivery/Auth">
    <Route path="Login" element={<Login />} />
    <Route path="Register" element={<Register />} />
  </Route>
  <Route path="Delivery" element={<MainLayout />}>
    <Route path="Home" element={<Home />} />
  </Route>
  <Route path="*" element={<h1>Not Found</h1>} />
</Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
