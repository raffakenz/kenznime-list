import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 px-5">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer shadow-2xl hover:scale-105 transition-all" key={index}> 
                        <Image className="text-white"
                        src={anime.images.webp.image_url}
                        alt="image anime"
                        width={350}
                        height={350}
                        />
                            <h2 className="font-bold p-2 text-white hover:text-color-biru transition-all">{anime.title}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList