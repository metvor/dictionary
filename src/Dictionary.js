import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';


export default function Dictionary() {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleApi(response) {
    setResults(response.data[0]);
}

function search(event) {
    event.preventDefault();
    const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleApi);
}

function handleKeyword(event) {
 setKeyword(event.target.value);
}


return (
    <div className="Dictionary">
        <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
            <input class="form-control" type="text" placeholder="search" aria-label="default input example" onChange={handleKeyword}></input>
            </form>
            <p>i.e. paris, wine, yoga, coding</p>
        </section>
        <br/>
        <Results data={results} />
    </div>
);
}