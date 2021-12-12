import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    console.log(props.sound)
    return (
        <div className="Phonetics">
            <h5>{props.sound[0].text}</h5>
            <br/>
            <ReactAudioPlayer
            src={props.sound[0].audio}
            controls
            />
        </div>
    );
}