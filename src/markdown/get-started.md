# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中引入你需要的组件

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "sun-ui-1-hsh"
```

就可以使用我提供的组件了！

## Vue 单文件组件示例


```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "sun-ui"
export default {
  components: {
    Button
    }
}
</script>
```

上一节：[安装](#/doc/install)