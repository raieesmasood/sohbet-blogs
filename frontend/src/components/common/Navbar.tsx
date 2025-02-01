import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"; // Adjusted path to logo

const Navbar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(3, 92, 31, 1)", padding: "1.5rem 2rem" }}>
      <div className="d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: "80px", marginRight: "1rem" }} 
          />
        </Link>
        <div className="text-light" style={{ lineHeight: "1.2", fontSize: "1.5rem", fontWeight: "bold" }}>
          <div>OSMANLI NAKSIBENDI HAKKANI DERGAHI</div>
          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>SOHBATS</div>
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul 
          className="navbar-nav ms-auto" 
          style={{ fontSize: "1.3rem", gap: "3rem", display: "flex" }}
        >
          <li className="nav-item">
            <Link 
              className="nav-link text-light" 
              to="/"
              style={{ position: "relative", transition: "color 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(0, 123, 255, 1)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link text-light" 
              to="/about"
              style={{ position: "relative", transition: "color 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(0, 123, 255, 1)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link text-light" 
              to="/contact"
              style={{ position: "relative", transition: "color 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(0, 123, 255, 1)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link text-light" 
              to="/allsohbat"
              style={{ position: "relative", transition: "color 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(0, 123, 255, 1)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ALL SOHBATS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
