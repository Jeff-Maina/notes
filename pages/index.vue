<script setup lang="ts">
import { Check, Dot } from 'lucide-vue-next';

</script>

<template>
  <main class="w-full  p-6 flex flex-col gap-10 bg-white max-w-4xl m-auto ">
    <p class="lg:text-lg">Welcome to <b>Notes</b> – your easy-to-use solution for taking notes effortlessly. Enjoy a minimalist interface
      packed with powerful features designed to streamline your note-taking</p>
    <section>

      <h1 class="font-gelion_medium text-lg lg:text-3xl">Features</h1>
      <br>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <h1 class="font-gelion_medium text-orange-500 lg:text-xl">Version 1.0</h1>
          <ul class="flex flex-col gap-2 lg:text-lg">
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Effortless Note-Taking -</span>
                Easily
                jot
                down thoughts and to-dos.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Streamlined Organization -</span>
                Keep
                notes tidy with intuitive grouping and tags.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Enhanced Multimedia -</span> Attach
                images to notes.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Advanced Search -</span> Find notes
                quickly by content, tags, or dates.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Code Snippets -</span> Manage tasks
                alongside notes.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Version History -</span> Access and
                restore previous note versions.</p>
            </li>
            <!-- Voice-to-Text: Quickly transcribe thoughts with voice input. -->
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Voice-to-Text -</span> Quickly
                transcribe thoughts with voice inputs.</p>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="font-gelion_medium text-orange-500 lg:text-xl">Later versions</h1>
          <ul class="flex flex-col gap-2 lg:text-lg">
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"> Attach
                videos and docs to notes.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Version History -</span> Access and
                restore previous note versions.</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="pt-[6px]">
                <Dot class="size-4 lg:size-5"  stroke-width="3" />
              </div>
              <p class="text-neutral-600"><span class="font-gelion_medium text-black">Voice-to-Text -</span> Quickly
                transcribe thoughts with voice inputs.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
  