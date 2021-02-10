import React from 'react';
import { useInput } from '../hooks/useInput';

function SearchTextInput(props: {initialValue: any, onChange?: Function}) {

  const { initialValue, onChange } = props

  const { bindProps } = useInput({initialValue, onChange});
  
  return (
    <div className="search-text-input">
        <input 
            type="search" 
            name="search"
            id="search"
            placeholder="Start typing to search .."
            autoComplete="off"
            {...bindProps}
        />
    </div>
  );
}

export default SearchTextInput;
