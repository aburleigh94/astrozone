import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import type React from "react";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
};

export type Category = {
  title: string;
  page: string | undefined;
  href: string;
};

export type Meta = {
  title: string;
  description: string;
  image: Image;
};

export type SiteConfig = {
  meta: Meta;
  name: string;
  headshot: string;
  title: string;
  description: string;
  socials: Array<Social>;
  categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
  meta: {
    title: "burleigh.zone",
    description: "This is my personal website.",
    image: {
      src: "/headshot.jpg",
      alt: "Andrew Burleigh",
    },
  },
  name: "Andrew Burleigh",
  headshot: "/headshot.jpg",
  title: "Software Developer",
  description: `Hello, I'm Andrew! I am a software developer located near Philadelphia with over eight years of experience. 
  My primary field of expertise is creating web applications. 
  In my free time, I enjoy playing video games, tinkering with computers, and watching Philadelphia sports.`,
  socials: [
    {
      platform: "GitHub",
      link: "https://github.com/aburleigh94",
      icon: <GithubIcon />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/aburleigh94/",
      icon: <LinkedInIcon />,
    },
  ],
  categories: [
    {
      title: "All",
      page: undefined,
      href: "/posts",
    },
    {
      title: "Games",
      page: "games",
      href: "/posts/games",
    },
    {
      title: "Code",
      page: "code",
      href: "/posts/code",
    },
  ],
};
