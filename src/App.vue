<template>
  <div>
    导航栏 |
    <router-link to="/">Dipper</router-link> |
    <router-link to="/xxx">Dipper2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
