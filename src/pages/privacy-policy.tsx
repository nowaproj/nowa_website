import { Footer, Navbar } from "@/components";
import { MainSeo } from "@/seo";
import { PrivacyPolicy } from "@/views";
import React from "react";

export default function PP() {
  return (
    <>
      <MainSeo />
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
