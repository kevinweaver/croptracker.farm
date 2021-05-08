import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="p-3 flex justify-center">
        <a href="https://zapper.fi/" alt="zapper.fi">
          <Image
            src="/images/zapper.svg"
            lt="Powered by Zapper"
            width={175}
            height={37}
          />
        </a>
      </div>
    </>
  );
}
