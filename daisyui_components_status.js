// daisyui_components_status.js
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function () {
  // Define custom components
  const components = {
    ".custom-select": {
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      width: "100%",
      maxWidth: "300px",
      appearance: "none",
    },
  };
});
