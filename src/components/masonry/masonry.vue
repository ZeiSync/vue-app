<template>
  <div
    v-masonry="containerId"
    transition-duration="0.3s"
    item-selector=".item"
    gutter="5"
    fit-width="true"
    class="masonry-container mx-auto"
  >
    <div>
      <img
        :src="photo.urls.regular"
        :alt="photo.alt_description"
        v-masonry-tile
        class="item"
        v-for="photo in listPhotos"
        :key="photo.id"
        style="width: 350px; padding-bottom: 5px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["listPhotos"],
});
</script>

<style scoped></style>
