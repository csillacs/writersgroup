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
        <h2 className="section-headline">Anthology 2025</h2>
        <div class="lg:flex">
          <p
            style={{
              display: "block",
            }}
            className=" leading-relaxed whitespace-pre-line text-base md:text-lg pt-0 pb-10"
          >
            This collection of poems and short stories, entitled "Rot & Ruin", is dedicated to everything and anything that is due for, undergoes, or suffers the aftermath of decay, devaluation, deterioration, discombobulation, disintegration, and a lot of other processes starting with "d". It is not all doom and gloom, however, as so often rot and ruin can serve to contrast and to remind us of what fares well and what is wholesome. So often, rot and ruin is not the end, but just another step within the universal cycle, right before rebirth.<br />
            <br />
            We hope that you, the Reader, will enjoy exploring our takes on the theme and the fruits of our imagination, both sweet and sour. Most of all, we hope that you will come again for another bite!<br />
            <br />
            Bon appétit!
          </p>
        </div>
        <div
          className="relative"
          style={{ paddingTop: "max(80%, 600px)", width: "100%", height: "0" }}
        >
          <iframe
            className="absolute border-none w-full h-full left-0 top-0 pb-0 pt-0"
            src="https://online.fliphtml5.com/ygfim/HWG_2025_Anthology_final"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div class="lg:flex">
          <p
            style={{
              display: "block",
            }}
            className="py-10 leading-relaxed whitespace-pre-line text-base md:text-lg pt-5 pb-10"
          >
            To read best, enter full screen mode (via the three dots in the lower-right corner) or open <span className="hover:text-gray-600 hover:underline pt-0"><a href="https://online.fliphtml5.com/ygfim/HWG_2025_Anthology_final" target="_blank" rel="noreferrer">&lt; THIS LINK &gt; </a></span> in a new tab.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <h2 className="section-headline pt-10">Archive</h2>
        <div class="lg:flex">
          <h3 className="hover:text-gray-600 hover:underline pt-0 pb-10">
            <a href="https://online.fliphtml5.com/srdwi/ezpk/" target="_blank" rel="noreferrer">
              Anthology 2023: "Life Without Day, Life Without Night"
            </a>
          </h3>
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
