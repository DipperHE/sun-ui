<template>
  <div>
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    <Demo :component="Input1Demo" />
    <Demo :component="Input2Demo" />
  </div>
</template>
<script lang="ts">
import Input1Demo from "./Input1.demo.vue";
import Input2Demo from "./Input2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Input1Demo, Input2Demo };
  },
};
</script>
