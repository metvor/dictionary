import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Image from './Image.js';


export default function Dictionary() {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
let [image, setImage] = useState(null);

function imageApi(response) {
    setImage(response.data.photos);
}

function DictionaryApi(response) {
    setResults(response.data[0]);
}

function search(event) {
    event.preventDefault();
    const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(DictionaryApi);

    const imageApiKey = `563492ad6f91700001000001425a7b5524894feaaea2d8a9f25d2728`;
    const imageApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${imageApiKey}` };
    axios.get(imageApiUrl, { headers: headers }).then(imageApi);


}

function handleKeyword(event) {
 setKeyword(event.target.value);
}


return (
    <div className="Dictionary">
        <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
            <input className="form-control" type="text" placeholder="search" aria-label="default input example" onChange={handleKeyword}></input>
            </form>
            <p>i.e. paris, wine, yoga, coding</p>
        </section>
        <br/>
        <Results data={results} />
        <Image image={image} />
    </div>
);
}