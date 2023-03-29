<demo>
    支持 v-model 进行数据双向绑定
</demo>
<template>
  <div>
    <Input v-model="message"> </Input>
    <p>message: {{ message }}</p>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { Input } from "../lib/index";
export default {
  setup() {
    let message = ref("hello world");
    return { message };
  },
  components: {
    Input,
  },
};
</script>
