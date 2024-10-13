import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import perfPlugin from "eslint-plugin-perfectionist";
import regexpPlugin from "eslint-plugin-regexp";
import markdownPlugin from "eslint-plugin-markdown";
import path from "path";
import { fileURLToPath } from "url";

const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...astroPlugin.configs.recommended,
	// perfPlugin.configs["recommended-natural"],
	regexpPlugin.configs["flat/recommended"],
  ...markdownPlugin.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
			ecmaVersion: "latest",
			sourceType: "module",
			parser: tsParser,
			parserOptions: {
				project: true,
				tsconfigRootDir: __dirname,
			},
		},
		ignores: [
			"**/node_modules",
			"**/dist",
			"**/.github",
			"**/.changeset",
			"**/astro.config.ts",
			"**/tailwind.config.ts",
			"**/site.config.ts",
		],
		plugins: {
			tsPlugin: tsPlugin,
			astroPlugin: astroPlugin,
			// perfPlugin: perfPlugin,
			regexpPlugin: regexpPlugin,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ ignoreRestSiblings: true, varsIgnorePattern: "Props" },
			],
			"@typescript-eslint/no-var-requires": "warn",
		},
	},
	{
		files: ["*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				extraFileExtensions: [".astro"],
				parser: tsParser,
			},
		},
		rules: {
			"astro/jsx-a11y/no-redundant-roles": [
				"error",
				{
					ol: ["list"],
					ul: ["list"],
				},
			],
		},
	},
	{
		files: ["**/*.md"],
		processor: "markdown/markdown",
	},
];
