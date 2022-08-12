

function Home({user}){
    return(
        <div>
            <h1>{user ? "Welcome "+user.name : "Welcome to Concertist"}</h1>
            <img src="https://vt-today.com/wp-content/uploads/2019/03/877_Kawai-EX-Concert-Grand-Piano.jpg" alt="concert piano" id="piano-img"/>
            <p>Search composers or works using the open opus API, then view or post performances. Don't forget to leave a comment.</p>
        </div>
    )
}

export default Home;