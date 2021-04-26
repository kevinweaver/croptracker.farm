import GasPrice from "./GasPrice.js";

export default function HomeHero() {
  return (
    <div className="relative">
      <div className="mt-10" style={{ marginTop: "10em" }}></div>
      <h1 className="text-center text-6xl sm:text-7xl md:text-9xl lg:text-10xl">
        🚜
      </h1>
      <GasPrice />
    </div>
  );
}
