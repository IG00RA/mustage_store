import Image from "next/image";
import logo from "@/img/logo.svg";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20 z-[9999]">
      <Image
        src={logo}
        alt="Flexi logo"
        className="w-[200px] h-auto animate-pulse"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
}
