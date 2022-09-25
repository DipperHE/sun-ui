<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
}
.topnav > .logo {
  max-width: 6em;
  margin-right: auto;
}
.topnav > .menu {
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
}
.topnav > .menu > li {
  margin: 0 1em;
}
</style>
