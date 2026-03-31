import { useState } from "react";

// Custom Hook: useInput
// Manages form input state with reset functionality
const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind, reset];
};

// Demo Component
export default function UseInputExample() {
  const [email, emailBind, resetEmail] = useInput("");
  const [name, nameBind, resetName] = useInput("");

  const handleReset = () => {
    resetEmail();
    resetName();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
    handleReset();
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>useInput Hook Example</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            {...nameBind}
            placeholder="Enter your name"
            style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            {...emailBind}
            placeholder="Enter your email"
            style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
          />
        </div>

        <button type="submit" style={{ marginRight: "10px", padding: "10px 20px" }}>
          Submit
        </button>
        <button type="button" onClick={handleReset} style={{ padding: "10px 20px" }}>
          Reset
        </button>
      </form>
    </div>
  );
}
