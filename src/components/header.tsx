"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

const products: {
  title: string;
  description: string;
  logo: React.ReactElement;
}[] = [
  {
    title: "AI",
    description: "Integrated AI assistant",
    logo: <SmileyMelting size={30} />,
  },
  {
    title: "Docs",
    description: "Simple & powerful",
    logo: <File />,
  },
  {
    title: "Wiki",
    description: "Centralize your knowledge",
    logo: <BookBookmark />,
  },
  {
    title: "Projects",
    description: "For every team or size",
    logo: <Target />,
  },
  {
    title: "Calendar",
    description: "Time and Work, together",
    logo: <Calendar />,
  },
  {
    title: "Mail",
    description: "Email that works for you",
    logo: <PaperPlaneTilt />,
  },
  {
    title: "Sites",
    description: "Publish anything, fast",
    logo: <Globe />,
  },
  {
    title: "Forms",
    description: "Captures responses and requests",
    logo: <Table />,
  },
  {
    title: "Marketplace",
    description: "Templates to get you started",
    logo: <Storefront />,
  },
  {
    title: "Integrations",
    description: "Connect your tools to Notion",
    logo: <PlugsConnected />,
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Header() {
  return (
    <header className="w-full p-4 h-14 flex items-center justify-between">
      <NavigationMenu className="w-full">
        <NavigationMenuList>
          <NavigationMenuItem className="mr-4">
            <Link href="/">
              <Logo />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[200px] gap-3 p-2">
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="flex hover:bg-hover rounded-md transition-colors duration-300 w-full h-15 flex-row"
                    >
                      {product.logo}
                      <div className="flex flex-col ">
                      <span className="text-bold text-lg">{product.title}</span>
                      <span className="text-sm">{product.description}</span>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
