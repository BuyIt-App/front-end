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
        <Route path="/" Component={MainLayout}>
          <Route path="Home" Component={Home} />
          <Route path="Cart" Component={Cart} />
        </Route>
        <Route path="/Auth/">
          <Route path="Login" Component={Login} />
          <Route path="Register" Component={Register} />       
        </Route>
        <Route path="/Delivery/Auth/">
          <Route path="Login" Component={Login} />
          <Route path="Register" Component={Register} />       
        </Route>
        <Route path="/Delivery/" Component={MainLayout}>
          <Route path="Home" Component={Home} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
