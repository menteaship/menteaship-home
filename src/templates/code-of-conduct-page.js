import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

//TODO: Clean up these classes
//TODO: Pane/Card?

export const CodeOfConductTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1>{title}</h1>
              <br />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CodeOfConductTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CodeOfConduct = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <CodeOfConductTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

CodeOfConduct.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CodeOfConduct;

export const CodeOfConductQuery = graphql`
  query CodeOfConduct($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
