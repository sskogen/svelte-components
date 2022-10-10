import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// To compile .scss in svelte
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //Compile Svelte components without 'element' in the name as normal Svelte components
    svelte({
      preprocess: sveltePreprocess({}),
      exclude: /\.element\.svelte$/,
      // Bundle css into javascript (don't emit as standalone css file)
      emitCss: false,
    }),
    //Compile Svelte components with 'element' in the name as custom elements
    svelte({
      preprocess: sveltePreprocess(),
      include: /\.element\.svelte$/,
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
});
