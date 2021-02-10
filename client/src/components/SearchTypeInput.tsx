import React from 'react';
import { useInput } from '../hooks/useInput';

function SearchTypeInput(props: {initialValue: any, onChange?: Function}) {

  const { initialValue, onChange } = props

  const { bindProps } = useInput({initialValue, onChange});
  
  return (
    <div className="search-type-input select-input-wrapper">
        <select name="type" id="type" {...bindProps}>
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
        </select>
    </div>
  );
}

export default SearchTypeInput;