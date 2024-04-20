<script setup lang="ts">
import {
  ListFilter,
  X,
  Plus,
  ArrowUpRight,
  Ellipsis,
  Maximize2,
} from "lucide-vue-next";

definePageMeta({
  layout: false,
});

const isCategoryMenuShowing = ref(false);
const toggleCategoryMenu = () => {
  console.log("clicked");
  isCategoryMenuShowing.value = !isCategoryMenuShowing.value;
};
const closeCategoryMenu = () => (isCategoryMenuShowing.value = false);

const Links = [
  {
    websiteName: "Interface Icon Pack",
    websiteLink: "https://www.google.com",
    websiteFavicon: "https://www.google.com/favicon.ico",
    websiteImage:
      "https://i.pinimg.com/564x/87/a7/85/87a785a21802e6ccca1eec849ee21b05.jpg",
  },
  {
    websiteName: "Zajno | Crappy explanation",
    websiteLink: "https://zajno.com/work/crappy-explanation",
    websiteFavicon: "https://github.com/favicon.ico",
    websiteImage:
      "https://i.pinimg.com/564x/d2/1f/6b/d21f6baebb089ec004b59ecc3660958f.jpg",
  },
  {
    websiteName: "INSPIRATION by TOPPAN | INTERZUM 2017",
    websiteLink: "https://forest.toppan.co.jp/gdi/",
    websiteFavicon: "https://www.youtube.com/favicon.ico",
    websiteImage: "https://www.youtube.com/img/favicon_144.png",
  },
  {
    websiteName: "Michal Zalobny Portfolio 2021",
    websiteLink: "https://michalzalobny.com/",
    websiteFavicon: "https://twitter.com/favicon.ico",
    websiteImage:
      "https://i.pinimg.com/736x/65/f6/4d/65f64dedbf1226feef7978ea2c9babc9.jpg",
  },
];

const rainbowColors = [
  "#ff0000", // Red
  "#ff7f00", // Orange
  "#ffff00", // Yellow
  "#00ff00", // Green
  "#0000ff", // Blue
  "#4b0082", // Indigo
  "#9400d3", // Violet
];

const images = [
  {
    isCensored: true,
    link: "",
  },
];

const todos = [
  {
    title: "Website Development",
    tasks: [
      {
        todo: "Create wireframes for website layout",
        isCompleted: false
      },
      {
        todo: "Design mockups using Figma or Adobe XD",
        isCompleted: false
      },
      {
        todo: "Set up project environment using Node.js and npm",
        isCompleted: true
      },
      {
        todo: "Implement responsive design with CSS media queries",
        isCompleted: false
      },
      {
        todo: "Build website layout using HTML and CSS",
        isCompleted: false
      }
      // Add more tasks as needed
    ]
  },
  {
    title: "Project Management",
    tasks: [
      {
        todo: "Plan project timeline and milestones",
        isCompleted: false
      },
      {
        todo: "Assign tasks to team members and set deadlines",
        isCompleted: false
      },
      {
        todo: "Hold regular meetings to track progress",
        isCompleted: false
      },
      {
        todo: "Review and provide feedback on team deliverables",
        isCompleted: true
      }
      // Add more tasks as needed
    ]
  }
  // Add more categories as needed
];

</script>

<template>
  <main class="">
    <section class="w-full m-auto border flex ml-auto justify-end">
      <DashboardSidebar />
      <div class="py-4 w-[calc(100%-5rem)]">
        <header
          class="px-6 font-bold flex items-center justify-between w-full pb-4"
        ></header>
        <section class="w-full grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div class="w-full col-span-1 flex flex-col gap-2 lg:gap-4">
            <DashboardCardsTodoCard v-for="task,index in todos" :key="index" :taskTitle="task.title" :todos="task.tasks" />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsCodeCard />
            <DashboardCardsTweetCard />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsThoughtCard />
            <DashboardCardsNotesCard />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsTweetCard />
            <DashboardCardsColorCard />
            <DashboardCardsLinkCard />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

<!-- <h1 class="text-2xl tracking-tighter text-black"></h1>
<div class="flex items-center gap-3">
  <div class="relative">
    <button
      @click="toggleCategoryMenu"
      class="size-10 grid place-items-center rounded-full relative transition-all duration-100"
      :class="
        isCategoryMenuShowing
          ? 'bg-white shadow z-[999]'
          : 'bg-neutral-200 z-0'
      "
    >
      <ListFilter
        v-if="!isCategoryMenuShowing"
        stroke-width="3"
        class="stroke-neutral-600 size-4"
      />
      <X
        v-else
        :size="16"
        stroke-width="3"
        class="stroke-neutral-600"
      />
    </button>
    <DashboardMenuCategoryMenu
      @toggleMenu="closeCategoryMenu"
      :isCategoryMenuShowing="isCategoryMenuShowing"
    />
  </div>
  <DashboardCreateButton /> 
</div> -->
