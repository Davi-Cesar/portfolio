import React, { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header";

import HomePage from "./Home/homePage";
import Skills from "./Skills/skills";
import Works from "./Works/works";
import About from "./About/about";
import Loading from "./loading";
import { Layout } from "@/components/Layout";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Layout>
            <Header />
            <HomePage />
            <Skills />
            <Works />
            <About />
          </Layout>
        </>
      )}
    </>
  );
}
