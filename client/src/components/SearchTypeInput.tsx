import React from 'react';
import { useInput } from '../hooks/useInput';
import { GITHUB_SEARCH_TYPES } from '../config/constants';

const SEARCH_TYPE_OPTIONS = Object.keys(GITHUB_SEARCH_TYPES).map(key => ({
        label: GITHUB_SEARCH_TYPES[key],
        value: key
    }))

function SearchTypeInput(props: { initialValue: any, onChange?: Function, debounceTime?: number }) {

  const { initialValue, onChange = () => { }, debounceTime = 0 } = props

  const { bindProps } = useInput({ initialValue, onChange, debounceTime });

  return (
    <div className="search-type-input select-input-wrapper">
      <select name="type" id="type" {...bindProps}>
          {
            SEARCH_TYPE_OPTIONS.map((item, index) => (
                <option key={index} value={item.value}>{ item.label }</option>
            ))
          }
      </select>
    </div>
  );
}

export default SearchTypeInput;
