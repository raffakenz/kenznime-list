"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const xButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "350",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0">
                <button onClick={xButton} className="text-white float-right px-4">
                    <XCircle className="hover:text-color-biru transition-all" size={32} />
                </button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    className="px-4 py-4"
            />
        </div>
        )
    }

    return isOpen ? <Player/> : <button onClick={xButton} 
    className="fixed flex bottom-5 right-5 bg-color-biru text-white p-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-color-biru transition-all">Lihat trailer</button>
}

export default VideoPlayer