<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 1.2rem;
}
</style>
