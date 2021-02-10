import { useState } from "react";

interface inputProps {
    initialValue: any,
    onChange?: Function,
}


export const useInput = (props: inputProps) => {
  const [value, setValue] = useState(props.initialValue);

  const setValueHandler = (value: any) => {
    setValue(value);
    // invoke the callback if present
    props.onChange && props.onChange(value)
  }

  return {
    value,
    setValue,
    reset: () => setValueHandler(""),
    bindProps: {
      value,
      onChange: (event: { target: { value: any; }; }) => {
        setValueHandler(event.target.value);
      }
    }
  };
};
