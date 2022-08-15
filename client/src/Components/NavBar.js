import {Nav, NavLink, Bars, NavMenu, NavBtnLink} from './NavBarElements'; 
import {GiMusicalNotes} from 'react-icons/gi';

function NavBar({loggedIn, handleSignOut}){
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
                    <NavLink to="/login">
                        {loggedIn === false ? 
                            <NavBtnLink to="/login">Sign in</NavBtnLink> 
                            : 
                            <NavBtnLink to="/login" onClick={handleSignOut}>Sign out</NavBtnLink>
                        }
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar;