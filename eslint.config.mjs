// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";

export default withNuxt(
  js.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    rules: {
      // index.vue, default.vue などは単語1つでも許可
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index", "default", "error"],
        },
      ],
    },
  }
);
