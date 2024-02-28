import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero";

import { graphql } from "gatsby";

export default function Anthology({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Hero />
      <div className="wrapper">
        <h2 className="section-headline">Anthology 2023</h2>
        <div class="lg:flex">
          <p
            style={{
              display: "block",
            }}
            className="py-10 leading-relaxed whitespace-pre-line text-base md:text-lg"
          >
            "Life Without Day, Life Without Night" is an anthology of short
            works of fiction, penned and published by the Helsinki Writers
            Group, a motley cast of writers, poets, and in general creative
            people who love ideas and stories in written form. This collection
            is inspired by life in the Nordics, as well as by the various
            experiences of its authors and by loads of vivid imagination. It
            explores the anomalies and extremities within the spectrum between
            day and night. The anthology is dedicated to a life with or in too
            much light or too much darkness. These circumstances are expressed
            in prose and verse, taken literally or metaphorically, or sometimes
            both, and range from heavy ideas to light humor, or . . . sometimes
            both. We hope you will spend a good time in the worlds and minds
            laid down in the pages that follow, and that perchance you will come
            and visit them again. Enjoy!
          </p>
        </div>

        <div
          className="relative"
          style={{ paddingTop: "max(60%, 324px)", width: "100%", height: "0" }}
        >
          <iframe
            className="absolute border-none w-full h-full left-0 top-0"
            src="https://online.fliphtml5.com/srdwi/ofqa/index.html"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export const AnthologyPageQuery = graphql`
  query AnthologyPageQueryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
