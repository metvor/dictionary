import React from "react";

export default function Definition(props) {
    return (
        <div className="Definition">
            <p>{props.definition.definition}</p>
            <p><em>{props.definition.example}</em></p>
            <br/>
        </div>
    );
}