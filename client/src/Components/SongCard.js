

function SongCard({pieces}){
    return(
        <div>
            <h1>{pieces.composer.complete_name}</h1>
            <h1>{pieces.work.title}</h1>
            <h2>{pieces.composer.epoch +" - "+ pieces.work.genre}</h2>
            <img src={pieces.composer.portrait} alt={pieces.composer.complete_name + "image"} />
        </div>
    )
}

export default SongCard;