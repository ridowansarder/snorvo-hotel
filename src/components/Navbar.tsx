import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Input } from "./ui/input";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 shadow-md  backdrop-blur-lg py-4">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-extrabold text-center text-black">
          Snorvo
        </h1>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-3 lg:gap-8 text-black font-medium">
        {navLinks.map((link, i) => (
          <a key={i} href={link.path} className={"group flex flex-col gap-0.5"}>
            {link.name}
            <div
              className={
                "bg-black h-0.5 w-0 group-hover:w-full transition-all duration-300"
              }
            />
          </a>
        ))}
        <button
          className={
            "border border-black px-2 lg:px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
          }
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-3 lg:gap-6">
        <div className="relative">
          <Search className="lg:absolute top-1.5 left-2 mr-4 text-white lg:text-gray-500" />
          <Input
            type="text"
            placeholder="Search..."
            className=" hidden lg:flex pl-8 pr-4 py-2 rounded-full"
          />
        </div>
        <SignedOut>
          <SignInButton>
            <button className="bg-foreground text-background px-6 py-2.5 rounded-full ml-2 lg:ml-4 transition-all duration-500">
              Login
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          Dashboard
        </button>

        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
