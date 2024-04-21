<script setup lang="ts">
import {
  ListFilter,
  X,
  Plus,
  ArrowUpRight,
  Ellipsis,
  Maximize2,
} from "lucide-vue-next";
import { Toaster } from "vue-sonner";

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
        isCompleted: false,
      },
      {
        todo: "Design mockups using Figma or Adobe XD",
        isCompleted: false,
      },
      {
        todo: "Set up project environment using Node.js and npm",
        isCompleted: true,
      },
      {
        todo: "Implement responsive design with CSS media queries",
        isCompleted: false,
      },
      {
        todo: "Build website layout using HTML and CSS",
        isCompleted: false,
      },
      // Add more tasks as needed
    ],
  },
  {
    title: "Project Management",
    tasks: [
      {
        todo: "Plan project timeline and milestones",
        isCompleted: false,
      },
      {
        todo: "Assign tasks to team members and set deadlines",
        isCompleted: false,
      },
      {
        todo: "Hold regular meetings to track progress",
        isCompleted: false,
      },
      {
        todo: "Review and provide feedback on team deliverables",
        isCompleted: true,
      },
      // Add more tasks as needed
    ],
  },
  // Add more categories as needed
];

const codeSnippets = [
  {
    language: "python",
    codeSnippet: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)`,
    codeTitle: "Factorial function in Python",
  },
  {
    language: "js",
    codeSnippet: `function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    codeTitle: "Fibonacci series in JavaScript",
  },
  {
    language: "java",
    codeSnippet: `public class PrimeChecker {
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}`,
    codeTitle: "Prime number checker in Java",
  },
  {
    language: "java",
    codeSnippet: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,
    codeTitle: "Hello World program in C++",
  },
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
        <section
          class="w-full grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 min-h-screen"
        >
          <div class="w-full col-span-1 flex flex-col gap-2 lg:gap-4">
            <DashboardCardsCodeCard
              v-for="(snippet, index) in codeSnippets"
              :key="index"
              :codeSnippet="snippet.codeSnippet"
              :codeTitle="snippet.codeTitle"
              :language="snippet.language"
            />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsThoughtCard />
            <DashboardCardsColorCard :color="'#F84F39'" />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <!-- <DashboardCardsNotesCard /> -->
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
          </div>
        </section>
      </div>
    </section>
  </main>
  <Toaster
    :toastOptions="{
      style: {
        background: 'black',
        borderRadius: '90px',
        border: '1px solid #353535',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '11rem',
        fontSize: '1rem',
      },
      class: 'toaster',
    }"
    position="bottom-center"
  />
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
