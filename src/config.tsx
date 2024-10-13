import { DiscordIcon } from "@/components/icons/discord";
import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { TwitchIcon } from "@/components/icons/twitch";
import { XIcon } from "@/components/icons/x";
import { YouTubeIcon } from "@/components/icons/youtube";
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
		title: "Andrew Burleigh",
		description: "This is my personal website.",
		image: {
			src: "/headshot.jpg",
			alt: "Andrew Burleigh",
		},
	},
	name: "Andrew Burleigh",
	headshot: "/headshot.jpg",
	title: "Software Developer",
	description: `Hello! I am a software developer located in the Philadelphia area. I have over eight years of experience in development working across multiple industries, and my primary technologies include ASP.NET and React. 
	I graduated from Lehigh University with a B.S. in Computer Science. While attending school, I was a proud member of the Lehigh University Marching 97. 
	When not writing code, I enjoy playing video games and tinkering with computers. I also enjoy watching all the Philadelphia sports teams.`,
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
