import Link from "next/link";
import React from "react";
import ToggleTheme from "./toggle-theme";

export default function MainNav() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">Dashboard</Link>

        <Link href="/tickets">Tickets</Link>

        <Link href="/users">Users</Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/users">Logout</Link>

        <ToggleTheme />
      </div>
    </div>
  );
}
