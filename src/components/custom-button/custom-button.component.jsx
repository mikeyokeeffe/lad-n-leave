import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
