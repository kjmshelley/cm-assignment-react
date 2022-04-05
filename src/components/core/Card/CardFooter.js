/*
    Carb Core (v.0.0.1): CardFooter.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose: NOT IMPLEMENTED
*/
import React from 'react';
import "./styles/index.css";

export default function CardFooter({ styles, children }) {
  return (
    <div className="card-footer" style={styles}>{ children }</div>
  )
}

CardFooter.defaultProps = {
  children: <div />,
  styles: {}
};
