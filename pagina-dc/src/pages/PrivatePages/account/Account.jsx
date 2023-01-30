import React from "react";
import DataUser from "./component/dataUser/DataUser";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import HeaderBlue from "./component/header/HeaderBlue";
import HeaderImg from "./component/header/HeaderImg";
export default function Account() {
  return (
    <div>
      <HeaderBlue />
      <Header />
      <HeaderImg />
      <DataUser/>
      <Footer/>
    </div>
  );
}
