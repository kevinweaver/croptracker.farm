import GasPrice from './GasPrice.js'

export default function HomeHero() {
  return (
    <div className="relative">
      <div style={{marginTop: "10em"}}></div>
      <h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          🚜
      </h1>
      <GasPrice/>
    </div>
  )
}