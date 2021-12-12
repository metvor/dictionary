import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

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
    <div className="searchForm">
        <form onSubmit={search}>
            <input type="search" placeholder="Search" autoFocus="on" onChange={handleKeyword}/>
            <input type="submit" value="Search"/>
            </form>
        <br/>
        <Results data={results} />
    </div>
);
}