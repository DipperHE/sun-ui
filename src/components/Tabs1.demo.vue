<demo>
默认选中第一项
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs, Tab } from "../lib/index";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("Tab 1");
    return {
      x,
    };
  },
};
</script>
