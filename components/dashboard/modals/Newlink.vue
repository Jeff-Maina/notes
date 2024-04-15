<script setup lang="ts">
import { ArrowUpRight, X } from "lucide-vue-next";
const props = defineProps({
  itemBeingCreated: {
    type: String,
  },
});

const apiKey = "pk_20c190edf84e4105391c0200abb0f21d83a8ae1e";

const url = ref("");
const isLoading = ref(false);
const hasFetched = ref(false);
const linkDetails = ref({
  image: "",
  sitename: "",
  description: "",
  title: "",
  favicon: "",
  domain: "",
});

const submitUrl = () => {
  const apiUrl = `https://jsonlink.io/api/extract?url=${url.value}&api_key=${apiKey}`;
  isLoading.value = true;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      isLoading.value = false;
      hasFetched.value = true;
      linkDetails.value = {
        image: data.images[0],
        sitename: data.sitename,
        description: data.description,
        title: data.title,
        favicon: data.favicon,
        domain: data.domain,
      };
    })
    .catch((error) => {
      console.error(error);
    });
};

const resetAll = () => {
  isLoading.value = false;
  hasFetched.value = false;
};
</script>

<template>
  <Transition name="fade">
    <section
      v-if="itemBeingCreated === 'link'"
      class="!fixed w-full h-screen bg-black/10 flex items-center justify-center inset-0 z-[999]"
    >
      <div class="w-full max-w-lg flex flex-col gap-6">
        <div class="w-full flex justify-end">
          <button
            @click="[$emit('closeModal'), resetAll()]"
            class="size-10 bg-white rounded-full shadow grid place-items-center"
          >
            <X :size="16" stroke-width="3" />
          </button>
        </div>
        <!-- input -->
        <div
          class="w-full h-14 bg-white rounded-3xl shadow overflow-x-hidden divide-x divide-neutral-100 md:divide-neutral-200 flex items-center"
        >
          <input
            type="text"
            placeholder="Enter url"
            v-model="url"
            class="h-full w-full px-5 text-lg font-normal placeholder:text-neutral-500"
          />
          <div class="h-full w-20 shrink-0">
            <button
              @click="submitUrl"
              :disabled="isLoading"
              class="w-full h-full bg-neutral-900 disabled:bg-neutral-700 grid place-items-center text-white"
            >
              <span v-if="!isLoading"> Add </span>
              <div v-else><Loader /></div>
            </button>
          </div>
        </div>
        <div
          v-if="!hasFetched"
          class="h-96 w-full max-w-lg bg-white shadow rounded-3xl p-6 flex flex-col gap-4"
          :class="isLoading && 'animate-pulse'"
        >
          <div class="w-full h-56 rounded-2xl bg-gray-200"></div>
          <div class="w-3/4 h-6 bg-gray-200 rounded-full"></div>
          <div class="flex flex-col gap-2">
            <div class="w-1/4 h-3 rounded-full bg-gray-200"></div>
            <div class="w-full h-3 rounded-full bg-gray-200"></div>
            <div class="w-full h-3 rounded-full bg-gray-200"></div>
          </div>
        </div>

        <div
          v-else
          class="h-auto min-h-28 w-full max-w-lg bg-white shadow rounded-3xl flex flex-col gap-4"
        >
          <div class="w-full h-56 overflow-hidden px-6 pt-6">
            <div class="h-full rounded-2xl bg-gray-200 overflow-hidden">
              <img
                v-if="linkDetails.image !== ''"
                :src="linkDetails.image"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            w-full
          </div>
          <div
            class="w-3/4 h-6 rounded-full flex items-center gap-1 group/link cursor-pointer px-6"
          >
            <p class="text-2xl truncate">
              {{ linkDetails.sitename }}
            </p>
          </div>
          <div
            class="flex flex-col divide-y divide-neutral-100 md:divide-neutral-200"
          >
            <div class="p-4 px-6 flex flex-col gap-1">
              <p class="font-medium text-lg">Page title</p>
              <p class="font-normal line-clamp-2 md:text-lg text-neutral-500">
                {{ linkDetails.title }}
              </p>
            </div>
            <div class="flex flex-col font-normal p-4 px-6">
              <p class="text-lg">Description</p>
              <p class="font-normal line-clamp-2 md:text-lg text-neutral-500">
                {{ linkDetails.description }}
              </p>
            </div>
            <div class="flex items-center justify-between font-normal p-4 px-6">
              <div class="flex items-center gap-3">
                <div class="size-4 overflow-hidden rounded-full">
                  <img
                    :src="linkDetails.favicon"
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <a
                  :href="linkDetails.domain"
                  class="text-neutral-500 text-lg hover:text-black duration-200 hover:underline"
                >
                  {{ linkDetails.domain }}
                </a>
              </div>
              <div>
                <ArrowUpRight :size="16" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full h-14 grid grid-cols-2 bg-white rounded-3xl shadow divide-x divide-neutral-100 md:divide-neutral-200 overflow-hidden"
        >
          <button class="w-full h-full">Cancel</button
          ><button class="w-full h-full bg-neutral-900 text-white">Save</button>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style></style>

<!-- Reset email input -->
<!-- link the pages' actual link -->
<!-- fix save ui...kinda sucks -->
<!-- fix loading states and disable buttons when needed -->
<!-- show something else as image is fetching -->