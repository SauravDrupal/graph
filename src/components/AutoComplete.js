"use client"

import React, {useCallback, useEffect, useState} from 'react'
import SuggestionsList from './SuggestionsList';
import debounce from 'lodash/debounce';

const AutoComplete = ({
    placeholder,
    staticData,
    fetchSuggestions,
    dataKey,
    customLoading,
    onSelect,
    onChange,
    onBlur,
    onFocus,
    customStyle}) => {
        const [inputValue, setInputValue] = useState("");
        const [suggestions, setSuggestions] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        let debounceTimer;
        console.log(suggestions)
        const handleInputChange = (e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
        }

        const getSuggestions = async (value) => {
            setError(null);
            setLoading(true);
            try {
                let result;
                result = await fetchSuggestions(value);
                setSuggestions(result);
            } catch (err) {
                setError(err);
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        }

        const getSuggestionsDebounced = useCallback(
            debounce(getSuggestions, 500),
            []
        );

        useEffect(() => {
            if(inputValue.length > 1){
                getSuggestionsDebounced(inputValue);
            }else{
                setSuggestions([]);
            }
        }, [inputValue])


        const handleSuggestionClick = (suggestion) => {
            setInputValue(dataKey ? suggestion[dataKey] : suggestion);
            onSelect(suggestion);
            setSuggestions([]);
        }
     
  return (
    <div className="container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder={placeholder} className='p-2 text-2xl font-bold text-black bg-white rounded shadow shadow-black'/>
        {suggestions.length > 0 && 
            <ul>
                {error && <div className="text-red-500">{error}</div>}
                {loading && <div className="text-blue-500">{customLoading}</div>}
                <SuggestionsList suggestions={suggestions} dataKey={dataKey} highlight={inputValue} onSuggestionClick={handleSuggestionClick}/>
            </ul>
        }
    </div>
  )
}

export default AutoComplete