"use client";

import { useEffect } from "react";

export default function HomeClasses() {
  useEffect(() => {
    document.body.classList.add("home");
    const header = document.querySelector("header.header");
    if (!header) return;
    header.classList.add("header--invert");
    return () => {
      document.body.classList.remove("home");
      header.classList.remove("header--invert");
    };
  }, []);
  return null;
}
