import React from "react";
import './Definition.css';

export default function Definition(props) {
    return (
        <div className="Definition">
            <p>{props.definition.definition}</p>
            <p className="example"><em>{props.definition.example}</em></p>
        </div>
    );
}