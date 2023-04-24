import React from "react";
import { Header } from "@/components/Header";

import HomePage from "./Home/homePage";
import Skills from "./Skills/skills";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />

      <Skills />
    </>
  );
}
