import { resolve } from "node:path";

/**
 * config
 *
 * Provides Vite config settings required to build Gutenberg blocks
 *
 * @see https://vitejs.dev/guide/api-plugin.html#config
 */
export const config = () => {
	const pwd = process.env.PWD;
	const block = pwd.split("/").pop();

	return {
		define: { "process.env.NODE_ENV": `"${process.env.NODE_ENV}"` },
		build: {
			lib: {
				entry: resolve(pwd, "src/index.jsx"),
				name: "index",
				formats: ["iife"],
				fileName: () => "index.js",
			},
			outDir: resolve(pwd, "../../../build/" + block),
			rollupOptions: {},
			target: "esnext",
			minify: true,
			cssCodeSplit: true, // This option stops the default `styles.css` from being bundled
		},
	};
};
