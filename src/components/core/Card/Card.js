/*
    Carb Core (v.0.0.1): Card.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is the top level component for the Card component.
*/
import React from 'react';
import "./styles/index.css";

export default function Card({ background, children, className }) {
  const backgroundImageStyle = background ? { position: "relative", background: `url(${background})` } : {};
  return (
    <div className={`${className} card`} style={backgroundImageStyle}>{ children }</div>
  )
}

Card.defaultProps = {
  background: "",
  children: <div />,
  className: "",
};
