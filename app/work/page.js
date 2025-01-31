// CustomCursor.js

"use client";  // React ko client component batane ke liye

import { useRef } from "react";

const CustomCursor = () => {
  // Refs to store cursor elements
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  // Component mount hone ke baad hi code chale
  if (typeof window !== 'undefined') {
    // Create custom cursor elements when the component is mounted
    const cursor = document.createElement("div");
    const dot = document.createElement("div");

    cursor.id = "custom-cursor";
    dot.id = "cursor-dot";

    // Append cursors to the body
    document.body.appendChild(cursor);
    document.body.appendChild(dot);

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
      // Update cursor positions
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    });

    // Cleanup when component is unmounted
    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(dot);
    };
  }

  return null;
};

export default CustomCursor;
