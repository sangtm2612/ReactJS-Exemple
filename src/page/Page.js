import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";

export default function Page() {
  return (
    <>
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}
