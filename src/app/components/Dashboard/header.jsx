"use client"
import { ArrowUDownLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";


const Header = ({title}) => {
    const router = useRouter()
    const backButton = (event) => {
        event.preventDefault()
        router.back()
    }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-white text-3xl font-semibold mb-4">{title}</h1>
      <button className="text-white text-xl mb-4" onClick={backButton}>
        <ArrowUDownLeft size={28} />
      </button>
    </div>
  );
};

export default Header
