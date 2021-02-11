import { useCallback } from "react";

export const useNumberFormat = () => useCallback( (value: number) => {
    if (value > 999 && value < 1000000) {
        // convert to K for number from > 1000 < 1 million 
        return (value/1000).toFixed(0) + 'K';
    } else if (value > 1000000) {
        // convert to M for number from > 1 million 
        return (value/1000000).toFixed(0) + 'M'; 
    } else if (value < 900) {
        // if value < 1000, nothing to do
        return value; 
    } else {
        return value
    }
}, [])
