<script setup lang="ts">
import { Check, X, ListTodo, Tag, Pencil, Plus, Trash } from "lucide-vue-next";
const props = defineProps({
  isCreatingTodo: {
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

// adding logic;
const title = ref("Untitled.");
const isEditingTitle = ref(false);
const editTitle = () => (isEditingTitle.value = true);
const newTodo = ref("");

const enterTitle = (e: any) => {
  if (e.key === "Enter") {
    isEditingTitle.value = false;
  }
};

const index = ref(0);

type Todotype = {
  index: number;
  task: string;
  complete: boolean;
};

const todos = ref<Todotype[]>([]);

const addTodo = (e: any) => {
  if (e.key === "Enter") {
    const task = {
      index: index.value,
      task: newTodo.value,
      complete: false,
    };
    todos.value.push(task);
    newTodo.value = "";
    index.value++;
    console.log(todos.value);
  }
};
const removeTodo = (value: number) => {
  todos.value = todos.value.filter((todo) => todo.index !== value);
};
const completeTask = (index: number) => {
  console.log(todos.value);
  const task = todos.value.find((todo) => todo.index === index);
  if (task) {
    task.complete = !task.complete;
  }
};

const submitTodos = () => {
  const obj = {
    title: title.value,
    todos: todos.value,
  };
  console.log(obj);
};
</script>

<template>
  <!-- mask -->
  <Transition name="fade">
    <div
      v-if="isCreatingTodo"
      class="fixed z-[999] w-full h-screen bg-black/20 pt-20"
    ></div>
  </Transition>

  <!-- modal -->
  <Transition name="modal_slide">
    <div
      v-if="isCreatingTodo"
      class="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center"
    >
      <div
        class="w-full max-w-2xl bg-white rounded-2xl shadow flex flex-col overflow-scroll divide-y divide-neutral-200"
      >
        <div class="flex flex-col divide-y divide-neutral-200/70 min-h-[60vh]">
          <div class="flex flex-col gap-2 group/title p-6">
            <div class="w-full flex items-center gap-2">
              <input
                v-if="isEditingTitle"
                type="text"
                v-model="title"
                name="title"
                @keydown="enterTitle"
                @blur="() => (isEditingTitle = false)"
                class="text-3xl font-semibold border border-neutral-400 leading-none !py-0 outline-none max-w-min"
              />
              <h1 v-else class="text-3xl font-semibold">
                {{ title }}
              </h1>
              <button
                v-if="!isEditingTitle"
                @click="editTitle"
                class="text-neutral-500 hover:text-black opacity-0 group-hover/title:opacity-[1] transition-all duration-200"
              >
                <Pencil :size="16" stroke-width="3" />
              </button>
              <button
                @click="() => (isEditingTitle = false)"
                v-else
                class="text-neutral-500 hover:text-black"
              >
                <Check :size="18" stroke-width="3" />
              </button>
            </div>
            <div class="text-lg text-neutral-500">10/8/2024</div>
          </div>

          <!-- todos list -->
          <!-- new todo -->
          <div class="w-full h-14 flex items-center relative">
            <div class="w-16 grid place-items-center absolute inset-0">
              <ListTodo :size="16" class="stroke-neutral-600" />
            </div>
            <input
              type="text"
              placeholder="Enter todo and press enter"
              v-model="newTodo"
              class="h-full w-full px-3 pl-14 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none text-lg"
              @keydown="addTodo"
            />
          </div>

          <!-- !list todos -->
          <div class="p-6 flex flex-col gap-2">
            <div v-if="todos.length > 0" class="flex flex-col gap-2 w-full">
              <div
                v-for="(todo, index) in todos"
                :key="index"
                class="flex items-baseline gap-3 group/taskcard max-w-full"
              >
                <button
                  class="md:size-5 shrink-0 border-2 rounded-lg grid place-items-center"
                  @click="completeTask(todo.index)"
                  :class="
                    todo.complete
                      ? 'border-2 border-orange-500 text-white bg-orange-500'
                      : 'border-2 border-neutral-400 hover:text-neutral-400 text-white'
                  "
                >
                  <Check :size="14" stroke-width="3" />
                </button>
                <div class="">
                  <p
                    class="text-lg break-all"
                    :class="
                      todo.complete
                        ? 'line-through decoration-2 decoration-orange-500 text-neutral-700'
                        : 'text-neutral-900'
                    "
                  >
                    {{ todo.task }}
                  </p>
                </div>
                <div
                  class="flex opacity-0 items-center gap-3 group-hover/taskcard:opacity-[1] transition-all duration-200"
                >
                  <button
                    @click="removeTodo(todo.index)"
                    class="shrink-0 text-neutral-400 hover:text-red-600 transition-all duration-200"
                  >
                    <Trash :size="14" stroke-width="3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- tags yo -->
        <div class="h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Tag :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            @keyup="addTag"
            v-model="newTag"
            placeholder="Enter a tag and press enter"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none text-lg"
          />
        </div>

        <div class="">
          <div class="p-3 flex flex-wrap gap-2 py-5" v-if="tags.length > 0">
            <TransitionGroup name="tag" mode="in-out">
              <div
                v-for="(tag, index) in tags"
                :key="index"
                class="rounded-full bg-neutral-200 px-6 py-[2px] font-medium text-neutral-700 flex items-center text-lg relative"
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

          <div class="p-3 flex items-center justify-end gap-3">
            <button
              @click="$emit('dismissTodo')"
              class="p-3 px-6 font-semibold text-neutral-700 border border-neutral-200 hover:border-neutral-300 rounded-xl"
            >
              Cancel
            </button>
            <button
              @click.prevent="submitTodos"
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
