import { Footer, Navbar } from "@/components";
import { MainSeo } from "@/seo";
import { HomePage } from "@/views";
import React from "react";

export default function HP() {
  return (
    <>
      <MainSeo />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
