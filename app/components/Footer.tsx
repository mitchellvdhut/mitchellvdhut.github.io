export const Footer = () => {
  return (
    <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
      <span>
        &copy; {new Date().getFullYear()} Mitchell van der Hut. Find me on{" "}
        <a
          href="https://www.linkedin.com/in/mitchell-van-der-hut/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/mitchellvdhut"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
        {/*<br />*/}
        {/*Powered by{" "}*/}
        {/*<a href="https://remix.run/" target="_blank" rel="noopener noreferrer">*/}
        {/*  Remix*/}
        {/*</a>*/}
        {/*.*/}
      </span>
    </footer>
  );
};

export default Footer;
