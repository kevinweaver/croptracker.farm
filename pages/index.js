import Head from 'next/head'
import HomeHero from '../components/HomeHero.js'

export default function Home() {
  return (
    <div className="bg-cover bg-center" style={{backgroundImage: 'url(images/background.png)'}}>
        <Head>
          <title>Hi.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomeHero/>
    </div>
  )
}
