<script setup lang="ts">
import { Asterisk, Book, Hash, Image, Link, ListTodo, Notebook } from 'lucide-vue-next';
import { VueElement, getCurrentInstance } from 'vue';
import { boolean } from 'yup';
import { categories } from '../../data/Websitedata'

interface CategoryInterface {
    category: string,
    tags: {
        tagName: string,
        tagCount: number
    }[],
    categoryItems: number,
    categoryColor: string
}


const isCategoryClicked = ref(false)
const clickedCategoryIndex = ref(1000)


const toggleCategoryClicked = (index: number) => {
    clickedCategoryIndex.value = clickedCategoryIndex.value === index ? 1000 : index
    isCategoryClicked.value = !isCategoryClicked.value
}


// logic for conditional rendering for categories;
const isFirst = (index: number) => index === 0;
const isLast = (index: number, categories: CategoryInterface[]) => index === categories.length - 1;
const anyCategoryClicked = () => clickedCategoryIndex.value !== 1000
const isThisCategoryClicked = (index: number) => clickedCategoryIndex.value === index



// Passed props
const props = defineProps({
    isCategoryMenuShowing: boolean
})

const resetMenu = () => {
    clickedCategoryIndex.value = 1000
}

</script>


<template>
    <div @click="[resetMenu(),$emit('toggleMenu')]" v-if="isCategoryMenuShowing" v-motion-fade class="fixed w-screen h-full inset-0 bg-black/10">
    </div>
    <div v-if="isCategoryMenuShowing"
        class="absolute  rounded-3xl top-[150%] right-0 flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 shadow text-sm md:text-base menu"
        :class="anyCategoryClicked() ? 'scale-[.96]' : 'scale-100 bg-white'">
        <button v-for="category, index in categories" :key="index" @click="toggleCategoryClicked(index)"
            class="h-14 w-56 md:w-64  flex items-center justify-between  font-normal  transition-colors duration-100 relative bg-white"
            :class="index === 0 ? 'rounded-t-2xl' : index === categories.length - 1 && 'rounded-b-2xl'"
            :disabled="anyCategoryClicked() && !isThisCategoryClicked(index)">

            <div class="flex items-center w-full justify-between px-5 absolute left-2/4 -translate-x-2/4 transition-all duration-350 "
                :class="[isFirst(index) ? 'rounded-t-2xl' : isLast(index, categories) && !isThisCategoryClicked(index) && 'rounded-b-2xl',
                !anyCategoryClicked() ? ' scale-100 shadow-none z-10 translate-y-0 rounded-t-none' :
                    isThisCategoryClicked(index) ? 'bg-white shadow -translate-y-2  z-20 scale-[1.06] rounded-t-2xl' :
                        'translate-y-0 filter grayscale  bg-neutral-300']">
                <div class="w-full h-14 flex items-center justify-between z-10 relative">
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
                        <p class="text-sm md:text-base" :style="{ color: category.categoryColor }">{{ category.categoryItems
                        }}
                        </p>
                    </div>
                </div>
                <div class="absolute top-full w-full  bg-white left-0 z-0 rounded-b-2xl custom_transition overflow-hidden border-t flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 tags_box"
                    :class="isThisCategoryClicked(index) ? ` max-h-[14rem] overflow-scroll border-neutral-100 md:border-neutral-200 opacity-1 ` : 'max-h-0 border-none overflow-hidden -translate-y-[10px]'">
                    <a v-for="tag, i in category.tags" :key="i"
                        class="w-full flex items-center justify-between min-h-14 px-5">
                        <div class="flex items-center gap-3">
                            <Hash :size="12" />
                            <span>{{ tag.tagName }}</span>
                        </div>
                        <div class=" grid place-items-center rounded-full badge">
                            <p class="text-sm md:text-base" :style="{ color: category.categoryColor }">{{
                                tag.tagCount
                            }}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </button>
    </div>
</template>


<style>
.badge {
    font-family: 'Gelion Medium';
}

.menu {
    transition: transform 350ms linear, background-color 350ms linear;
}

.custom_transition {
    /* transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955); */
    transition: all 350ms ease;
}

.duration-350 {
    transition-duration: 350ms;
}

.tags_box {
    scrollbar-width: thin;
}
</style>
