import React, { Component } from "react";
import { Button } from "../Button.js";
import { MenuItem } from "./MenuItem.js";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="NavbarItems">
        <div className="wide">
          <h1 className="navbar-logo">
            React <i className="fab fa-react"></i>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItem.map((items, index) => {
              return (
                <li key={index}>
                  <a className={items.cName} href={items.url}>
                    {items.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Sign Up</Button>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Navbar/>, document.getElementById(''))
export default Navbar;
