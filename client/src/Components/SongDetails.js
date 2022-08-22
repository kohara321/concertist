import SongCard from "./SongCard"

function SongDetails({songs}){

    const songInfo = songs.map(song => {
        return(
            <SongCard
                key={song.id}
                pieces={song}
            />
        )
    })

    // console.log("songs:", songs)

    return(
        <div>
         {songInfo}
        </div>
    )
}

export default SongDetails