/*
    Carb Core (v.0.0.1): CardHeader.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is the header component for the Card component.
*/
import React from 'react';
import "./styles/index.css";

export default function CardHeader({ background, children, className }) {
  const backgroundImageStyle = background ? { position: "relative", background: `url(${background})` } : {};
  return (
    <div className={`${className} card-header`} style={backgroundImageStyle}>{ children }</div>
  )
}

CardHeader.defaultProps = {
  background: null,
  children: <div />,
  className: ""
};
