

function Home({user}){
    return(
        <div>
            <h1>{user?.name !== undefined ? "Welcome "+user.name : "Welcome to Concertist"}</h1>
            <img width="560" height="315" src="https://vt-today.com/wp-content/uploads/2019/03/877_Kawai-EX-Concert-Grand-Piano.jpg" alt="concert piano" id="piano-img"/>
            <p>Search composers or works using the open opus API, then view or post performances and leave comments.</p>
        </div>
    )
}

export default Home;