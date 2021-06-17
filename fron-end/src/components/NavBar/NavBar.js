import React, { Component } from "react";
import SCNavbar from "./SCNavbar";
import { NavLink, Link } from "react-router-dom";
import { withAuth } from "../../context/auth.context";

class Navbar extends Component {
  state = {
    showUserMenu: false,
  };

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <>
        <SCNavbar>
          <div className="nav-menu">
            <NavLink
              className="link-navbar"
              to="/"
              onMouseEnter={(e) => this.showMenu(e)}
            >
              Reformas🠻
            </NavLink>
            {this.state.showUserMenu ? (
              <div className="link-navbar2">
                <Link className="link-navbar3" to="/profile">
                  Reformas Integrales
                </Link>
                <Link className="link-navbar3" to="/chronometer">
                  Reformas de cocinas
                </Link>
                <Link className="link-navbar3" to="/task">
                  Reforms de baños
                </Link>
                <Link
                  className="link-navbar3"
                  to="/logout"
                  onClick={(e) => this.logout(e)}
                >
                  Reformas de parquet
                </Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default withAuth(Navbar);
