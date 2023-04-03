import { Footer, Navbar } from "@/components";
import { MainSeo } from "@/seo";
import { Imprint } from "@/views";
import { AboutPage } from "@/views";
import React from "react";

export default function AP() {
  return (
    <>
      <MainSeo />
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
