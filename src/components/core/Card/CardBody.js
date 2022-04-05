/*
    Carb Core (v.0.0.1): CardBody.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is the body component for the Card component.
*/
import React from 'react';
import "./styles/index.css";

export default function Body({ children, styles, className }) {
  return (
    <div className={`${className} card-body`} style={styles}>{ children }</div>
  )
}

Body.defaultProps = {
  children: <div />,
  className: ""
};