/*
    Carb Core (v.0.0.1): LabelImage.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is a basic label component WITH an Image.
        The image is required to use this component.
        The image has to be an SVG.
        The developer can choose how to style this component however they see fit.
*/
import React from 'react';
import Label from "../Label";
import SVGImage from "../SVG";
import SVGContants from "../SVG/Constants";
import "./styles/index.css";

export default function LabelImage({ variant, text, styles, labelStyles, svgStyles }) {
    if (!variant || !SVGContants[variant]) return <div />;

    return (
    <div className="label-image" style={styles}>
        <div style={{ margin: "2px" }}>
            <SVGImage variant={variant} styles={svgStyles} />
        </div>
        <div style={{ margin: "2px" }}>
            <Label text={text} styles={labelStyles} />
        </div>
    </div>
  )
}

LabelImage.defaultProps = {
    text: "",
    styles: {},
    labelStyles: {},
    svgStyles: {}
}

