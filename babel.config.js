// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        "flow": false,
        "typescript": true
      }
    ],
    [
      "@babel/preset-typescript",
      {
        "isTSX": true,
        "allExtensions": true
      }
    ]
  ],
  plugins: ["@babel/plugin-syntax-class-properties", "react-auto-binding"]
}