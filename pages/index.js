import Head from "next/head";
import HomeHero from "../components/HomeHero.js";
import Dashboard from "../components/Dashboard.js";

import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(images/farm.jpg)" }}
    >
      <Head>
        <title>CropTracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <HomeHero />
      <Dashboard />
      <Footer />
    </div>
  );
}
