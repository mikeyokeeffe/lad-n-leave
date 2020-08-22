/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import Proptypes from 'prop-types';
import CollectionItem from './collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(((item) => (
        <CollectionItem key={item.id} {...item}/>
      )))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: Proptypes.string.isRequired,
  items: Proptypes.array,
};

export default CollectionPreview;
