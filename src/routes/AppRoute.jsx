import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Houses from "../components/Home/Houses"; 
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";

import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import DashboardPage from "../pages/DashboardPage"; 
import Contact from "../pages/Contact";


import MyBookings from "../components/Dashboard/MyBookings"; 
import MyHouses from "../components/Dashboard/MyHouses";


import PaymentSuccess from "../pages/PaymentSuccess";

const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/payment/success" element={<PaymentSuccess/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
      </Route>

      {/* Private Dashboard Routes */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* Default /dashboard path */}
        <Route index element={<DashboardPage />} />
        
        {/* /dashboard/profile */}
        <Route path="profile" element={<Profile />} />

        {/* /dashboard/my-bookings */}
        <Route path="my-bookings" element={<MyBookings />} />

        {/* /dashboard/my-houses */}
        <Route path="my-houses" element={<MyHouses />} />

      
      </Route>
    </Routes>
  );
};

export default AppRoute;