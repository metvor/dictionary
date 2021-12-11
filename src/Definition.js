import React from "react";

export default function Definition(props) {
    console.log(props.definition)
    return (
        <div className="Definition">
            <p>{props.definition.definition}</p>
            <br />
            <p>{props.definition.example}</p>

        </div>
    );
}