import React from "react";
//importing Styles
import "./HeaderComponentStyle.css";

import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

//importing GlobalContext
import { withGlobalContext } from "../../Context/GlobalContextProvider";

/**
 *
 * @renders the Navbar on the Screen
 */
function HeaderComponent() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/" className="brand-name">
          Greek Trust
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <span>Front End coding Challenge!!</span>
            <span>|</span>
            <span>
              <Link
                to={{
                  pathname:
                    "https://www.geektrust.in/coding-problem/frontend/space",
                }}
                target="_blank"
              >
                GreekTrustHome
              </Link>
            </span>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default withGlobalContext(HeaderComponent);
