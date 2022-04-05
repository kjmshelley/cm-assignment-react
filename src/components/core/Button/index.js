/*
    Carb Core (v.0.0.1): Button.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        A simple div that simulates a button html control with just the click event.
*/
import React from 'react';
import "./styles/index.css";

export default function Button({ styles, className, text, onClick }) {
  return (
    <div className={`button ${className}`} style={styles} onClick={onClick}>
        {text}
    </div>
  )
}

Button.defaultProps = {
  text: "",
  styles: {},
  className: "",
  onClick: () => {}
};
