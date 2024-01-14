import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "../themeToggler/ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href={"/"}>
        <h1>Logo</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* Theme toggler */}
        <ThemeToggler />
        {/* Auth button */}
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl={"/dashboard"} mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
