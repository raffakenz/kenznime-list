import VideoPlayer from "@/app/components/Utilities/VideoPlayer"
import { getAnimeRespon } from "@/library/Library"
import Image from "next/image"
import { authUserSession } from "@/library/auth"

// const Page = async({ params: { id }} ) => {
//     const anime = await getAnimeRespon(`anime/${id}`)
//     const user = await authUserSession()
//     console.log(user)
const Page = async ({ params }) => {
    const { id } = await params;
    const anime = await getAnimeRespon(`anime/${id}`);
    const user = await authUserSession();

    return (
        <>
            <div className="p-5">
                <h1 className="text-white text-2xl">{anime.data.title} - {anime.data.year}</h1>
            </div>

            <div className="px-5 flex gap-2 text-white overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Peringkat</h2>
                    <p>#{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Rating</h2>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Status</h2>
                    <p>{anime.data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Durasi</h2>
                    <p>{anime.data.duration}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Episodes</h2>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-32 h-20 flex flex-col justify-center items-center rounded border-2 p-2 border-color-biru">
                    <h2>Type</h2>
                    <p>{anime.data.type}</p>
                </div>
            </div>

            <div className="p-5 flex gap-2 sm:flex-nowrap flex-wrap">
                <Image 
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={350}
                height={350}
                className="w-full rounded object-cover"
                />
                <p className="text-justify text-white text-xl">{anime.data.synopsis}</p>
            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page