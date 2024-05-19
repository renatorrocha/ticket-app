import Link from "next/link";
import React from "react";
import ToggleTheme from "./toggle-theme";
import MainNavLinks from "./main-nav-links";

export default function MainNav() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <MainNavLinks />
      </div>

      <div className="flex items-center gap-2">
        <Link href="/users">Logout</Link>

        <ToggleTheme />
      </div>
    </div>
  );
}
