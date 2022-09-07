import Link from "next/link";
import { useState } from "react";

export default function CV() {
  const [index, setIndex] = useState(0);
  const timeline = [
    // {
    //   title: '',
    //   dates: '',
    //   work: [''],
    //   education: [''],
    // },
    {
      title: "Dandelion",
      dates: "2013-Present",
      work: [
        "2013-Present - Built successfull e-commerce business with my wife. I built the website, automations and stock datase",
      ],
      education: [
        "Feb 2022-Present - Full stack web development course at The Jump digital school.",
        "Sept 2014-June 2015 - Gem-A Gemmological Foundation course.",
      ],
    },
    {
      title: "China and Return to UK",
      dates: "2004-2012",
      work: [
        "2009-2011 - IELTS Examiner for British Council, Northern China",
        "2008-2011 - English Teacher at Northeast Normal University (东北师范大学), Changchun, China",
        "2004-2007 - English Teacher at EF English First, Changchun, China",
      ],
      education: [
        "2011-2012 - MA Chinese Studies at The School of Oriental and African Studies (SOAS), University of London",
        "2007-2008 - Chinese Language at NorthEast Normal University (东北师范大学), Changchun, China",
      ],
    },
    {
      title: "Before China",
      dates: "Pre 2004",
      work: [
        "2003-2004 - Various backpacker jobs while travelling around Australia",
      ],
      education: [
        "2000-2003 - BSc Molecular Cell Biology, UCL, University of London",
        "1995-2000 - A-Levels (Maths, Chemistry, Biology) and GCSEs at Rugby School, Warwickshire.",
      ],
    },
  ];

  function incrementIndex() {
    if (index === timeline.length - 1) {
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  }

  function decrementIndex() {
    if (index === 0) {
      return setIndex(timeline.length - 1);
    } else {
      return setIndex(index - 1);
    }
  }
  return (
    <section
      className="h-fit p-4 flex flex-col justify-center align-middle"
      id="timeline"
    >
      <h2 className="mb-5 text-5xl font-bold text-center">My Timeline</h2>
      <ul className="steps steps-horizontal">
        <li className="mb-5 step step-primary"></li>
        <li className={index > 0 ? "mb-5 step step-primary" : "mb-5 step"}></li>
        <li className={index > 1 ? "mb-5 step step-primary" : "mb-5 step"}></li>
      </ul>

      <h3 className="card-title text-2xl text-center m-auto">
        {timeline[index].title}
      </h3>
      <p className="text-center">{timeline[index].dates}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h4 className="text-xl">Work</h4>
            <ul className="text-left">
              {timeline[index].work.map((work, i) => (
                <li key={i}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h4 className="text-xl">Education</h4>
            <ul className="text-left">
              {timeline[index].education.map((study, i) => (
                <li key={i}>{study}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="card-actions m-auto mt-4">
        <button className="btn btn-primary" onClick={() => decrementIndex()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button className="btn btn-primary" onClick={() => incrementIndex()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
