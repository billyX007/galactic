"use client";

import React from "react";

class MenuButton extends React.Component {
  navToggle(): void {
    window.document.body.classList.toggle(
      "nav-open",
      !document.body.classList.contains("nav-open")
    );
  }
  render() {
    return (
      <button
        id="nav-toggle"
        className="header__menu-toggle"
        aria-label="Toggle menu"
        onClick={this.navToggle}
      />
    );
  }
}

export default MenuButton;
