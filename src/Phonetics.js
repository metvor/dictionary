import React from "react";
import './Phonetics.css';

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <h5>{props.sound[0].text}</h5>
            <a href={props.sound[0].audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    );
}