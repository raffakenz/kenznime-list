import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"
import { getAnimeRespon } from "@/library/Library"

const Page = async({params}) => {
    const {keyword} = params
  const decodeKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeRespon("anime", `q=${decodeKeyword}`)
  
  return (
    <>
      <section>
        <Header title = {`Hasil pencarian dari ${decodeKeyword}`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page