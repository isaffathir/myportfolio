import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-row w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] rounded-xl bg-[#cdd6f4]">
      <div className="flex justify-center items-center m-2 rounded-xl h-[80vh] bg-[#1e1e2e]">
        Helo
      </div>
      <div className="flex justify-center items-center m-2 rounded-xl h-[80vh] bg-[#1e1e2e]">
        Helo
      </div>
      <div className="flex justify-center items-center m-2 rounded-xl h-[80vh] bg-[#1e1e2e]">
        Helo
      </div>
    </div>
  );
}
