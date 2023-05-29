// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  pathName: string;
  readingTime: string;
}

export const blogList: Array<BlogList> = [
  {
    slug: "munchie",
    title: "Munchie",
    publishDate: "May 2023",
    description:
      "Munchie is my own startup project that I am working on together with 5 other students. It's a website that helps you and your friends match what you want to have for dinner.",
    pathName: "/projects/munchie",
    readingTime: "5 min",
  },
  {
    slug: "crm-energiebelastingteruggaaf", // Filename
    title: "CRM Energiebelastingteruggaaf",
    publishDate: "July 2022",
    description:
      "A customer relations manager made for energiebelastingteruggaaf.nl.",
    pathName: "/projects/crm-energiebelastingteruggaaf",
    readingTime: "1 min",
  },
];
