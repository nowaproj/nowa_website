import { Footer, Navbar } from "@/components";
import { MainSeo } from "@/seo";
import { Imprint } from "@/views";
import React from "react";

export default function IP() {
  return (
    <>
      <MainSeo />
      <Navbar />
      <Imprint />
      <Footer />
    </>
  );
}
