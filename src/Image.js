import React from "react";
import "./Image.css";

export default function Image(props) {
    if (props.image) {
        console.log(props.image)
        return (
            <div className="Image">
                <section>
                    <div className="row">
                {props.image.map(function (photo, index) {
                    return (
                        <div className="col-4" key={index}>
                        <img src={photo.src.landscape} alt={photo.alt} className="img-fluid"/>
                        </div>
                    )
                })}
                        </div>
                </section>
            </div>
    
        );
    } else {
        return null;
    }
}

