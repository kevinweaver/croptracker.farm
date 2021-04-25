import Image from 'next/image';

export default function HomeHero() {
  return (
    <>
      <Image
        src="/images/kevin-mask.png" // Route of the image file
        height={310} // Desired size with correct aspect ratio
        width={270} // Desired size with correct aspect ratio
        alt="Kevin W"
        style="m-4"
        className="kevin"
      />

              <h1>
                <span className="">Hi. I like to</span>
                  <span>{' '}make{' '}</span>
                  <span className="">things</span>
                  <span>.</span>
              </h1>
    </>
  )
}