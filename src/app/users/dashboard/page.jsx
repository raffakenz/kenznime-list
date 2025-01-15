import { authUserSession } from "@/library/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-white p-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-2 font-semibold">Welcome, {user.name}</h1>
      <Image
        className="rounded-xl w-64 h-auto"
        src={user.image}
        alt="your profile"
        width={200}
        height={200}
      />
    <div className="flex flex-wrap">
        <Link
        href="dashboard/collection" className="bg-color-biru text-white mt-6 mx-3 p-2 text-lg rounded-lg hover:bg-color-darkbiru transition-all">
        My Collection
        </Link>

        <Link
        href="dashboard/comment" className="bg-color-biru text-white mt-6 mx-3 p-2 text-lg rounded-lg hover:bg-color-darkbiru transition-all">
        My Comment
        </Link>
    </div>
    </div>
  );
};

export default Page;
