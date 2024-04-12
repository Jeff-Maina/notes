<script setup lang="ts">
import { Asterisk, Book, Image, Link, ListTodo, Notebook } from 'lucide-vue-next';
import { VueElement } from 'vue';

const isCategoryClicked = ref(false)
const clickedCategoryIndex = ref(1000)


const toggleCategoryClicked = (index: number) => {
    clickedCategoryIndex.value = clickedCategoryIndex.value === index ? 1000 : index
    isCategoryClicked.value = !isCategoryClicked.value
}


interface CategoryInterface {
    category: string,
    tags: {
        tagName: string,
        tagCount: number
    }[],
    categoryItems: number,
    categoryIcon: any,
    categoryColor: string
}

const categories: CategoryInterface[] = [
    {
        category: "Notes",
        tags: [
            { tagName: "Ideas", tagCount: 8 },
            { tagName: "Reminders", tagCount: 5 },
            { tagName: "Tasks", tagCount: 10 },
            { tagName: "Meetings", tagCount: 3 },
            { tagName: "Thoughts", tagCount: 6 }
        ],
        categoryItems: 42,
        categoryIcon: Notebook,
        categoryColor: "#3b82f6"
    },
    {
        category: "Links",
        tags: [
            { tagName: "Articles", tagCount: 15 },
            { tagName: "Tutorials", tagCount: 7 },
            { tagName: "Videos", tagCount: 10 },
            { tagName: "Resources", tagCount: 6 },
            { tagName: "Websites", tagCount: 9 }
        ],
        categoryItems: 30,
        categoryIcon: Link,
        categoryColor: "#a855f7"
    },
    {
        category: "Code Snippets",
        tags: [
            { tagName: "JavaScript", tagCount: 20 },
            { tagName: "Python", tagCount: 15 },
            { tagName: "HTML/CSS", tagCount: 12 },
            { tagName: "React", tagCount: 8 },
            { tagName: "Vue.js", tagCount: 6 }
        ],
        categoryItems: 50,
        categoryIcon: Asterisk,
        categoryColor: "#3b82f6"
    },
    {
        category: "Thoughts",
        tags: [
            { tagName: "Reflections", tagCount: 10 },
            { tagName: "Inspiration", tagCount: 8 },
            { tagName: "Musings", tagCount: 6 },
            { tagName: "Ideas", tagCount: 12 },
            { tagName: "Memories", tagCount: 5 }
        ],
        categoryItems: 20,
        categoryIcon: Book,
        categoryColor: "#737373"
    },
    {
        category: "Todos",
        tags: [
            { tagName: "Work", tagCount: 10 },
            { tagName: "Personal", tagCount: 15 },
            { tagName: "Errands", tagCount: 8 },
            { tagName: "Shopping", tagCount: 6 },
            { tagName: "Fitness", tagCount: 7 }
        ],
        categoryItems: 35,
        categoryIcon: ListTodo,
        categoryColor: "#f97316"
    },
    {
        category: "Images",
        tags: [
            { tagName: "Landscapes", tagCount: 20 },
            { tagName: "Portraits", tagCount: 15 },
            { tagName: "Nature", tagCount: 12 },
            { tagName: "Animals", tagCount: 10 },
            { tagName: "Travel", tagCount: 18 }
        ],
        categoryItems: 25,
        categoryIcon: Image,
        categoryColor: "#ef4444"
    }
];

</script>


<template>
    <div class="fixed w-screen h-full inset-0 bg-black/10"></div>
    <div class="absolute w-56 md:w-64 rounded-3xl top-[150%] right-0 flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 shadow-lg shadow-neutral-200 text-sm md:text-base transition-all duration-300"
        :class="isCategoryClicked ? 'scale-95 bg-neutral-300' : 'scale-100 bg-white'">
        <button v-for="category, index in categories" :key="index" @click="toggleCategoryClicked(index)"
            class="h-14  flex items-center justify-between w-full font-normal  transition-colors duration-100 relative"
            :class="clickedCategoryIndex === 1000 && 'hover:bg-neutral-100'"
            :disabled="clickedCategoryIndex !== 1000 && clickedCategoryIndex !== index">

            <div class="flex items-center w-full justify-between px-5 h-full absolute left-2/4 -translate-x-2/4 transition-all duration-300 rounded-xl"
                :class="clickedCategoryIndex === index ? 'bg-white scale-110 shadow -translate-y-2' : 'bg-transparent scale-100 shadow-none'">
                <div class="flex items-center gap-3">
                    <Notebook v-if="category.category === 'Notes'" :size="16" class="-blue-500" />
                    <Link v-if="category.category === 'Links'" :size="16" class="-blue-500" />
                    <Asterisk v-if="category.category === 'Code Snippets'" :size="16" class="-blue-500" />
                    <Book v-if="category.category === 'Thoughts'" :size="16" class="-blue-500" />
                    <Image v-if="category.category === 'Images'" :size="16" class="-blue-500" />
                    <ListTodo v-if="category.category === 'Todos'" :size="16" class="-blue-500" />
                    <span>
                        {{ category.category }}
                    </span>
                </div>
                <div class=" grid place-items-center rounded-full badge">
                    <p class="text-sm md:text-base" :style="{ color: category.categoryColor }">{{ category.categoryItems }}
                    </p>
                </div>
            </div>
        </button>
    </div>
</template>


<style>
.badge {
    font-family: 'Gelion Medium';
}

.category_clicked {}

.category_not_clicked {}
</style>
