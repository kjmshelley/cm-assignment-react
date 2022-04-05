/*
    Carb Core (v.0.0.1): Label.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is a basic label component.
        This IS NOT the same as the html form label.
        This component comes with default styles but the developer can also choose how to style this component how they see fit by passing in class names.
*/
import React from 'react';
import "./styles/index.css";

export default function Label({ text, className, styles }) {
  return (
    <div className={className} style={styles}>{ text }</div>
  )
}

Label.defaultProps = {
  text: "",
  className: "",
  styles: {}
};
