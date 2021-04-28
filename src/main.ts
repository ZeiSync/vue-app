/** @format */
import { createApp } from "vue";
import mitt from "mitt";
import { VueMasonryPlugin } from "vue-masonry/src/masonry-vue3.plugin";
import ScrollLoader from "vue-scroll-loader";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);
app.use(ScrollLoader);
app.use(store);
app.use(router);

app.mount("#app");
