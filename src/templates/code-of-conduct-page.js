import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const CodeOfConductTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container ">
      <div className="card">
        <h1 className="card-header bg-secondary">{title}</h1>
        <div className="card-body">
          <PageContent className="card-text" content={content} />
        </div>
      </div>
    </div>
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
