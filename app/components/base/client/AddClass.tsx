"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function AddClass() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const split = pathname.split("/");
    if (pathname === "/") {
      document.body.classList.add("home");
      return;
    }
    if (pathname.includes("vacancy")) {
      document.body.classList.add("default");
      return;
    }
    document.body.classList.add(split[1]);
    return () => {
      if (pathname === "/") {
        document.body.classList.remove("home");
        return;
      }
      document.body.classList.remove(split[1]);
    };
  }, [pathname]);
  return null;
}
