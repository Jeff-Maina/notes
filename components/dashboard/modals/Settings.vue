<script setup lang="ts">
import { boolean } from "yup";
import { User, Bell, FileText,Mail } from "lucide-vue-next";

const props = defineProps({
  isSettingsModalActive: boolean,
});
</script>

<template>
  <Transition name="fade">
    <div
      @click="$emit('toggleSettingsModal')"
      v-if="isSettingsModalActive"
      class="mask"
    ></div>
  </Transition>
  <Transition name="slide">
    <div
      @click.self="$emit('toggleSettingsModal')"
      v-if="isSettingsModalActive"
      class="fixed h-screen w-full flex items-center justify-center z-[999] inset-0"
    >
      <div
        class="w-full max-w-sm bg-white rounded-2xl shadow flex flex-col divide-y divide-neutral-100 md:divide-neutral-200"
      >
        <button
          class="w-full h-16 px-5 flex items-center gap-5 text-lg rounded-t-2xl hover:bg-neutral-100 duration-100"
        >
          <div>
            <User :size="20" stroke-width="2" />
          </div>
          <p>Account</p>
        </button>
        <button
          class="w-full h-16 px-5  flex items-center gap-5 text-lg  hover:bg-neutral-100 duration-100"
        >
          <div>
            <Bell :size="20" stroke-width="2" />
          </div>
          <p>Notifications</p>
        </button>
        <button
          class="w-full h-16 px-5  flex items-center gap-5 text-lg  hover:bg-neutral-100 duration-100"
        >
          <div>
            <FileText :size="20" stroke-width="2" />
          </div>
          <p>Acknowledgements</p>
        </button>
        <button
          class="w-full h-16 px-5  flex items-center gap-5 text-lg  hover:bg-neutral-100 duration-100 rounded-b-2xl"
        >
          <div>
            <Mail :size="20" stroke-width="2" />
          </div>
          <p>Report an issue.</p>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
</style>
