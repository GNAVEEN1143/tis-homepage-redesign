import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${clientX}px`;
          cursorRef.current.style.top = `${clientY}px`;
        }
      });
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, input, textarea"
      );

      if (cursorRef.current) {
        cursorRef.current.classList.toggle(
          "cursor-hover",
          Boolean(interactiveElement)
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}

export default CustomCursor;