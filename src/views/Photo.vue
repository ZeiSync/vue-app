<template>
  <div>
    <search-bar class="flex content-center sticky top-0 left-5 z-50">
      <div @click="$router.go(-1)">
        <div class="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg
            class="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </search-bar>
    <masonry :listPhotos="listPhotos" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  toRefs,
  watch,
} from "vue";
import getPhotos from "@/composables/getListPhoto";
import SearchBar from "@/components/searchbar/search-bar.vue";
import Masonry from "@/components/masonry/masonry.vue";

export default defineComponent({
  props: {
    searchValue: {
      type: String,
      defalut: "",
    },
  },
  components: {
    SearchBar,
    Masonry,
  },
  setup(props) {
    const { listPhotos, getSearchPhoto } = getPhotos();
    const page: number = 1;
    const perPage: number = 30;
    const { searchValue } = toRefs(props);
    onBeforeMount(() => getSearchPhoto(searchValue?.value, page, perPage));
    onBeforeUnmount(() => {
      listPhotos.length = 0;
    });
    watch(
      () => props.searchValue,
      () => {
        getSearchPhoto(searchValue?.value, page, perPage);
      }
    );

    return {
      listPhotos,
      page,
      perPage,
      getSearchPhoto,
    };
  },
});
</script>

<style scope></style>
