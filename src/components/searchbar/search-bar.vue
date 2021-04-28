<template>
  <form
    class="flex flex-col p-2 py-6 m-h-screen w-96"
    @submit.prevent="searchSubmit"
  >
    <div
      class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
    >
      <slot></slot>

      <input
        class="rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
        type="text"
        placeholder="Search"
        v-model.trim="searchValue"
        @keydown="searchEnter"
      />
      <button
        class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full"
        type="submit"
      >
        <svg
          class="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      isSearchFocus: false,
      searchValue: "",
    };
  },
  props: {},
  methods: {
    searchEnter(e: KeyboardEvent) {
      if (e.key && e.key === "Enter") {
        this.searchSubmit();
      }
    },
    searchSubmit() {
      if (this.searchValue === "") {
        return;
      }
      this.$router.push({
        name: "Photo",
        params: { searchValue: this.searchValue },
      });
      this.searchValue = "";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .search-focus {
  width: 700px;
  transition: width 0.5;
  -webkit-transition: all 0.5s ease;
} */
</style>
