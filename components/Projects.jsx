import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [techTagsDisplay, setTechTagsDisplay] = useState([
    { display: true, tech: "React" },
    { display: true, tech: "Nextjs" },
    { display: true, tech: "Vanilla JS" },
    { display: true, tech: "Vanilla CSS" },
    { display: true, tech: "Firebase" },
    { display: true, tech: "Bootstrap" },
    { display: true, tech: "Tailwind CSS" },
    { display: true, tech: "Expressjs" },
    { display: true, tech: "Mongodb" },
    { display: true, tech: "OOP" },
    { display: true, tech: "Async" },
    { display: true, tech: "Auth0" },
  ]);

  const projectsArr = [
    // {
    //   title: '',
    //   gitHubLink: '',
    //   liveLink: '',
    //   shortDesc: '',
    //   image: '',
    //   techUsed: [],
    // }
    {
      title: "Tic-Tac-Toe",
      gitHubLink: "https://github.com/scoops82/tic-tac-toe-react-firebase",
      liveLink: "https://tic-tac-toe-react-firebase.vercel.app/",
      shortDesc:
        "A project I did to learn and practice realtime applications and to learn Tailwindcss.",
      image: "/images/tictactoe-meta-image.jpeg",
      techUsed: ["React", "Tailwind", "Firebase", "Async"],
    },
    {
      title: "Party Starter",
      gitHubLink: "https://github.com/cxr2/partystarter",
      liveLink: "https://partystarter.vercel.app/",
      shortDesc:
        "A team project made during a hackathon with the theme 'Get the party started'.",
      image: "/images/partystarter.png",
      techUsed: ["Firebase", "Bootstrap", "React", "Async"],
    },
    {
      title: "Trip Logger",
      gitHubLink: "https://github.com/scoops82/trip-logger",
      liveLink: "https://trip-logger-rt.herokuapp.com/",
      shortDesc:
        "Full stack app, scaffolded in a code-along and fleshed out individually.",
      image: "/images/trip-logger.png",
      techUsed: ["Auth0", "Bootstrap", "React", "Express", "Async", "Mongodb"],
    },
    {
      title: "React Dashboard",
      gitHubLink: "https://github.com/scoops82/react-dashboard",
      liveLink: "https://react-dashboard-ten-pied.vercel.app/",
      shortDesc:
        "An async dashboard giving you a task widget, world news, weather, and a joke.",
      image: "/images/react-dashboard.png",
      techUsed: ["React", "Vanilla CSS", "Async"],
    },
    {
      title: "Rogue Rover",
      gitHubLink: "https://github.com/scoops82/rogue_rover",
      liveLink: "https://rogue-rover.netlify.app/",
      shortDesc: "A game based on the Mars rover coding challenge.",
      image: "/images/rogue-rover.png",
      techUsed: ["OOP", "Bootstrap", "Vanilla JS"],
    },
    {
      title: "Ajax Dashboard",
      gitHubLink: "https://github.com/scoops82/ajax-dashboard",
      liveLink: "https://ruperts-ajax-dashboard.netlify.app/",
      shortDesc:
        "A dashboard pulling information from five different APIs (weather, pexels, joke, news, Nasa) and showing the date and a ticking clock. ",
      image: "/images/ajax-dashboard.png",
      techUsed: ["Async", "Vanilla JS", "Bootstrap"],
    },
  ];

  function techTagDisplayRenderer(techTagObj, i) {
    if (techTagObj.display) {
      return (
        <div
          key={i}
          className="badge badge-secondary"
          onClick={() => techTagClickHandler(i)}
        >
          {techTagObj.tech}
        </div>
      );
    } else {
      return (
        <div
          key={i}
          className="badge badge-outline"
          onClick={() => techTagClickHandler(i)}
        >
          {techTagObj.tech}
        </div>
      );
    }
  }

  function techTagClickHandler(i) {
    const index = i === techTagsDisplay.length ? i : i + 1;
    const targetObj = techTagsDisplay.slice(index - 1, index);
    console.log(
      "🚀 ~ file: Projects.jsx ~ line 107 ~ techTagClickHandler ~ targetObj",
      targetObj
    );
    targetObj[0].display = !targetObj[0].display;

    const newState = techTagsDisplay
      .slice(0, i)
      .concat(techTagsDisplay.slice(i + 1, techTagsDisplay.length))
      .concat(targetObj);
    console.log(
      "🚀 ~ file: Projects.jsx ~ line 115 ~ techTagClickHandler ~ newState",
      newState
    );
    setTechTagsDisplay(newState);
  }
  //   const techObj = techTagsDisplay[i];

  //   let techObjDisplay = techObj.display;
  //   techObjDisplay ? (techObjDisplay = false) : (techObjDisplay = true);

  //   setTechTagsDisplay([
  //     ...techTagsDisplay,
  //     (techTagsDisplay[i].display = techObjDisplay),
  //   ]);
  //   console.log("techTagsDisplay: ", techTagsDisplay);
  //   // setTechTagsDisplay(...techTagsDisplay, techObj);
  // }

  return (
    <section className="flex flex-col items-center mt-8">
      <h2 className="mb-5 text-5xl font-bold">Projects</h2>
      <div id="projects-container" className="min-h-screen">
        <div
          id="tags-selection-area"
          className="flex flex-wrap bg-base-300 gap-4 justify-center p-4"
        >
          {console.log("techTagsDisplay, ", techTagsDisplay)}
          {techTagsDisplay.map((obj, i) => techTagDisplayRenderer(obj, i))}
        </div>
        <div
          id="project-display area"
          className="overflow-y-auto flex flex-wrap bg-base-200 max-w-screen"
        >
          <ul className="flex flex-wrap gap-8 justify-center">
            {projectsArr.map(
              (
                { title, gitHubLink, liveLink, shortDesc, image, techUsed },
                i
              ) => (
                <div
                  key={i}
                  className="card w-auto max-w-md bg-base-100 shadow-xl image-full m-4"
                >
                  <figure>
                    <Image src={image} alt={title} layout="fill" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex flex-wrap gap-4">
                      {techUsed.map((tech, i) => (
                        <div key={i} className="badge badge-secondary">
                          {tech}
                        </div>
                      ))}
                    </div>
                    <p>{shortDesc}</p>
                    <div className="card-actions justify-end">
                      <Link href={gitHubLink}>
                        <button className="btn btn-primary">
                          View on Github
                        </button>
                      </Link>
                      <Link href={liveLink}>
                        <button className="btn btn-success">View Live</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
