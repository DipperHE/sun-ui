import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Dipper from "./components/Dipper.vue";
import Dipper2 from "./components/Dipper2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Dipper },
    { path: "/xxx", component: Dipper2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
