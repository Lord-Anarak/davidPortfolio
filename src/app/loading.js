"use client";
import { usePathname } from "next/navigation";

export default function Loading() {
  const path = usePathname();

  const title =
    path === "/" ? "Home" : `${path.slice(1)[0].toUpperCase()}${path.slice(2)}`;

  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <h2 className="text-white text-[5vw]">{title}</h2>
    </div>
  );
}
