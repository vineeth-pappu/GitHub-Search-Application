import { useState, useCallback, useEffect } from "react";
import debounce from 'lodash.debounce'

interface inputProps {
  initialValue: any,
  onChange: Function,
  debounceTime: number,
}

export const useInput = (props: inputProps) => {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = () => {
    // invoke the callback if present
    return props.onChange ? props.onChange(value) : () => { }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedValueHandler = useCallback(debounce(handleChange, props.debounceTime), [value]);


  useEffect(() => {
    delayedValueHandler();

    // Cancel the debounce on useEffect cleanup.
    return delayedValueHandler.cancel;
  }, [value, delayedValueHandler]);


  return {
    value,
    setValue,
    reset: () => setValue(""),
    bindProps: {
      value,
      onChange: (event: { target: { value: any; }; }) => {
        setValue(event.target.value);
      }
    }
  };
};
