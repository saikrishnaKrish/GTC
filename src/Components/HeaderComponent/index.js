import React from 'react'
import './HeaderComponentStyle.css'
import { Link } from 'react-router-dom';
import { Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';


import { withGlobalContext } from '../../Context/GlobalContextProvider';

function HeaderComponent() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="brand-name">
                    <Link to="/">Greek Trust</Link>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem >
                        <span >Front End coding Challenge!!</span>
                        <span>|</span>
                        <span>
                            <Link to={{ pathname: "https://www.geektrust.in/coding-problem/frontend/space" }} target="_blank" >
                                GreekTrustHome
                            </Link>
                        </span>
                    </NavItem>
                </Nav>
            </Navbar>


        </div>
    )
}

export default withGlobalContext(HeaderComponent);