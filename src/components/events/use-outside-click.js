import { useEffect } from "react";

/**
 * A custom hook that listens for clicks outside a specified element.
 * 
 * @param {React.RefObject} ref - A React reference to the element to detect outside clicks for.
 * @param {function} callback - A callback function to execute when an outside click is detected.
 */
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // If clicking on the referenced element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Call the callback if the click is outside the referenced element
      callback(event);
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Run this effect whenever the ref or callback changes
};
