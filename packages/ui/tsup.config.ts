import { copy } from "esbuild-plugin-copy";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next", "next/link"],
  // esbuild silently drops "use client" directives from source files when
  // bundling multiple modules into one output -- there's no per-file
  // preservation without code-splitting into many chunks. Since every
  // component in this package is meant to run in the browser (and some,
  // like SlotGrid, attach event handlers directly), the whole package is
  // client-only. Banner it here instead of chasing which file needs it.
  banner: {
    js: '"use client";',
  },
  esbuildPlugins: [
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["src/styles/*.css"],
        to: ["dist"],
      },
      watch: true,
    }),
  ],
  onSuccess: async () => {
    const { execSync } = await import("node:child_process");
    execSync(
      "node -e \"require('fs').mkdirSync('dist',{recursive:true});const fs=require('fs');const files=['tokens.css','base.css','components.css'];const out=files.map(f=>fs.readFileSync('src/styles/'+f,'utf8')).join('\\n');fs.writeFileSync('dist/styles.css',out);\"",
    );
  },
});
