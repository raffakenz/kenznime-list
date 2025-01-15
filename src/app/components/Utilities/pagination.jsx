const Pagination = ({page, setPage}) => {

    const scrollAtas = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const pindahNextPage = () => {
        setPage((prevPage) => prevPage + 1)
        scrollAtas()
    }

    const pindahPrevPage = () => {
        if(page > 1) {
            setPage((prevPage) => prevPage - 1)
        }
        scrollAtas()
    }

    return (
        <div className="flex justify-center items-center p-10 gap-8 text-white text-2xl"> 
            <button onClick={pindahPrevPage} className="transition-all hover:text-color-biru hover:scale-110">Prev page</button>
            <p>{page} dari 1037</p>
            <button onClick={pindahNextPage} className="transition-all hover:text-color-biru hover:scale-110">Next page</button>
        </div>
    )
}

export default Pagination