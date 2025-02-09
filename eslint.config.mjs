import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import _import from "eslint-plugin-import";
import js from "@eslint/js";
import _import from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const prettierConfig = [
  {
    ignores: ["components/ui/**/*"],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),
  {
    plugins: _import,

    plugins: _import,

    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          pathGroups: [
            {
              pattern: "@app/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: "@app/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      camelcase: "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-use-before-define": "warn",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
  },
];

export default prettierConfig;
