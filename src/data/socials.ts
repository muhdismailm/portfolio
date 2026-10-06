export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
  highlight?: boolean;
}

export const socialsData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/muhdismailm",
    handle: "@muhdismailm",
    icon: "Github",
    highlight: true,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/muhdismailm",
    handle: "in/muhdismailm",
    icon: "Linkedin",
    highlight: true,
  },
  {
    name: "Email",
    url: "mailto:contact@muhdismailm.com",
    handle: "contact@muhdismailm.com",
    icon: "Mail",
    highlight: true,
  },
];
