"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/pagination";
import AnimeList from "../components/AnimeList";
import { getAnimeRespon } from "../../library/Library";

const Populer = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeRespon("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Semua Anime page ${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Populer;
