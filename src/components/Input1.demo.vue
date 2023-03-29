<demo>
    常规使用
</demo>
<template>
  <div>
    <Input value="Normal"></Input>
    <Input value="Readonly" readonly></Input>
    <Input value="Disabled" disabled></Input>
    <Input value="Error" error="error"></Input>
  </div>
</template>
<script lang="ts">
import { Input } from "../lib/index";
export default {
  components: {
    Input,
  },
};
</script>
