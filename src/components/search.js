import React from "react";
import { render } from "react-dom";
import { InstantSearch, Highlight } from "react-instantsearch/dom";
import { connectAutoComplete } from "react-instantsearch/connectors";
import Autocomplete from "downshift";

function RecipeAutoComplete({ refine, hits }) {
  return (
    <Autocomplete
      itemToString={(i) => (i ? i.title : i)}
      onChange={(item) => window.___history.push(`/article/${item.slug}.html`)}
    >
      {({
        getInputProps,
        getItemProps,
        selectedItem,
        highlightedIndex,
        isOpen,
      }) => (
        <div>
          <input
            placeholder="Type a search term"
            className="search-input"
            {...getInputProps({
              onChange(e) {
                refine(e.target.value);
              },
            })}
          />
          {isOpen && (
            <div className="search-result">
              {hits.map((item, index) => (
                <div
                  className="search-result__item"
                  key={item.title}
                  {...getItemProps({
                    item,
                    index,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? "#e3e3e6" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal",
                    },
                  })}
                >
                  <Highlight attributeName="title" hit={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Autocomplete>
  );
}

const AutoCompleteWithData = connectAutoComplete(RecipeAutoComplete);

function Search() {
  return (
    <InstantSearch
      appId="Y2I5QFCYKK"
      apiKey="136c1cd12191e4210056cac151b83919"
      indexName="dev_WRITERSGROUP"
    >
      <AutoCompleteWithData />
    </InstantSearch>
  );
}

export default Search;
