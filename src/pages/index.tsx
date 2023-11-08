import React from "react";
import { Header } from "@/components/Header";

import HomePage from "./Home/homePage";
import Skills from "./Skills/skills";
import Works from "./Works/works";
import About from "./About/about";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Skills />
      <Works />
      <About />
    </>
  );
}
