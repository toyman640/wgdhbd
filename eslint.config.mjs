import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"), // Extends the Next.js recommended ESLint rules
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Ensure support for ES Modules
    },
    rules: {
      "no-unused-vars": "warn", // Example rule to suppress unused variable errors
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require React in scope
    },
  },
];
