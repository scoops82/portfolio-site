import { useEffect } from "react";
// import { themeChange } from "theme-change";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full navbar bg-base-300 sticky top-0 z-40">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2 text-3xl">
        <Link href="/">
          <a>
            <h1>Rupert Taylor</h1>
          </a>
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
