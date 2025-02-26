"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";

import {
  BookBookmark,
  Calendar,
  File,
  Globe,
  PaperPlaneTilt,
  PlugsConnected,
  SmileyMelting,
  Storefront,
  Table,
  Target,
} from "@phosphor-icons/react";
import Dropdown from "./dropdown";

const download: {
  title: string;
}[] = [
  {
    title: "Notion",
  },
  {
    title: "Calendar",
  },
  {
    title: "Web Clipper",
  },
];

const individuals: {
  title: string;
}[] = [
  {
    title: "Personal",
  },
  {
    title: "Students",
  },
  {
    title: "Teachers",
  },
  {
    title: "Creators",
  },
];

const teams: {
  title: string;
}[] = [
  {
    title: "Product",
  },
  {
    title: "Engineering",
  },
  {
    title: "Design",
  },
  {
    title: "Marketing",
  },
  {
    title: "IT",
  },
  {
    title: "Startups",
  },
  {
    title: "Enterprise",
  },
  {
    title: "Costumer stories",
  },
];

const products: {
  title: string;
  description: string;
  logo: React.ReactElement;
}[] = [
  {
    title: "AI",
    description: "Integrated AI assistant",
    logo: <SmileyMelting size={20} />,
  },
  {
    title: "Docs",
    description: "Simple & powerful",
    logo: <File size={20} />,
  },
  {
    title: "Wiki",
    description: "Centralize your knowledge",
    logo: <BookBookmark size={20} />,
  },
  {
    title: "Projects",
    description: "For every team or size",
    logo: <Target size={20} />,
  },
  {
    title: "Calendar",
    description: "Time and Work, together",
    logo: <Calendar size={20} />,
  },
  {
    title: "Mail",
    description: "Email that works for you",
    logo: <PaperPlaneTilt size={20} />,
  },
  {
    title: "Sites",
    description: "Publish anything, fast",
    logo: <Globe size={20} />,
  },
  {
    title: "Forms",
    description: "Captures responses and requests",
    logo: <Table size={20} />,
  },
  {
    title: "Marketplace",
    description: "Templates to get you started",
    logo: <Storefront size={20} />,
  },
  {
    title: "Integrations",
    description: "Connect your tools to Notion",
    logo: <PlugsConnected size={20} />,
  },
];

export default function Header() {
  return (
    <header className="w-full p-4 h-14 flex items-center justify-center">
      <Link href="/" className="mr-8">
        <Logo />
      </Link>
      <nav className="flex navbar items-center w-full justify-between">
        <ul className="flex items-center justify-center gap-0.5 part-1-navbar-links">
          <Dropdown buttonLabel="Product" width="w-64">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex hover:bg-hover cursor-pointer items-center justify-start rounded-md transition-colors duration-300 gap-2 w-full h-10 py-6 px-1 flex-row"
              >
                <div className="h-9 w-9 flex justify-center items-center rounded-md border border-gray-200">
                  {product.logo}
                </div>
                <div className="flex w-[70%] flex-col items-start justify-center">
                  <span className="font-normal text-base">{product.title}</span>
                  <span className="text-xs text-nowrap text-zinc-500">
                    {product.description}
                  </span>
                </div>
              </div>
            ))}
          </Dropdown>

          <Dropdown buttonLabel="Teams" width="w-42">
            {teams.map((team, index) => (
              <div
                key={index}
                className="flex hover:bg-hover cursor-pointer items-center justify-start rounded-md transition-colors duration-300 gap-2 w-full h-3 px-3 py-4 flex-row"
              >
                <span className="font-normal text-base">{team.title}</span>
              </div>
            ))}
          </Dropdown>

          <Dropdown buttonLabel="Individuals" width="w-38">
            {individuals.map((individual, index) => (
              <div
                key={index}
                className="flex hover:bg-hover cursor-pointer items-center justify-start rounded-md transition-colors duration-300 gap-2 w-full h-3 px-3 py-4 flex-row"
              >
                <span className="font-normal text-base">
                  {individual.title}
                </span>
              </div>
            ))}
          </Dropdown>

          <Dropdown buttonLabel="Download" width="w-60">
            {download.map((down, index) => (
              <div
                key={index}
                className="flex hover:bg-hover cursor-pointer items-center justify-start rounded-md transition-colors duration-300 gap-2 w-full h-3 px-3 py-4 flex-row"
              >
                <span className="font-normal text-base">{down.title}</span>
              </div>
            ))}
            <p className="text-left text-[.91rem] px-3 pt-2 pb-3">
              Notion is always at home <br /> right in{" "}
              <a
                className="underline hover:text-blue-500"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                your browser
              </a>
            </p>
          </Dropdown>

          <Link
            href="/pricing"
            className="hover:bg-gray-200 h-8 flex items-center rounded-md px-3"
          >
            Pricing
          </Link>
        </ul>

        <ul className="flex items-center justify-center part-2-navbar-links">
          <li className="hover:bg-gray-200 px-3 flex items-center font-medium justify-center h-8 text-text-primary rounded-md  cursor-pointer">
            Request a demo
          </li>

          <div className="separator-navbar w-[1px] mx-4 h-5 bg-black/20"></div>

          <li className=" hover:bg-gray-200 mr-4 flex items-center justify-center px-3 h-8 font-medium  text-text-primary rounded-md cursor-pointer">
            Log in
          </li>

          <button className="button-get-notion text-sm px-3 h-8 flex items-center justify-center rounded-md font-semibold text-white hover:bg-text-primary/90 bg-text-primary py-1">
            Get Notion free
          </button>
        </ul>
      </nav>
    </header>
  );
}
