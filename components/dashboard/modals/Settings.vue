<script setup lang="ts">

import { User, Bell, FileText, Mail, BarChartBig } from "lucide-vue-next";

const props = defineProps({
  isSettingsModalActive: {
    type: Boolean,
  },
});

// defining emits
const emits = defineEmits(["toggleSettingsModal"])


// feedback logic;
const isSendingFeedback = isSendingFeedback
</script>

<template>
  <!-- Mask -->
  <UiMask
    @toggleMask="$emit('toggleSettingsModal')"
    :isMaskActive="isSettingsModalActive"
  />

  <!-- MODAL -->
  <Transition name="modal_slide">
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
          class="w-full h-16 px-5 flex items-center gap-5 text-lg rounded-t-2xl hover:bg-neutral-100 duration-100"
        >
          <div>
            <BarChartBig :size="20" stroke-width="2" />
          </div>
          <p>My activity</p>
        </button>
        <button
          class="w-full h-16 px-5 flex items-center gap-5 text-lg hover:bg-neutral-100 duration-100"
        >
          <div>
            <Bell :size="20" stroke-width="2" />
          </div>
          <p>Notifications</p>
        </button>
     
        <button
          class="w-full h-16 px-5 flex items-center gap-5 text-lg hover:bg-neutral-100 duration-100 rounded-b-2xl"
        >
        
          <div>
            <Mail :size="20" stroke-width="2" />
          </div>
          <p>Send Feedback.</p>
        </button>
        <button
          class="w-full h-16 px-5 flex items-center gap-5 text-lg hover:bg-neutral-100 duration-100"
        >
          <div>
            <FileText :size="20" stroke-width="2" />
          </div>
          <p>Acknowledgements</p>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
