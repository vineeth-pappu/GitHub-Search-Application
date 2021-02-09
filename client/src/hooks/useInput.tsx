import { useState } from "react";

interface inputProps {
    initialValue: any,
    onChange?: Function,
}


export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: { target: { value: any; }; }) => {
        setValue(event.target.value);
      }
    }
  };
};
