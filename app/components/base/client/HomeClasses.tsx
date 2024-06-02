"use client";

import { useEffect } from "react";

export default function HomeClasses() {
  useEffect(() => {
    const footer = document.querySelectorAll("footer");
    footer?.[footer?.length - 1]?.classList?.add("footer--hidden");
    return () => {
      footer?.[footer?.length - 1]?.classList?.remove("footer--hidden");
    };
  }, []);

  return null;
}
