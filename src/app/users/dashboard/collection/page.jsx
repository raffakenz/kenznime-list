import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Dashboard/header";

const Page = () => {
  return (
    <div className="m-5">
      <Header title={"Koleksi saya"}></Header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="border-2 border-color-biru relative">
          <Image
            src=""
            alt="Poster anime"
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute w-full flex items-center justify-center bottom-0 text-white bg-color-biru">
            <h3 className="text-center text-xl p-2">Judul anime</h3>
          </div>
        </Link>


        <Link href="/" className="border-2 border-color-biru relative">
          <Image
            src=""
            alt="Poster anime"
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute w-full flex items-center justify-center bottom-0 text-white bg-color-biru">
            <h3 className="text-center text-xl p-2">Judul anime</h3>
          </div>
        </Link>


        <Link href="/" className="border-2 border-color-biru relative">
          <Image
            src=""
            alt="Poster anime"
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute w-full flex items-center justify-center bottom-0 text-white bg-color-biru">
            <h3 className="text-center text-xl p-2">Judul anime</h3>
          </div>
        </Link>
        

        <Link href="/" className="border-2 border-color-biru relative">
          <Image
            src=""
            alt="Poster anime"
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute w-full flex items-center justify-center bottom-0 text-white bg-color-biru">
            <h3 className="text-center text-xl p-2">Judul anime</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
