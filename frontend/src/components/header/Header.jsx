import React, { useRef } from "react";
import "./header.css";
import { Container } from "reactstrap";

const nav__links = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active-menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              PizZa Time
            </h2>
          </div>
          <div className="nav-menu" ref={menuRef}>
            <div className="nav-list-wrapper d-flex align-items-center gap-5">
              <ul className="nav-list">
                {nav__links.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="menu-right">
                <div className="search">
                  <input type="text" placeholder="Search Item ..." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="cart-icon">
              <i class="ri-shopping-cart-2-line"></i>

              <span className="badge">2</span>
            </span>
          </div>
          <div className="mobile-menu">
            <span>
              <i class="ri-menu-2-fill" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
