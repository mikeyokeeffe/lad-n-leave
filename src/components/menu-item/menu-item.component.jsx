import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default MenuItem;
