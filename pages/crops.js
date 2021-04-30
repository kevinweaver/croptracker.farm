import Head from "next/head";
import Nav from "../components/Nav.js";
import Dashboard from "../components/Dashboard.js";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(images/farm.jpg)" }}
    >
      <Head>
        <title>Crops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Dashboard />
    </div>
  );
}
