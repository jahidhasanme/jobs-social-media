// This is a custom hook which does
// It resize the page containers according of viewport height

import { useCallback, useEffect, useRef } from "react";

export const useAdjustHeight = (offset) => {
  // Getting the element ref
  const ref = useRef(null);

  // make adjustHeight function which will check if ref.current exist if it is the creating a variable name of newHeight
  // which set the container height based of innerHeight and used the useCallback hook to prevent unnecessary re-renders
  const adjustHeight = useCallback(() => {
    if (ref.current) {
      const newHeight = window.innerHeight - offset;
      ref.current.style.height = `${newHeight}px`;
    }
  }, [offset]);

  useEffect(() => {
    // adjusting height on every first render
    adjustHeight();

    // adjusting height on re-sizing
    window.addEventListener("resize", adjustHeight);

    // removing eventlistener on page unmount
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, [adjustHeight]);

  // returning the reference
  return ref;
};
