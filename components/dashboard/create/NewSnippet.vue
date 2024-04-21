<script setup lang="ts">
import { Check, X, Palette, Tag, Asterisk, Hash } from "lucide-vue-next";
import { jsx } from "vue/jsx-runtime";
const props = defineProps({
  isCreatingCodeblock: {
    type: Boolean,
  },
});

// tags logic;
const newTag = ref("");
const tags = ref<String[]>([]);
const addTag = (e: any) => {
  if (e.key === "Enter") {
    if (!tags.value.includes(newTag.value) && newTag.value !== " ") {
      tags.value.push(newTag.value);
    }
    newTag.value = "";
  }
};

const removeTag = (value: String) => {
  const newTags = tags.value.filter((tag) => tag !== value);
  tags.value = newTags;
};

// title;
const title = ref<string>("");

// adding logic;
const language = ref<string>("");
const isSearching = ref<boolean>(false);
const hideSearch = () => {
  setTimeout(() => {
    isSearching.value = false;
  }, 200);
};
const Languages: Array<string> = [
  "Python",
  "Java",
  "JavaScript",
  "Typescript",
  "C++",
  "V.Net",
  "Kobol",
  "Html",
  "CSS",
  "Heskel",
];

const filterLanguages = ref<string[]>([]);
const SearchLang = () => {
  filterLanguages.value = Languages.filter((l) =>
    l.toLowerCase().includes(language.value.toLowerCase())
  );
};
const addLanguage = (value: string) => {
  language.value = value;
  if (!tags.value.includes(value)) {
    tags.value.push(value);
  }
  hideSearch();
};

const codeInput = ref<string>(``);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isCreatingCodeblock"
      class="fixed z-[999] w-full h-screen bg-black/20 pt-20"
    ></div>
  </Transition>
  <Transition name="modal_slide">
    <div
      v-if="isCreatingCodeblock"
      class="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center"
    >
      <div
        class="w-full max-w-xl bg-white rounded-2xl shadow flex flex-col overflow-scroll divide-y divide-neutral-200"
      >
        <div class="w-full h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Asterisk :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            placeholder="Enter title"
            v-model="title"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-400 border-none text-lg"
          />
        </div>
        <!-- language -->
        <div class="w-full h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Hash :size="16" class="stroke-neutral-500" />
          </div>
          <input
            type="text"
            @keyup="SearchLang"
            placeholder="Language"
            v-model="language"
            @focus="() => (isSearching = true)"
            @blur="hideSearch"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-400 border-none text-lg"
          />
          <div
            v-if="filterLanguages.length > 0 && isSearching"
            class="w-64 max-h-64 absolute top-[110%] bg-white rounded-2xl border left-10 z-20 border-neutral-600 flex flex-col justify-start divide-y divide-neutral-200 overflow-auto"
          >
            <button
              class="w-full h-12 min-h-12 flex items-center px-5 hover:bg-neutral-100 hover:text-neutral-800 text-neutral-600"
              v-for="(lang, index) in filterLanguages"
              :key="index"
              @click="addLanguage(lang)"
            >
              <p>{{ lang }}</p>
            </button>
          </div>
        </div>

        <!-- tags -->
        <div class="h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Tag :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            @keyup="addTag"
            v-model="newTag"
            placeholder="Enter a tag and press enter"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-400 border-none text-lg"
          />
        </div>
        <div class="">
          <div class="p-3 flex flex-wrap gap-2 py-5" v-if="tags.length > 0">
            <TransitionGroup name="tag" mode="in-out">
              <div
                v-for="(tag, index) in tags"
                :key="index"
                class="rounded-full bg-neutral-200 px-6 py-[2px] font-medium text-neutral-900 flex items-center relative"
              >
                {{ tag }}
                <button
                  @click="[removeTag(tag)]"
                  class="p-1 rounded-full grid place-items-center absolute -top-2 bg-neutral-600 text-white -right-2"
                >
                  <X :size="12" stroke-width="3" />
                </button>
              </div>
            </TransitionGroup>
          </div>

          <!-- preview code -->
          <div class="p-3">
            <div class="flex items-center gap-2">
              <div class="w-full flex flex-col gap-2 relative">
                <textarea
                  name=""
                  id=""
                  v-model="codeInput"
                  placeholder="Enter code here"
                  spellcheck="false"
                  class="w-full resize-none z-10 h-44 bg-neutral-100 rounded-xl p-4 placeholder:text-neutral-600 border focus:border-neutral-400 outline-none"
                ></textarea>
                <div>
                  <Shiki
                    lang="js"
                    :code="'#// ' + `${title}`"
                    class="p-6 pb-3 !text-sm w-full overflow-scroll shiki_block !z-10 bg-[#303446] rounded-t-3xl"
                  />
                  <Shiki
                    lang="js"
                    :code="codeInput"
                    class="p-6 pt-3 !text-sm w-full overflow-scroll shiki_block !z-10 h-52 bg-[#303446] rounded-b-3xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- submit    -->
          <div class="p-3 flex items-center justify-end gap-3">
            <button
              @click="$emit('dismissCodeblock')"
              class="p-3 px-6 font-semibold text-neutral-700 border border-neutral-200 hover:border-neutral-300 rounded-xl"
            >
              Cancel
            </button>
            <button
              class="p-3 px-6 font-semibold text-white rounded-xl bg-neutral-900"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
/* transition groups */
</style>

<!-- tags with multiple spaces before the word may bypass the 'uniquee check' -->
