
function Search({searchSubmit, handleChange}){

    return(
        <div id="search-page" onSubmit={e => searchSubmit(e)}>
            <form id="search-form">
                <div id="search-bar">
                    <input id="search" type="text" placeholder="Search piece or composer" onChange={e => handleChange(e.target.value)} />
                </div>
                <div id="search-btns">
                    <button type="submit" id="search-btn">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;