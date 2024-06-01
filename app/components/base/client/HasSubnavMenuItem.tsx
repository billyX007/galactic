"use client";

import React from "react";

interface HasSubnavMenuItemProps {
  label: string;
  children: React.ReactNode;
}

class HasSubnavMenuItem extends React.Component<HasSubnavMenuItemProps, {}> {
  mouseOver() {
    const parent = document.querySelector(".nav__main-nav");
    parent?.classList.add("subnav-open");
  }
  mouseOut() {
    const parent = document.querySelector(".nav__main-nav");
    setTimeout(() => {
      parent?.classList.remove("subnav-open");
    }, 500);
  }
  render() {
    return (
      <li
        className="nav__item has-subnav"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <button className="nav__link nav__link--has-subnav">
          {this.props.label}
        </button>
        <div className="nav__subnav">{this.props.children}</div>
      </li>
    );
  }
}

export default HasSubnavMenuItem;
