"use client"
import React from 'react';
import AutoComplete from '@/components/AutoComplete';

const Search = () => {
    const staticData = [
        "apple",
        "banana", 
        "orange", 
        "mango", 
        "grape", 
        "pear", 
        "pineapple", 
        "strawberry", 
        "blueberry", 
        "peach", 
        "kiwi", 
        "cherry", 
        "plum", 
        "papaya", 
        "watermelon", 
        "raspberry"]

    const fetchSuggestions = async (query) => {
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        if(!res.ok) {
            throw new Error("Failed to fetch data");    
        }
        const data = await res.json();
        return data.recipes;
    };

    return (
        <div className='container'>
            <h1>AutoComplete / Typeahead</h1>
            <AutoComplete 
            placeholder="Type something"
            staticData={staticData}
            fetchSuggestions={fetchSuggestions}
            dataKey={"name"}
            customLoading={<>Loading...</>}
            onSelect={(res) => console.log(res)}
            onChange={(input) => {}}
            onBlur={(e) => {}}
            onFocus={(e) => {}}/>
        </div>
    )
}

export default Search;