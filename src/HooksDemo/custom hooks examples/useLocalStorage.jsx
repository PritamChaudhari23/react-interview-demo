import { useState, useEffect } from "react";

// Custom Hook: useLocalStorage
// Persists state to local storage and syncs across component re-renders
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Demo Component
export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("name", "");
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [newFavorite, setNewFavorite] = useState("");

  const handleAddFavorite = () => {
    if (newFavorite.trim()) {
      setFavorites([...favorites, newFavorite]);
      setNewFavorite("");
    }
  };

  const handleRemoveFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  const handleClearStorage = () => {
    setName("");
    setFavorites([]);
    setNewFavorite("");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>useLocalStorage Hook Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
        />
        <p>Stored Name: <strong>{name || "Not set"}</strong></p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Add Favorite:</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={newFavorite}
            onChange={(e) => setNewFavorite(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddFavorite()}
            placeholder="Enter favorite item"
            style={{ padding: "8px", flex: 1 }}
          />
          <button onClick={handleAddFavorite} style={{ padding: "8px 16px" }}>
            Add
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Favorites List:</h3>
        {favorites.length === 0 ? (
          <p>No favorites added yet</p>
        ) : (
          <ul>
            {favorites.map((favorite, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {favorite}
                <button
                  onClick={() => handleRemoveFavorite(index)}
                  style={{ marginLeft: "10px", padding: "4px 8px", backgroundColor: "#ff6b6b", color: "white" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleClearStorage} style={{ padding: "10px 20px", backgroundColor: "#999", color: "white" }}>
        Clear All Storage
      </button>
    </div>
  );
}
