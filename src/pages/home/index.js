import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WelcomepageNotif from "../../components/WelcomepageNotif";
import HomepageScreen from "./HomepageScreen";
import ProfilePage from "../profile";
import CartScreen from "../cart";

function Homepage(props) {
  return (
    <Box className="homepage-box">
      <Header />
      <Routes>
        <Route path="/" element={<HomepageScreen />} />
        <Route
          path="/profile"
          element={<ProfilePage data={props?.userInfo} />}
        />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
      <WelcomepageNotif data={props?.userInfo} />
      <Footer />
    </Box>
  );
}

export default Homepage;
