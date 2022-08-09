import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'; 
import {GiMusicalNotes} from 'react-icons/gi';

function NavBar(){
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1><GiMusicalNotes/>Concertist</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/search" activeStyle>
                        Search
                    </NavLink>
                    <NavLink to="/my_posts" activeStyle>
                        My Posts
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/login">
                        <NavBtnLink to="/login">Sign in</NavBtnLink>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar;