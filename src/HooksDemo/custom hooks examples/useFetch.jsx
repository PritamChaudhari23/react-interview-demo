import { useState, useEffect } from "react";

// Custom Hook: useFetch
// Handles API calls with loading, error, and data states
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates on unmounted components
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

// Demo Component
export default function UseFetchExample() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
  const { data, loading, error } = useFetch(url);

  const handleFetchPosts = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
  };

  const handleFetchUsers = () => {
    setUrl("https://jsonplaceholder.typicode.com/users/1");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>useFetch Hook Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleFetchPosts} style={{ marginRight: "10px", padding: "10px 20px" }}>
          Fetch Posts
        </button>
        <button onClick={handleFetchUsers} style={{ padding: "10px 20px" }}>
          Fetch Users
        </button>
      </div>

      {loading && <p style={{ color: "blue" }}>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <div style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "4px" }}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
