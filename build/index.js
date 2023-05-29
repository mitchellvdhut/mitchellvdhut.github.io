var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-PMBXHQT3.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default,
  handleDataRequest: () => handleDataRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_etag = __toESM(require("etag")), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
    {
      onAllReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
    {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleDataRequest = async (response, { request }) => {
  let body = await response.clone().text();
  return request.method.toLowerCase() === "get" && (response.headers.set("etag", (0, import_etag.default)(body)), request.headers.get("If-None-Match") === response.headers.get("ETag")) ? new import_node.Response("", { status: 304, headers: response.headers }) : response;
};

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react7 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));

// app/utils/theme-provider.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), themes = Object.values(Theme), ThemeContext = (0, import_react2.createContext)(void 0), prefersLightMQ = "(prefers-color-scheme: light)", getPreferredTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */;
function ThemeProvider({
  children,
  specifiedTheme
}) {
  let [theme, setTheme] = (0, import_react2.useState)(() => specifiedTheme ? themes.includes(specifiedTheme) ? specifiedTheme : null : typeof window != "object" ? null : getPreferredTheme()), persistTheme = (0, import_react3.useFetcher)(), mountRun = (0, import_react2.useRef)(!1);
  return (0, import_react2.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    !theme || persistTheme.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]), (0, import_react2.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersLightMQ), handleChange = () => {
      setTheme(mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeContext.Provider, { value: [theme, setTheme], children });
}
var clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
    ? 'light'
    : 'dark';

  const cl = document.documentElement.classList;

  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Matt know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }

  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let Matt know you're seeing this message? Thanks!",
    );
  }
})();
`;
function NonFlashOfWrongThemeEls({ ssrTheme }) {
  let [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "meta",
      {
        name: "color-scheme",
        content: theme === "light" ? "light dark" : "dark light"
      }
    ),
    ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "script",
      {
        dangerouslySetInnerHTML: { __html: clientThemeCode }
      }
    )
  ] });
}
function useTheme() {
  let context = (0, import_react2.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}

// app/utils/theme.server.ts
var import_node2 = require("@remix-run/node");

// app/utils/misc.tsx
function getRequiredEnvVarFromObj(obj, key, devValue = `${key}-dev-value`) {
  let value = devValue, envVal = obj[key];
  if (envVal)
    value = envVal;
  else if (obj.NODE_ENV === "production")
    throw new Error(`${key} is a required env variable`);
  return value;
}
function getRequiredServerEnvVar(key, devValue) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

// app/utils/theme.server.ts
var themeStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "my_remix_theme",
    secure: !0,
    secrets: [getRequiredServerEnvVar("SESSION_SECRET")],
    sameSite: "lax",
    path: "/",
    expires: new Date("2088-10-18"),
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      let themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : "dark" /* DARK */;
    },
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/components/Logo.tsx
var import_react4 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime"), Logo = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.NavLink, { to: "/", className: "inline-block", children: "VDHUT.COM" }), Logo_default = Logo;

// app/components/Nav.tsx
var import_react5 = require("@remix-run/react");

// app/components/ThemeToggleIcon.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime"), iconThemeMap = /* @__PURE__ */ new Map([
  ["light" /* LIGHT */, import_lucide_react.Sun],
  ["dark" /* DARK */, import_lucide_react.Moon]
]), ThemeToggleIcon = ({ theme, checked }) => {
  let Component = iconThemeMap.get(theme);
  return Component ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Component,
    {
      width: 23,
      className: checked ? "fill-text-primary dark:fill-d-text-primary" : ""
    },
    theme
  ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {});
}, ThemeToggleIcon_default = ThemeToggleIcon;

// app/components/ThemeToggle.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), themes2 = ["light" /* LIGHT */, "dark" /* DARK */], ThemeToggle = () => {
  let [theme, setTheme] = useTheme();
  function handleChange() {
    setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  }
  let labelClass = "relative flex cursor-pointer items-center justify-center";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "theme-toggle ml-2.5 inline-flex h-full items-center gap-[0.6em] rounded-[99em] px-[0.67em] py-[0.33em] pt-2", children: themes2.map((t) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "label",
    {
      className: theme === t ? `text-text-primary opacity-100 dark:text-d-text-primary ${labelClass}` : labelClass,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThemeToggleIcon_default, { theme: t, checked: theme === t }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "radio",
            name: "theme-toggle",
            className: "absolute inset-0 z-[-1] opacity-0",
            checked: theme === t,
            value: t,
            title: `Use ${t} theme`,
            "aria-label": `Use ${t} theme`,
            onChange: handleChange
          }
        )
      ]
    },
    t
  )) });
}, ThemeToggle_default = ThemeToggle;

// app/components/Nav.tsx
var import_react6 = require("react"), import_lucide_react2 = require("lucide-react"), import_framer_motion = require("framer-motion");

// app/data/animationConfig.ts
var textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}, containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1
    }
  }
}, imageLoadAnimationProps = {
  initial: { scale: 1.5 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    duration: 1
  }
}, mobileNavContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}, mobileNavListVariant = {
  hidden: { y: -20, height: 0, opacity: 0 },
  show: { opacity: 1, height: "auto", y: 0 }
}, mobileNavExitProps = {
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// app/components/Nav.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), activeClassName = "selected navlink", activeStyleCallback = ({ isActive }) => isActive ? activeClassName : "navlink", NavLinks = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/", className: activeStyleCallback, children: "Home" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/projects", className: activeStyleCallback, children: "Projects" })
] }), Nav = () => {
  let [isOpen, setIsOpen] = (0, import_react6.useState)(!1), location = (0, import_react5.useLocation)(), toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (0, import_react6.useEffect)(() => {
    setIsOpen(!1);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("nav", { className: "flex flex-[1] items-center justify-end overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "hidden justify-end md:flex", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(NavLinks, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-[75px]", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeToggle_default, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex w-[75px] justify-end md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { onClick: toggleNavbar, children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.X, {}) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.Menu, {}) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion.AnimatePresence, { mode: "wait", children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      import_framer_motion.motion.div,
      {
        layout: "position",
        variants: mobileNavContainerVariant,
        initial: "hidden",
        animate: "show",
        className: "mt-4 basis-full md:hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion.motion.div, { variants: mobileNavListVariant, ...mobileNavExitProps, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/", className: activeStyleCallback, children: "Home" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion.motion.div, { variants: mobileNavListVariant, ...mobileNavExitProps, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/blog", className: activeStyleCallback, children: "Blog" }) })
        ]
      },
      "nav-links"
    ) })
  ] });
}, Nav_default = Nav;

// app/components/Header.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { className: "sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Logo_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Nav_default, {})
] }), Header_default = Header;

// app/components/Footer.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("footer", { className: "mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
  "\xA9 ",
  new Date().getFullYear(),
  " Mitchell van der Hut. Find me on",
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "a",
    {
      href: "https://www.linkedin.com/in/mitchell-van-der-hut/",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Linkedin"
    }
  ),
  " ",
  "or",
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "a",
    {
      href: "https://github.com/mitchellvdhut",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "GitHub"
    }
  ),
  "."
] }) }), Footer_default = Footer;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XLFMLZKF.css";

// app/root.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "vdhut.com | portfolio",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => ({
  theme: (await getThemeSession(request)).getTheme()
});
function App() {
  let data = (0, import_react7.useLoaderData)(), [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("html", { lang: "en", className: (0, import_clsx.default)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NonFlashOfWrongThemeEls, { ssrTheme: Boolean(data.theme) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("body", { className: "bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex min-h-screen flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Header_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("main", { className: "relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Outlet, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Footer_default, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.LiveReload, {})
    ] })
  ] });
}
function AppWithProviders() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ThemeProvider, { specifiedTheme: data.theme, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(App, {}) });
}

// app/routes/action.set-theme.ts
var action_set_theme_exports = {};
__export(action_set_theme_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var action = async ({ request }) => {
  let themeSession = await getThemeSession(request), requestText = await request.text(), theme = new URLSearchParams(requestText).get("theme");
  return console.log("hitting the action function"), isTheme(theme) ? (themeSession.setTheme(theme), (0, import_node3.json)(
    { success: !0 },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  )) : (0, import_node3.json)({
    success: !1,
    message: `theme value of ${theme} is not a valid theme`
  });
}, loader2 = () => (0, import_node3.redirect)("/", { status: 404 });

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/data/blogList.server.ts
var blogList = [
  {
    slug: "munchie",
    title: "Munchie",
    publishDate: "May 2023",
    description: "Munchie is my own startup project that I am working on together with 5 other students. It's a website that helps you and your friends match what you want to have for dinner.",
    pathName: "/projects/munchie",
    readingTime: "5 min"
  },
  {
    slug: "crm-energiebelastingteruggaaf",
    title: "CRM Energiebelastingteruggaaf",
    publishDate: "July 2022",
    description: "A customer relations manager made for energiebelastingteruggaaf.nl.",
    pathName: "/projects/crm-energiebelastingteruggaaf",
    readingTime: "1 min"
  }
];

// app/routes/projects.tsx
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime10 = require("react/jsx-runtime"), loader3 = async () => (0, import_node4.json)(blogList);
function Projects() {
  let posts = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_framer_motion2.motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "mx-auto my-0 w-full max-w-[42em]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_framer_motion2.motion.h1,
          {
            variants: textVariants,
            className: "mb-20 text-2xl font-bold leading-[1.3] md:text-4xl",
            children: "Projects"
          }
        ),
        posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_framer_motion2.motion.div, { variants: textVariants, children: [
          index !== 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("hr", { className: "mx-auto my-[60px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: " mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react8.Link, { prefetch: "intent", to: post.slug, children: post.title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "my-6 md:text-lg", children: post.description }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "font-sans font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "mr-4 text-left uppercase text-text-secondary dark:text-d-text-secondary", children: [
            "\u2014 ",
            post.publishDate
          ] }) })
        ] }, index))
      ]
    }
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_framer_motion3 = require("framer-motion");
var import_node5 = require("@remix-run/node"), import_jsx_runtime11 = require("react/jsx-runtime"), loader4 = async () => (0, import_node5.json)(blogList);
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_framer_motion3.motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        className: "max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            import_framer_motion3.motion.h1,
            {
              variants: textVariants,
              className: "mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl",
              children: "Hi, I'm Mitchell \u{1F44B}"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_framer_motion3.motion.h2,
            {
              variants: textVariants,
              className: "mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl",
              children: [
                "I'm a ",
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "bg-orange-400 text-black", children: "\xA0frontend developer\xA0" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_framer_motion3.motion.p, { variants: textVariants, className: "text-lg md:text-xl", children: [
            "I am a 3rd-year student of Open-ICT at Hogeschool Utrecht. In Open-ICT, you don't learn by memorizing outdated knowledge from books, but by actively seeking current trends and applying this knowledge in projects using an agile approach.",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
            " I have experience with React (Native) and Vue."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mx-[1em] my-0 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion3.motion.div, { ...imageLoadAnimationProps, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("picture", { className: "block min-h-[250px] w-full h-full object-cover", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "source",
        {
          srcSet: "/assets/images/20191012_142631.jpg",
          media: "(min-width: 600px)"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "img",
        {
          className: "mb-[1em] w-[300px] h-[300px] rounded-full object-cover object-left",
          alt: "Illustration of person reading a book",
          src: "/assets/images/20191012_142631.jpg",
          width: "400",
          height: "400"
        }
      )
    ] }) }) })
  ] });
}

// app/routes/_mdx.tsx
var mdx_exports = {};
__export(mdx_exports, {
  default: () => BlogLayout,
  links: () => links2,
  loader: () => loader5
});
var import_github_dark_dimmed = __toESM(require_github_dark_dimmed()), import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_framer_motion4 = require("framer-motion");
var import_lucide_react3 = require("lucide-react"), import_jsx_runtime12 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let pathname = new URL(request.url).pathname, currentPost = blogList.find(({ pathName }) => pathName === pathname);
  return (0, import_node6.json)(currentPost);
}, links2 = () => [{ rel: "stylesheet", href: import_github_dark_dimmed.default }];
function BlogLayout() {
  let currentPost = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_framer_motion4.motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mx-auto flex w-full max-w-[47rem]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react3.ArrowLeft, {}),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react9.NavLink, { className: "back-button ml-2 font-sans", to: "/projects", children: "Back" })
    ] }),
    currentPost ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_framer_motion4.motion.p,
        {
          variants: textVariants,
          className: "my-10 font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary",
          children: currentPost.publishDate
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_framer_motion4.motion.h1,
        {
          variants: textVariants,
          className: "mb-20 text-4xl font-bold leading-[1.3] md:text-6xl",
          children: currentPost.title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_framer_motion4.motion.hr,
        {
          variants: textVariants,
          className: "w-[30%] min-w-[100px]"
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_framer_motion4.motion.div, { variants: textVariants, className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "prose w-screen py-[1em] px-[2em] dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react9.Outlet, {}) }) })
  ] });
}

// mdx:routes\_mdx.projects.another-markdown.mdx
var mdx_projects_another_markdown_exports = {};
__export(mdx_projects_another_markdown_exports, {
  attributes: () => attributes,
  default: () => mdx_projects_another_markdown_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta2
});
var import_react10 = __toESM(require("react")), attributes = {
  title: "Another Markdown",
  publishDate: "25 Dec 2021",
  meta: {
    title: "Another Markdown",
    publishDate: "25 Dec 2021",
    description: "A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT."
  }
};
function MDXContent(props = {}) {
  let _components = Object.assign({
    p: "p",
    img: "img",
    ul: "ul",
    li: "li",
    a: "a",
    hr: "hr",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    blockquote: "blockquote",
    ol: "ol",
    code: "code",
    pre: "pre",
    span: "span",
    strong: "strong",
    em: "em"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, { src: "/assets/images/casual-life-3d-likes.webp", alt: "Illustration of woman using a meditation app" })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Headings" }, "Headings")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Paragraphs" }, "Paragraphs")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Blockquotes" }, "Blockquotes")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Lists" }, "Lists")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Horizontal" }, "Horizontal rule")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Table" }, "Table")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Code" }, "Code")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#Inline" }, "Inline elements")), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.hr, null), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "top" }), "Headings"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, "Heading one"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat commodo id sunt. Nostrud enim ad commodo incididunt cupidatat in ullamco ullamco Lorem cupidatat velit enim et Lorem. Ut laborum cillum laboris fugiat culpa sint irure do reprehenderit culpa occaecat. Exercitation esse mollit tempor magna aliqua in occaecat aliquip veniam reprehenderit nisi dolor in laboris dolore velit."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Heading two"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Aute officia nulla deserunt do deserunt cillum velit magna. Officia veniam culpa anim minim dolore labore pariatur voluptate id ad est duis quis velit dolor pariatur enim. Incididunt enim excepteur do veniam consequat culpa do voluptate dolor fugiat ad adipisicing sit. Labore officia est adipisicing dolore proident eiusmod exercitation deserunt ullamco anim do occaecat velit. Elit dolor consectetur proident sunt aliquip est do tempor quis aliqua culpa aute. Duis in tempor exercitation pariatur et adipisicing mollit irure tempor ut enim esse commodo laboris proident. Do excepteur laborum anim esse aliquip eu sit id Lorem incididunt elit irure ea nulla dolor et. Nulla amet fugiat qui minim deserunt enim eu cupidatat aute officia do velit ea reprehenderit."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h3, null, "Heading three"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Voluptate cupidatat cillum elit quis ipsum eu voluptate fugiat consectetur enim. Quis ut voluptate culpa ex anim aute consectetur dolore proident voluptate exercitation eiusmod. Esse in do anim magna minim culpa sint. Adipisicing ipsum consectetur proident ullamco magna sit amet aliqua aute fugiat laborum exercitation duis et."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h4, null, "Heading four"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Commodo fugiat aliqua minim quis pariatur mollit id tempor. Non occaecat minim esse enim aliqua adipisicing nostrud duis consequat eu adipisicing qui. Minim aliquip sit excepteur ipsum consequat laborum pariatur excepteur. Veniam fugiat et amet ad elit anim laborum duis mollit occaecat et et ipsum et reprehenderit. Occaecat aliquip dolore adipisicing sint labore occaecat officia fugiat. Quis adipisicing exercitation exercitation eu amet est laboris sunt nostrud ipsum reprehenderit ullamco. Enim sint ut consectetur id anim aute voluptate exercitation mollit dolore magna magna est Lorem. Ut adipisicing adipisicing aliqua ullamco voluptate labore nisi tempor esse magna incididunt."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h5, null, "Heading five"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Veniam enim esse amet veniam deserunt laboris amet enim consequat. Minim nostrud deserunt cillum consectetur commodo eu enim nostrud ullamco occaecat excepteur. Aliquip et ut est commodo enim dolor amet sint excepteur. Amet ad laboris laborum deserunt sint sunt aliqua commodo ex duis deserunt enim est ex labore ut. Duis incididunt velit adipisicing non incididunt adipisicing adipisicing. Ad irure duis nisi tempor eu dolor fugiat magna et consequat tempor eu ex dolore. Mollit esse nisi qui culpa ut nisi ex proident culpa cupidatat cillum culpa occaecat anim. Ut officia sit ea nisi ea excepteur nostrud ipsum et nulla."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h6, null, "Heading six"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Paragraphs" }), "Paragraphs"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Incididunt ex adipisicing ea ullamco consectetur in voluptate proident fugiat tempor deserunt reprehenderit ullamco id dolore laborum. Do laboris laboris minim incididunt qui consectetur exercitation adipisicing dolore et magna consequat magna anim sunt. Officia fugiat Lorem sunt pariatur incididunt Lorem reprehenderit proident irure. Dolore ipsum aliqua mollit ad officia fugiat sit eu aliquip cupidatat ipsum duis laborum laborum fugiat esse. Voluptate anim ex dolore deserunt ea ex eiusmod irure. Occaecat excepteur aliqua exercitation aliquip dolor esse eu eu."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Officia dolore laborum aute incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Officia irure in non voluptate adipisicing sit amet tempor duis dolore deserunt enim ut. Reprehenderit incididunt in ad anim et deserunt deserunt Lorem laborum quis. Enim aute anim labore proident laboris voluptate elit excepteur in. Ex labore nulla velit officia ullamco Lorem Lorem id do. Dolore ullamco ipsum magna dolor pariatur voluptate ipsum id occaecat ipsum. Dolore tempor quis duis commodo quis quis enim."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Blockquotes" }), "Blockquotes"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Ad nisi laborum aute cupidatat magna deserunt eu id laboris id. Aliquip nulla cupidatat sint ex Lorem mollit laborum dolor amet est ut esse aute. Nostrud ex consequat id incididunt proident ipsum minim duis aliqua ut ex et ad quis. Laborum sint esse cillum anim nulla cillum consectetur aliqua sit. Nisi excepteur cillum labore amet excepteur commodo enim occaecat consequat ipsum proident exercitation duis id in."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.blockquote, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Ipsum et cupidatat mollit exercitation enim duis sunt irure aliqua reprehenderit mollit. Pariatur Lorem pariatur laboris do culpa do elit irure. Eiusmod amet nulla voluptate velit culpa et aliqua ad reprehenderit sit ut."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Labore ea magna Lorem consequat aliquip consectetur cillum duis dolore. Et veniam dolor qui incididunt minim amet laboris sit. Dolore ad esse commodo et dolore amet est velit ut nisi ea. Excepteur ea nulla commodo dolore anim dolore adipisicing eiusmod labore id enim esse quis mollit deserunt est. Minim ea culpa voluptate nostrud commodo proident in duis aliquip minim."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.blockquote, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Qui est sit et reprehenderit aute est esse enim aliqua id aliquip ea anim. Pariatur sint reprehenderit mollit velit voluptate enim consectetur sint enim. Quis exercitation proident elit non id qui culpa dolore esse aliquip consequat."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Ipsum excepteur cupidatat sunt minim ad eiusmod tempor sit."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.blockquote, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Deserunt excepteur adipisicing culpa pariatur cillum laboris ullamco nisi fugiat cillum officia. In cupidatat nulla aliquip tempor ad Lorem Lorem quis voluptate officia consectetur pariatur ex in est duis. Mollit id esse est elit exercitation voluptate nostrud nisi laborum magna dolore dolore tempor in est consectetur."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Adipisicing voluptate ipsum culpa voluptate id aute laboris labore esse fugiat veniam ullamco occaecat do ut. Tempor et esse reprehenderit veniam proident ipsum irure sit ullamco et labore ea excepteur nulla labore ut. Ex aute minim quis tempor in eu id id irure ea nostrud dolor esse."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Lists" }), "Lists"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h3, null, "Ordered List"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ol, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Longan"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Lychee"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, `Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.\r
Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Marionberry"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Melon", `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Cantaloupe"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Honeydew"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Watermelon"), `
`), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Miracle fruit"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Mulberry"), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h3, null, "Unordered List"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Olive"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Orange", `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Blood orange"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Clementine"), `
`), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Papaya"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Passionfruit"), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Horizontal" }), "Horizontal rule"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "In dolore velit aliquip labore mollit minim tempor veniam eu veniam ad in sint aliquip mollit mollit. Ex occaecat non deserunt elit laborum sunt tempor sint consequat culpa culpa qui sit. Irure ad commodo eu voluptate mollit cillum cupidatat veniam proident amet minim reprehenderit."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.hr, null), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "In laboris eiusmod reprehenderit aliquip sit proident occaecat. Non sit labore anim elit veniam Lorem minim commodo eiusmod irure do minim nisi. Dolor amet cillum excepteur consequat sint non sint."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Table" }), "Table"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Duis sunt ut pariatur reprehenderit mollit mollit magna dolore in pariatur nulla commodo sit dolor ad fugiat. Laboris amet ea occaecat duis eu enim exercitation deserunt ea laborum occaecat reprehenderit. Et incididunt dolor commodo consequat mollit nisi proident non pariatur in et incididunt id. Eu ut et Lorem ea ex magna minim ipsum ipsum do."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `| Table Heading 1 | Table Heading 2 | Center align | Right align | Table Heading 5 |\r
| :-------------- | :-------------- | :----------: | ----------: | :-------------- |\r
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Minim id consequat adipisicing cupidatat laborum culpa veniam non consectetur et duis pariatur reprehenderit eu ex consectetur. Sunt nisi qui eiusmod ut cillum laborum Lorem officia aliquip laboris ullamco nostrud laboris non irure laboris. Cillum dolore labore Lorem deserunt mollit voluptate esse incididunt ex dolor."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Code" }), "Code"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Inline code"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Ad amet irure est magna id mollit Lorem in do duis enim. Excepteur velit nisi magna ea pariatur pariatur ullamco fugiat deserunt sint non sint. Duis duis est ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "code in text"), " velit velit aute culpa ex quis pariatur pariatur laborum aute pariatur duis tempor sunt ad. Irure magna voluptate dolore consectetur consectetur irure esse. Anim magna ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "<strong>in culpa qui officia</strong>"), " dolor eiusmod esse amet aute cupidatat aliqua do id voluptate cupidatat reprehenderit amet labore deserunt."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Highlighted"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Et fugiat ad nisi amet magna labore do cillum fugiat occaecat cillum Lorem proident. In sint dolor ullamco ad do adipisicing amet id excepteur Lorem aliquip sit irure veniam laborum duis cillum. Aliqua occaecat minim cillum deserunt magna sunt laboris do do irure ea nostrud consequat ut voluptate ex."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.pre, null, /* @__PURE__ */ import_react10.default.createElement(_components.code, { className: "hljs language-go" }, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-keyword" }, "package"), ` main\r
\r
`, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-keyword" }, "import"), ` (\r
    `, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-string" }, '"fmt"'), `\r
    `, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-string" }, '"net/http"'), `\r
)\r
\r
`, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-function" }, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-keyword" }, "func"), " ", /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-title" }, "handler"), /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-params" }, "(w http.ResponseWriter, r *http.Request)")), ` {\r
    fmt.Fprintf(w, `, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-string" }, '"Hi there, I love %s!"'), ", r.URL.Path[", /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-number" }, "1"), `:])\r
}\r
\r
`, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-function" }, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-keyword" }, "func"), " ", /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-title" }, "main"), /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-params" }, "()")), ` {\r
    http.HandleFunc(`, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-string" }, '"/"'), `, handler)\r
    http.ListenAndServe(`, /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-string" }, '":8080"'), ", ", /* @__PURE__ */ import_react10.default.createElement(_components.span, { className: "hljs-literal" }, "nil"), `)\r
}
`)), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Ex amet id ex aliquip id do laborum excepteur exercitation elit sint commodo occaecat nostrud est. Nostrud pariatur esse veniam laborum non sint magna sit laboris minim in id. Aliqua pariatur pariatur excepteur adipisicing irure culpa consequat commodo et ex id ad."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#top" }, "[Top]")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, /* @__PURE__ */ import_react10.default.createElement("a", { name: "Inline" }), "Inline elements"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Sint ea anim ipsum ad commodo cupidatat do ", /* @__PURE__ */ import_react10.default.createElement(_components.strong, null, "exercitation"), " incididunt et minim ad labore sunt. Minim deserunt labore laboris velit nulla incididunt ipsum nulla. Ullamco ad laborum ea qui et anim in laboris exercitation tempor sit officia laborum reprehenderit culpa velit quis. ", /* @__PURE__ */ import_react10.default.createElement(_components.strong, null, "Consequat commodo"), " reprehenderit duis ", /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#!" }, "irure"), " esse esse exercitation minim enim Lorem dolore duis irure. Nisi Lorem reprehenderit ea amet excepteur dolor excepteur magna labore proident voluptate ipsum. Reprehenderit ex esse deserunt aliqua ea officia mollit Lorem nulla magna enim. Et ad ipsum labore enim ipsum ", /* @__PURE__ */ import_react10.default.createElement(_components.strong, null, "cupidatat consequat"), ". Commodo non ea cupidatat magna deserunt dolore ipsum velit nulla elit veniam nulla eiusmod proident officia."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, { src: "http://placekitten.com/1280/800", alt: "Super wide" })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.em, null, "Proident sit veniam in est proident officia adipisicing"), " ea tempor cillum non cillum velit deserunt. Voluptate laborum incididunt sit consectetur Lorem irure incididunt voluptate nostrud. Commodo ut eiusmod tempor cupidatat esse enim minim ex anim consequat. Mollit sint culpa qui laboris quis consectetur ad sint esse. Amet anim anim minim ullamco et duis non irure. Sit tempor adipisicing ea laboris ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "culpa ex duis sint"), " anim aute reprehenderit id eu ea. Aute ", /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#!" }, "excepteur proident"), " Lorem minim adipisicing nostrud mollit ad ut voluptate do nulla esse occaecat aliqua sint anim."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Reprehenderit non eu quis in ad elit esse qui aute id ", /* @__PURE__ */ import_react10.default.createElement(_components.a, { href: "#!" }, "incididunt"), " dolore cillum. Esse laboris consequat dolor anim exercitation tempor aliqua deserunt velit magna laboris. Culpa culpa minim duis amet mollit do quis amet commodo nulla irure."));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var mdx_projects_another_markdown_default = MDXContent, filename = "_mdx.projects.another-markdown.mdx", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// mdx:routes\_mdx.projects.crm-energiebelastingteruggaaf.mdx
var mdx_projects_crm_energiebelastingteruggaaf_exports = {};
__export(mdx_projects_crm_energiebelastingteruggaaf_exports, {
  attributes: () => attributes2,
  default: () => mdx_projects_crm_energiebelastingteruggaaf_default,
  filename: () => filename2,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta3
});
var import_react11 = __toESM(require("react")), attributes2 = {
  title: "CRM Energiebelastingteruggaaf",
  publishDate: "Jul 2022",
  meta: {
    title: "CRM Energiebelastingteruggaaf",
    publishDate: "Jul 2022",
    description: "Een customer relations manager gemaakt voor energiebelastingteruggaaf.nl."
  }
};
function MDXContent2(props = {}) {
  let _components = Object.assign({
    p: "p",
    img: "img",
    a: "a",
    ul: "ul",
    li: "li",
    h2: "h2"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, /* @__PURE__ */ import_react11.default.createElement(_components.img, { src: "/assets/images/screenshot-ebt.png", alt: "Screenshot of the main screen of energiebelastingteruggaaf's CRM" })), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "In the second year of my studies, I did an internship at ", /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https:chippr.dev" }, "Chippr"), ". Together with three fellow students, we worked on the energiebelastingteruggaaf.nl (EBT) project."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "EBT helps people claim back energy taxes. Previously, they worked solely from an Excel file with thousands of rows and dozens of columns, making it difficult to maintain an overview. Our task was to design and develop a customer relations manager (CRM) that would make it easier to find the right customers, communicate with them, and manage documents."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "My main responsibilities were:"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "Collaborating on the UX design"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "Developing web pages"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "Implementing interactive features"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "Collaborating with the backend developer"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "Conducting code reviews"), `
`), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "The initial design"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, `We started the project by doing a design sprint. We interviewed the client and the users to get a better understanding of the problem. We then created a user flow to visualize the process (which unfortunately i can't show). We also created a wireframe to get a better idea of the layout of the application. From there we quickly went to designing a high fidelity prototype. The design was worked on by two people, and I was one of them.\r
`, /* @__PURE__ */ import_react11.default.createElement(_components.img, { src: "/assets/images/screenshot-hf-prototype.png", alt: "Screenshot of the main screen of energiebelastingteruggaaf's CRM" })), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "With the prototype, we did a usability test with the client and the users. We got a lot of feedback, which we used to improve the design. After that, we started developing the application."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "The development"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The frontend of the application was built with ", /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://react.dev/" }, "React.js"), " and ", /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://4x.ant.design/" }, "Ant Design v4"), ". We used ", /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://www.atlassian.com/software/jira" }, "Jira"), ` to keep track of the tasks. We used ant design because it has a lot of components that we could use out of the box. This allowed us to focus on the functionality of the application instead of the design of the components.\r
Some other libraries we used were:`), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://reactrouter.com/" }, "react-router"), " for routing"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://react-query.tanstack.com/" }, "tanstack/react-query"), " for data fetching"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://stuk.github.io/jszip/" }, "js-zip"), " for creating zip files"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, { href: "https://day.js.org/" }, "dayjs"), " for date formatting"), `
`), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "What I worked on"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "I worked on the frontend of the application. I worked on the following pages:"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, `The main page, where the user can search for addresses and see a list of which addresses might be interesting as potential customers. I wrote the code for the table and the search bar, which allows the user to search through any of the properties of an address. I also wrote the code for all the different properties that can be sorted by.\r
`, /* @__PURE__ */ import_react11.default.createElement(_components.img, { src: "/assets/images/screenshot-hf-prototype.png", alt: "Screenshot of the main screen of energiebelastingteruggaaf's CRM" }), `\r
From this page the user can also import addresses from a CSV file.`), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "I worked on the table for property owners. The user can edit, and delete property owners. I wrote the code for the table and the different filters that can be applied to the table."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, `I was also responsible for creating the page for bulk uploading files belonging to an address. The user can upload multiple files at once, and the files are automatically linked to the address in the backend (which I did not work on). I also wrote the code for the file upload component.\r
`, /* @__PURE__ */ import_react11.default.createElement(_components.img, { src: "/assets/images/screenshot-file-upload.png", alt: "Screenshot of the bulk upload page of energiebelastingteruggaaf's CRM" })), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "The result"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The result is a fully functional CRM that allows the client to manage their customers. The application is currently in use by the client and is being used to manage hundreds of customers, and thousands of potential customers."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "What I learned"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "I learned a lot about working in a team."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "How to effectively collaborate on a project with other developers."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "How to use Jira to keep track of tasks."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "How to work with a REAL client to get feedback on the application."), `
`), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "I also learned a lot about writing quality code:"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "How to use React router."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "How to use React query."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "I learned how to use a component library, specifically Ant Design."), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "I learned a lot about using typescript"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.li, null, "I learned how to write more scalable code, by using generic types, and implementing code splitting."), `
`));
  return MDXLayout ? /* @__PURE__ */ import_react11.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var mdx_projects_crm_energiebelastingteruggaaf_default = MDXContent2, filename2 = "_mdx.projects.crm-energiebelastingteruggaaf.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta3 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// mdx:routes\_mdx.projects.munchie.mdx
var mdx_projects_munchie_exports = {};
__export(mdx_projects_munchie_exports, {
  attributes: () => attributes3,
  default: () => mdx_projects_munchie_default,
  filename: () => filename3,
  handle: () => handle3,
  headers: () => headers3,
  meta: () => meta4
});
var import_react12 = __toESM(require("react")), attributes3 = {
  title: "Munchie",
  publishDate: "May 2023",
  layout: "./BlogLayout",
  meta: {
    title: "Munchie",
    publishDate: "May 2023",
    description: "Munchie is my own startup project that I am working on together with 5 other students. It's a website that helps you and your friends match what you want to have for dinner."
  }
};
function MDXContent3(props = {}) {
  let _components = Object.assign({
    p: "p",
    img: "img",
    ul: "ul",
    li: "li",
    strong: "strong",
    hr: "hr",
    h2: "h2",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.img, { src: "/assets/images/munchie-header.png", alt: "Munchie" }), `\r
This semester I had the opportunity to work on a startup project together with 5 other students. It was an idea that I've had for a while, and I was really excited to finally get the chance to work on it. The idea is to create a website that helps you and your friends match what you want to have for dinner.`), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The team consists of:"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "Me (project lead, lead frontend developer, and designer)"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "A product owner"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "Another frontend developer"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "A backend developer"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "A backend developer / AI specialist"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "Another AI specialist"), `
`), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The project is still in its early stages, but we have a working prototype that we are currently testing with friends and family."), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.strong, null, "The website, it's designs, and this article, are a work in progress")), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.hr, null), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "The idea"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, `The idea is to create a website that helps you and your friends match what you want to have for dinner. You can create a group with your friends, and then you get recipes that you can swipe left or right to like or dislike them. The website will then match the dishes that you and your friends have swiped, and then it will show a match that you all want to have for dinner.\r
`, /* @__PURE__ */ import_react12.default.createElement(_components.img, { src: "/assets/images/munchie-cards.png", alt: "Munchie recipes" })), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "The design"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, `I've designed the website in Figma together with the product owner. We've tried to keep the design simple and fun, and we've tried to make it as easy as possible to use. We identified the minimum viable product, and then we designed the website around that, ensuring that the user can use the most important features without any problems. The first thing that the user can do is to create a group, and then they can invite their friends to join the group. I've designed these two screens:\r
`, /* @__PURE__ */ import_react12.default.createElement(_components.img, { src: "/assets/images/munchie-create-group.png", alt: "Munchie create group" })), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, `I also designed what the group screen looks like when you have joined or created a group. At the top it shows swiping sessions for days that have not yet passed. Underneath that it shows a list of all the users that are part of your group. At the bottom it shows a list of all the sessions that have been made in this group. The user can click on a session to see the results of that session.\r
`, /* @__PURE__ */ import_react12.default.createElement(_components.img, { src: "/assets/images/munchie-group.png", alt: "Munchie group" })), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, `And lastly i designed the screen that shows up when you have a match with your friends.\r
`, /* @__PURE__ */ import_react12.default.createElement(_components.img, { src: "/assets/images/munchie-match.png", alt: "Munchie match" })), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "The development"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "As both the project lead and the lead frontend developer, I have both the responsibility to think ahead and make sure that the project is moving forward, while also making sure that we don't get overwhelmed by the amount of work that needs to be done. I've been responsible for the development of the website. I've been working closely with the product owner to make sure that the website is developed according to the designs. I've also been working closely with the backend developers to make sure that the frontend and the backend work well together. I've also been working closely with the other frontend developer to make sure that we are on the same page, and that we are developing the website in the same way."), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The website is built with React Native using typescript, and we are using Expo to build the app. I chose to use React Native because I wanted to learn to use it, and because I eventually want to make the website into an app as well. I chose to use Expo because it makes it easy to build the app, and because it makes it easy to test the app on my phone and deploy it later on in the project."), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "We also use the following libraries:"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://reactnavigation.org/" }, "React Navigation"), " for navigation"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://www.npmjs.com/package/react-native-deck-swiper" }, "react-native-deck-swiper"), " for the swipe cards"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://swr.vercel.app/" }, "swr"), " for fetching data"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://www.npmjs.com/package/twrnc" }, "twrnc"), " for using tailwind css in react native"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://eslint.org/" }, "eslint"), " for linting"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://prettier.io/" }, "prettier"), " for formatting"), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.li, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, { href: "https://www.npmjs.com/package/husky" }, "husky"), " for running scripts before commits"), `
`), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "We use a websocket to communicate with the backend, so that we can get real time updates when a user swipes a card. For managing the state of the app we use the React context api."), `
`, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Setting up these libraries and implementing them, as well as the websocket and the context api, was my responsibility. I also implemented the swiping functionality."));
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var mdx_projects_munchie_default = MDXContent3, filename3 = "_mdx.projects.munchie.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta4 = typeof attributes3 < "u" && attributes3.meta, handle3 = typeof attributes3 < "u" && attributes3.handle;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b07b9533", entry: { module: "/build/entry.client-2BPTF6GF.js", imports: ["/build/_shared/chunk-6OUM6MXE.js", "/build/_shared/chunk-GL3UKHCO.js", "/build/_shared/chunk-3ASH7U2Y.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6KCRTOTJ.js", imports: ["/build/_shared/chunk-LD4TSE6E.js", "/build/_shared/chunk-DAVBEJF2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-NRN7YUZL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_mdx": { id: "routes/_mdx", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_mdx-TADW663Q.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_mdx.projects.another-markdown": { id: "routes/_mdx.projects.another-markdown", parentId: "routes/_mdx", path: "projects/another-markdown", index: void 0, caseSensitive: void 0, module: "/build/routes/_mdx.projects.another-markdown-VJD4G4SA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_mdx.projects.crm-energiebelastingteruggaaf": { id: "routes/_mdx.projects.crm-energiebelastingteruggaaf", parentId: "routes/_mdx", path: "projects/crm-energiebelastingteruggaaf", index: void 0, caseSensitive: void 0, module: "/build/routes/_mdx.projects.crm-energiebelastingteruggaaf-45VG6RAX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_mdx.projects.munchie": { id: "routes/_mdx.projects.munchie", parentId: "routes/_mdx", path: "projects/munchie", index: void 0, caseSensitive: void 0, module: "/build/routes/_mdx.projects.munchie-QQPP4K4H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action.set-theme": { id: "routes/action.set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action.set-theme-GQH4YVN5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-DZTBAUFJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-B07B9533.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action.set-theme": {
    id: "routes/action.set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: action_set_theme_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_mdx": {
    id: "routes/_mdx",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: mdx_exports
  },
  "routes/_mdx.projects.another-markdown": {
    id: "routes/_mdx.projects.another-markdown",
    parentId: "routes/_mdx",
    path: "projects/another-markdown",
    index: void 0,
    caseSensitive: void 0,
    module: mdx_projects_another_markdown_exports
  },
  "routes/_mdx.projects.crm-energiebelastingteruggaaf": {
    id: "routes/_mdx.projects.crm-energiebelastingteruggaaf",
    parentId: "routes/_mdx",
    path: "projects/crm-energiebelastingteruggaaf",
    index: void 0,
    caseSensitive: void 0,
    module: mdx_projects_crm_energiebelastingteruggaaf_exports
  },
  "routes/_mdx.projects.munchie": {
    id: "routes/_mdx.projects.munchie",
    parentId: "routes/_mdx",
    path: "projects/munchie",
    index: void 0,
    caseSensitive: void 0,
    module: mdx_projects_munchie_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
