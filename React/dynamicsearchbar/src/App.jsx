import React from "react";

const App = () => {
  return (
    <div style={styles.root}>
      <input type="text" placeholder="Search products..." style={styles.input} />

      <div style={styles.suggestionContainer}>
        <div style={styles.suggestion}>
          <p style={styles.title}>Product title</p>
        </div>

        <div style={styles.suggestion}>
          <p style={styles.title}>Another product</p>
        </div>
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
styles.suggestion[':hover'] = {};

export default App;
