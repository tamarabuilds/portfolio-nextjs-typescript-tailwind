import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gameImg from "@/public/game.png";
import nonprofitImg from "@/public/nonprofit.png";
import schooldbImg from "@/public/schooldb.png";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Caltech",
    location: "Pasadena, CA",
    description:
      "I graduated with and Engineering & Applied Sciende degree with a focus on Computation and Neural Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2004",
  },
  {
    title: "IT Lead",
    location: "Milpitas, CA",
    description:
      "After completing a competitive IT Leadership Development Program with Johnson & Johnson, I worked up the ranks being a go-to person for the enterprise system, earning top performance ratings.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2010",
  },
  {
    title: "Project Manager",
    location: "Redwood City, CA",
    description:
      "Managed 10+ global projects impacting millions of utility customers. Recevied feedback of exceeding expectations and having high customer satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2012",
  },
  {
    title: "Graduated UC Berkeley Haas School of Business",
    location: "Berkeley, CA",
    description:
      "Wanting to understand the full lifecyle of business, I got my MBA and leveled up more skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Sr. Product & Program Manager",
    location: "Redwood City, CA",
    description:
      "Senior management team member. Provided critical contributions to a new product that increased revenue by 20%. Promoted from an individual contributor to people manager, then head of customer and product in two years.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2018",
  },
  {
    title: "Software Engineering Apprentice",
    location: "Mountain View, CA",
    description:
      "I'm now a frontend developer working at Intuit on the external developer portal. My stack includes React, TypeScript, and GraphQL. I also earned a Fullstack JavaScript Techdegree a month ahead of schedule.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "School Database",
    description:
      "This full-stack application manage school admins and their courses. It features redundant authentication and context.",
    tags: ["React", "Next.js", "JavaScript", "Express", "SQLite", "Sequelize"],
    imageUrl: schooldbImg,
  },
  {
    title: "Read by Third",
    description:
      "Before diving into software engineering full time, I started this non-profit to help grow strong readers by third grade (curtailed due to COVID).",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: nonprofitImg,
  },
  {
    title: "Pokemon Game",
    description:
      "This online word guessing game uses JavaScript and OOP (Object-Oriented Programming). Users pick letters with an onscreen keyboard or their physical keyboard.",
    tags: ["JavaScript", "HTML", "CSS",],
    imageUrl: gameImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
] as const;