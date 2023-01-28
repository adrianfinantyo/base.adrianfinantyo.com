import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Adrian Finantyo's Knowledge Center",
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/kc-logo.png",
        },
      ],
      description:
        "KC stands for Knowledge Center is Adrian Finantyo's knowledge base that is a place where I can put my personal documentation/notes/any references which work for me (so I don't have to open multiple tabs or sweep through a whole article even though I already have read it before). Most of it may be opinionated and not work for everyone, but feel free to explore and use the content here as your reference if you find it useful.",
      canonical: "https://kc.adrianfinantyo.com/",
      openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://kc.adrianfinantyo.com/",
        site_name: "KC - Adrian Finantyo",
        images: [
          {
            url: "https://kc.adrianfinantyo.com/kc-logo.png",
            width: 800,
            height: 600,
            alt: "KC Logo",
          },
        ],
      },
    };
  },
  logo: (
    <span>
      📖<b>KC</b> adrianfinantyo
    </span>
  ),
  project: {
    link: "https://github.com/adrianfinantyo",
  },
  chat: {
    link: "https://discordapp.com/users/283572338577113088",
  },
  docsRepositoryBase: "https://github.com/adrianfinantyo/base.adrianfinantyo.com/tree/main",
  footer: {
    text: (
      <div>
        <p>
          2023 © Made with ❤️ by <a href="https://adrianfinantyo.com">Adrian Finantyo</a>
        </p>
        <p>
          <small>
            This website are made using <a href="https://nextra.vercel.app">Nextra</a> and{" "}
            <a href="https://nextjs.org">Next JS</a>
          </small>
        </p>
      </div>
    ),
  },
  gitTimestamp: false,
};

export default config;
