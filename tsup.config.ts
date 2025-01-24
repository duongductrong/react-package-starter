import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
  injectStyle: false,
  format: ["cjs", "esm"],
  external: ["react", "react-dom"],
})
