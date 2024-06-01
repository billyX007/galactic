"use client";

import { useEffect } from "react";

export default function HomeClasses() {
  useEffect(() => {
    document.body.classList.add("home");
    const header = document.querySelector("header.header");
    const footer = document.querySelector("footer.header");
    header?.classList.add("header--invert");
    footer?.classList?.add("footer--hidden");

    return () => {
      document.body.classList.remove("home");
      header?.classList.remove("header--invert");
      footer?.classList?.remove("footer--hidden");
    };
  }, []);
  return null;
}
