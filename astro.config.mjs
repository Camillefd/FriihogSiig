// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server", // Siderne bygges på serveren hver gang de besøges, i stedet for på forhånd, hvilket ikke er særligt bæredygtigt da den ellers bygger siderne på forhånd og det bruger ikke så meget strøm.
});
