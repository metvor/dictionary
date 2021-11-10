import React from "react";

export default function Results(props) {

    return (
    <div className="Results text-capitalize">
    <h1 className="searchWord">{props.data.word}</h1>
    <ul className="definitions">
        <li>{props.data.type}</li>
        <li>{props.data.definition}</li>
        <li>{props.data.phonetic}</li>
    </ul>
    </div>
    );

}