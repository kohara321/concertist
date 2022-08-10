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

    console.log("songs:", songs)
    // console.log("pieces:", songs.map(song => song.work))
    // console.log("composers:", songs.map(song => song.composer))

    return(
        <div>
         {songInfo}
        </div>
    )
}

export default SongDetails