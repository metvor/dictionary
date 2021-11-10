import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {

let [keyword, setKeyword] = useState("");
let [definition, setDefinition] = useState({});

function handleApi(response) {
    console.log(response);
 setDefinition({   
    definition: response.data[0].meanings[0].definitions[0].definition,
    synonym: response.data[0].meanings[0].definitions[0].synonyms[0],
    type: response.data[0].meanings[0].partOfSpeech,
    phonetic: response.data[0].phonetics[0].text,
    word: response.data[0].word
});
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
            <input type="submit" />
            </form>
        <Results data={definition} />
    </div>
);
}