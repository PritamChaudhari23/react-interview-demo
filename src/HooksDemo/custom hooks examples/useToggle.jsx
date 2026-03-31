import { useState } from "react";

// Custom Hook: useToggle
// Manages boolean state with toggle functionality
const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState(!state);

  return [state, toggle];
};

// Demo Component
export default function UseToggleExample() {
  const [isVisible, toggle] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h2>useToggle Hook Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={toggle} style={{ padding: "10px 20px", marginRight: "10px" }}>
          Toggle Visibility
        </button>
        {isVisible && (
          <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#e0e0e0", color: "#000" }}>
            This content is now visible!
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleDarkMode} style={{ padding: "10px 20px" }}>
          Toggle Dark Mode
        </button>
        <p>{isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</p>
      </div>
    </div>
  );
}
