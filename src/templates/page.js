import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import FacebookEvents from "../components/facebook-events";
import ContactForm from "../components/contact-form";

const sectionComponents = {
  FacebookEvents: FacebookEvents,
  ContactForm: ContactForm,
};

const Page = ({ data }) => {
  const title = data.contentfulPage.title;
  const sections = data.contentfulPage.sections;

  return (
    <Layout>
      <h1>{title}</h1>
      {sections.map((section) => {
        const components = section.components;

        return (
          <section>
            <h2>{section.title}</h2>
            {components.map((component) => {
              const name = component.name;
              const SectionComponent = sectionComponents[name];

              return <SectionComponent />;
            })}
          </section>
        );
      })}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      sections {
        title
        components {
          name
        }
      }
    }
  }
`;
