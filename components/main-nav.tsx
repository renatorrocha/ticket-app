import Link from "next/link";
import React from "react";
import ToggleTheme from "./toggle-theme";
import MainNavLinks from "./main-nav-links";
import { getServerSession } from "next-auth/next";
import options from "@/app/api/auth/[...nextauth]/options";

export default async function MainNav() {
  const session = await getServerSession(options);
  console.log(session);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <MainNavLinks />
      </div>

      <div className="flex items-center gap-2">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}

        <ToggleTheme />
      </div>
    </div>
  );
}
