import AnimeList from "./components/AnimeList"
import Header from "./components/AnimeList/Header"
import { getAnimeRespon, getNestedAnimeRespon, reproduce } from "../library/Library"

const Page = async() => {
  const topAnime = await getAnimeRespon("top/anime", "limit=10")
  let rekomendasiAnime = await getNestedAnimeRespon("recommendations/anime", "entry")
  rekomendasiAnime = reproduce(rekomendasiAnime, 10)

  return (
    <> 
      <section>
        <Header title="Paling Populer🔥" linkTitle="Lihat semua anime" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>

      <section>
        <Header title="Rekomendasi✨"/>
        <AnimeList api={rekomendasiAnime}/>
      </section>

        {/* footer */}
      <section>
        <div className="flex justify-center items-center">
          <footer className="text-white text-xl p-10 font-bold">
              <a href="https://www.instagram.com/kenz.graph/" className="hover:underline hover:text-color-biru">Created by Kenz, 2024</a>
            </footer>
        </div>
      </section>
    </>
  )
}

export default Page