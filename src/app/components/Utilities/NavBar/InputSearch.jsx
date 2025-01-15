"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()

    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value.trim()
        if(!keyword) {
            alert('Masukan kata kunci untuk mencari!')
            return
        }
        router.push(`/search/${keyword}`)
    }

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event)
        } 
    }

    return (
        <div className="relative">
            <input
            placeholder="Cari anime"
            className="p-3 h-9 rounded-lg"
            ref={searchRef}
            onKeyDown={handleEnterKey}>
            </input>
    
            <button className="absolute top-1 end-1.5" onClick={handleSearch}> 
                <MagnifyingGlass size={26} />
            </button>
        </div>
    )
}

export default InputSearch