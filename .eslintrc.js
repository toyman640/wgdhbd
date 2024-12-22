module.exports = {
  root: true,
  extends: ["next/core-web-vitals"], // Next.js recommended rules
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn", // Replace the TypeScript rule with JS equivalent
    "react/react-in-jsx-scope": "off", // Not required for Next.js
  },
};
