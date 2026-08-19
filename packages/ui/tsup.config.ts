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
