import React from "react";
import HeaderBlue from "../account/component/header/HeaderBlue";
import Header from "../account/component/header/Header";
import Banner from "./components/Banner";
import ProfileData from "./components/ProfileData";
import Footer from '../account/component/footer/Footer'
export default function Profile() {
  return (
    <div>
      <HeaderBlue />
      <Header />
      <Banner />
      <ProfileData />
      <Footer/>
    </div>
  );
}
