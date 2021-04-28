/** @format */

import { createApi } from "unsplash-js";
import { ref } from "vue";

const unsplash = createApi({
  accessKey: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
});

const getPhotos = () => {
  const listPhotos: any = ref([]);

  const getLatestPhoto = async (page: number, perPage: number) => {
    try {
      const res = await unsplash.photos.list({ page, perPage });
      if (res.type === "success") {
        if (listPhotos.value.length) {
          listPhotos.value = [...listPhotos.value, ...res.response.results];
        } else {
          listPhotos.value = res.response.results;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchPhoto = async (
    searchValue: any,
    page: number,
    perPage: number
  ) => {
    try {
      if (!searchValue) {
        console.log("bruh");
      }
      const res = await unsplash.search.getPhotos({
        query: searchValue,
        page,
        perPage,
      });
      if (res.type === "success") {
        console.log("current page", page);
        console.log("listPhotos in get Searchphoto ", listPhotos.value.length);
        if (listPhotos.value.length && page !== 1) {
          listPhotos.value = [...listPhotos.value, ...res.response.results];
        } else {
          listPhotos.value = res.response.results;
        }
        console.log(
          "listPhotos after get Searchphoto ",
          listPhotos.value.length
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { listPhotos, getLatestPhoto, getSearchPhoto };
};

export default getPhotos;
