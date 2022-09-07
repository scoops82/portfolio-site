import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro">
      <div className="hero min-h-[80vh] bg-fixed bg-[url('/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-5 text-5xl font-bold">Meet Rupert</h2>
            <p className="mb-5">
              Hi, I am a web developer with experience in the full stack and a
              wide range of technologies but specializing in Javascript and
              React. I have been running my own successful e-commerce business
              with my wife since 2013.
            </p>
            <p className="mb-5">
              I have always been interested in computers and code; ever since I
              learnt to use ms-dos when I was about 8 years old. I then took a
              circuitous route back to computing through molecular cell biology,
              teaching, Chinese studies and antiques.
            </p>
            <p className="mb-5">
              Please have a look through my portfolio and contact me with any
              questions.
            </p>
            <Link href="#projects">
              <button className="btn btn-primary">See My Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
