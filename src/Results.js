import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
if (props.data) {
    return (
    <div className="Results">
        <section>
        <h1 className="text-capitalize">{props.data.word}</h1>
        <br/>
        <Phonetics sound={props.data.phonetics} />
        </section>
        <br/>
        {props.data.meanings.map(function (meaning, index) {
           return ( 
               <div key={index}>
           <section>
            <Meaning meaning={meaning} />
            </section>
            <br/>
            </div>
           );
        })}
    </div>
);
} else {
    return null;
}
}