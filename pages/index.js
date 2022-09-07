import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CV from "../components/CV";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rupert Taylor</title>
        <meta
          name="description"
          content="Portfolio site showing the work of Rupert Taylor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <Navbar />
            <Intro />
            <Projects />
            <CV />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
              {/* <!-- Sidebar content here --> */}
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
                <a>Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main></main>

      <footer></footer>
    </div>
  );
}
