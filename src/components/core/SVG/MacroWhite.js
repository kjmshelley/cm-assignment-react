import React from "react";

export default function MacroWhite({ styles }) {
    return (
        <svg style={styles} width="3" height="3" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" fill="#FFF"/>
        </svg>
    )
}

MacroWhite.defaultProps = {
    styles: {},
};