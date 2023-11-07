import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Customer/Home";
import MainLayout from "./pages/Customer/MainLayout";
import Login from "./pages/Customer/Login";
import Register from "./pages/Customer/Register";
import Topbar from "./Components/Home/Topbar";
import Cart from "./pages/Customer/Cart";
import ProtectedRoute from "./ProtectedRoute";
import TopLayout from "./pages/TopLayout";
import DeliveryHome from "./pages/Delivery person/DeliveryHome";
import AdminHome from "./pages/Admin/AdminHome";
import StoreKeeperHome from "./pages/StoreKeeper/StoreKeeperHome";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  // const userRole = "ADMIN";
  const userRole = localStorage.getItem("role");
  // const userRole = "STORE KEEPER";
  // const userRole = "DELIVERY PERSON";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* cutomer routes */}

         { userRole === "CUSTOMER" ? (

          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<Home is={isAuthenticated} userRole={userRole} />}
            />
            <Route path="Cart" element={<Cart />} />
          </Route>

          ) : 
          <Route path="/403" element={<h1>Not Authorized</h1>} /> 
          }

          <Route path="/Auth/customer/">
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>



          {/* admin routes */}
          <Route path="/Auth/Admin/">
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>


           {/* delivery routes */}

          <Route path="/Auth/Delivery/">
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>

          {/* store keeper routes */}

          <Route path="/Auth/Store keeper/">
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>

          {/* common routes */}

          <Route path="/Route/" element={<TopLayout userRole={userRole} />}>
            <Route path="Delivery" element={<DeliveryHome />} />
            <Route path="Admin" element={<AdminHome />} />
            <Route path="StoreKeeper" element={<StoreKeeperHome />} />

          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
