<template>
  <div
    id="banner"
    class="relative w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
    :style="{
      background:
        'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' +
        backgroundCover +
        ')',
    }"
  >
    <div id="content" class="max-w-screen-lg text-center">
      <search-bar style="width: 500px" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/searchbar/search-bar.vue"; // @ is an alias to /src
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    SearchBar,
  },
  data() {
    return {
      backgroundCover: "string",
      photos: [],
    };
  },
  beforeCreate() {
    axios
      .get("https://source.unsplash.com/1920x1080")
      .then((response) => {
        // handle success
        this.backgroundCover = response.request.responseURL;
      })
      .catch((error) => {
        // handle error
        return error;
      });
  },
});
</script>

<style scoped></style>
