"use client";

import { useEffect } from "react";

export default function HomeClasses() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");

    header?.classList.add("header--invert");
    footer?.classList?.add("footer--hidden");

    return () => {
      header?.classList.remove("header--invert");
      footer?.classList?.remove("footer--hidden");
    };
  }, []);
  return null;
}
