import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const CodeOfConductPreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

CodeOfConductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CodeOfConductPreview;
