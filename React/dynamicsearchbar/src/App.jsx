import React, { useEffect, useState } from "react";
//https://dummyjson.com/products/search?q=phone
const App = () => {
  const [query, setQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);

  async function getData() {
    if (query.trim().length == 0) return;
    console.log("search Api called for query   " , query)
    let data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    let jsonData = await data.json();
    setSearchSuggestion(jsonData.products);
  }
  useEffect(() => {
    getData();
  }, [query]);
  return (
    <div style={styles.root}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search products..."
        style={styles.input}
      />

      <div style={styles.suggestionContainer}>
        {query.trim().length !== 0 &&
          searchSuggestion.map((pObj) => {
            return (
              <div style={styles.suggestion}>
                <p style={styles.title}>{pObj.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const styles = {
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 60,
    background: "#f5f5f5",
    fontFamily: "sans-serif",
  },

  input: {
    width: "350px",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "0.2s",
  },

  suggestionContainer: {
    width: "350px",
    marginTop: "10px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },

  suggestion: {
    padding: "12px 16px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    transition: "0.2s",
  },

  title: {
    fontSize: "14px",
    color: "#333",
    margin: 0,
  },
};

// Add hover using JS because inline CSS cannot do :hover
styles.suggestion[":hover"] = {};

export default App;
