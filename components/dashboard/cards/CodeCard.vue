<script setup lang="ts">
import { Clipboard, Copy } from "lucide-vue-next";
const code = `# Bubble sort in Python

def bubbleSort(array):
    
  # loop to access each array element
  for i in range(len(array)):

    # loop to compare array elements
    for j in range(0, len(array) - i - 1):

      # compare two adjacent elements
      # change > to < to sort in descending order
      if array[j] > array[j + 1]:

        # swapping elements if elements
        # are not in the intended order
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp


data = [-2, 45, 0, 11, -9]

bubbleSort(data)

print('Sorted Array in Ascending Order:')
print(data)

`;
</script>

<template>
  <div
    class="w-full rounded-xl bg-[#fff] border border-neutral-300/60 relative group/codecard overflow-hidden pr-3"
  >
    <button
      class="size-8 absolute top-3 right-3 bg-neutral-100 border border-neutral-200 z-30 rounded-lg opacity-0 group-hover/codecard:opacity-[1] transition-all duration-200 grid place-items-center"
    >
      <Clipboard :size="16" class="stroke-neutral-600" />
    </button>
    <Shiki  lang="python" :code="code" class="px-6 py-4 !text-sm w-full  overflow-scroll" hight />
  </div>
</template>

<style></style>


<!-- 'catppuccin-latte' - [#EFF1F5]-->