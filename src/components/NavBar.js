import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import AuthContext from "../store/authContext/AuthContext";

function NavBar() {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" className=" fixed-top ">
      <Container>
        <Navbar.Brand
          className="fw-bold border-bottom border-warning border-top p-2 rounded-3 text-warning"
          to="/"
        >
          More-Shop
        </Navbar.Brand>
        <Nav className="me-auto d-flex align-item-center justify-content-center">
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to={isLoggedIn ? "/store" :'/auth'}
          >
            Store
          </NavLink>
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="fw-bold bg-info rounded-3 p-1"
            className="m-3 text-light text-decoration-none"
            to="/contactus"
          >
            Contact Us
          </NavLink>
          {!isLoggedIn && (
            <NavLink
          
              className="m-3 login text-light text-decoration-none p-2 bg-danger fw-bold "
              to="/auth"
            >
              Login
            </NavLink>
          )}
        </Nav>
        {isLoggedIn && (
          <button
            className="m-3 authTab text-light text-decoration-none p-2 bg-danger fw-bold "
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
        <Cart />
      </Container>
    </Navbar>
  );
}

export default NavBar;
