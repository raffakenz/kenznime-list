export const getAnimeRespon = async ( resource, query) => {
    const respon = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await respon.json()
    return anime
}

export const getNestedAnimeRespon = async(resource, objectProperty) => {
    const respon = await getAnimeRespon(resource)
    return respon.data?.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}