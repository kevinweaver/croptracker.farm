import Head from 'next/head'
import HomeHero from '../components/HomeHero.js'
import Nav from '../components/Nav.js'


export default function Home() {
  return (
    <div className="bg-cover bg-center" style={{backgroundImage: 'url(images/farm.jpg)'}}>
        <Head>
          <title>Tractor Supply Depot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav/>
        <HomeHero/>
      </div>
  )
}
