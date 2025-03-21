import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            'object-curly-spacing': ['warn', 'always'],
            '@typescript-eslint/no-unused-vars': ['error', {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }]
        }
    },
    tseslint.configs.recommended,
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react: pluginReact
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            "react/react-in-jsx-scope": "off"
        },
        extends: [pluginReact.configs.flat.recommended]
    }
]);
