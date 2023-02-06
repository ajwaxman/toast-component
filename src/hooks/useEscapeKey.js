import { useEffect } from "react";

function useEscapeKey(escapeAction, element = document) {
  useEffect(() => {
    const keyPressed = (e) => {
        // If the escape key is pressed...
        if (e.keyCode === 27) {
            escapeAction();
        }
    }

    element.addEventListener("keydown", keyPressed);
    
    return () => {
        document.removeEventListener("keydown", keyPressed);
    }
  }, [escapeAction, element])
}

export default useEscapeKey;