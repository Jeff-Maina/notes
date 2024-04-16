<script setup lang="ts">
import {
  User,
  Bell,
  FileText,
  Mail,
  BarChartBig,
  ChevronLeft,
  ArrowRight,
} from "lucide-vue-next";

const props = defineProps({
  isSettingsModalActive: {
    type: Boolean,
  },
});

// defining emits
const emits = defineEmits(["toggleSettingsModal"]);

// feedback logic;
const isSendingFeedback = ref(false);
const toggleFeedbackForm = () =>
  (isSendingFeedback.value = !isSendingFeedback.value);
const openFeedback = () => (isSendingFeedback.value = true);
const closeFeedbackForm = () => (isSendingFeedback.value = false);
</script>

<template>
  <!-- Mask -->
  <UiMask
    @toggleMask="[$emit('toggleSettingsModal'), closeFeedbackForm()]"
    :isMaskActive="isSettingsModalActive"
  />

  <!-- MODAL -->
  <Transition name="modal_slide">
    <div
      @click.self="[$emit('toggleSettingsModal'), closeFeedbackForm()]"
      v-if="isSettingsModalActive"
      :class="isSendingFeedback ? 'scale-[.96]' : 'scale-100'"
      class="fixed h-screen w-full flex items-center justify-center z-[999] inset-0 transition-transform duration-300"
    >
      <div class="w-full max-w-sm c_container">
        <button
          :disabled="isSendingFeedback"
          class="w-full h-16 px-5 flex items-center gap-5 text-lg rounded-t-2xl hover:bg-neutral-100 duration-200"
          :class="
            isSendingFeedback
              ? 'bg-neutral-300 grayscale'
              : 'hover:bg-neutral-100'
          "
        >
          <div>
            <User :size="20" stroke-width="2" />
          </div>
          <p>Account</p>
        </button>
        <button
          :disabled="isSendingFeedback"
          class="w-full h-16 px-5 flex items-center gap-5 text-lg transition-all duration-200"
          :class="
            isSendingFeedback
              ? 'bg-neutral-300 grayscale'
              : 'hover:bg-neutral-100'
          "
        >
          <div>
            <BarChartBig :size="20" stroke-width="2" />
          </div>
          <p>My activity</p>
        </button>
        <button
          :disabled="isSendingFeedback"
          class="w-full h-16 px-5 flex items-center gap-5 text-lg transition-all duration-200"
          :class="
            isSendingFeedback
              ? 'bg-neutral-300 grayscale'
              : 'hover:bg-neutral-100'
          "
        >
          <div>
            <Bell :size="20" stroke-width="2" />
          </div>
          <p>Notifications</p>
        </button>

        <div class="relative h-16 z-[20]">
          <div
            class="w-full h-16 flex items-center gap-5 text-lg absolute left-2/4 -translate-x-1/2 transition-all duration-300"
            :class="
              isSendingFeedback
                ? 'scale-[1.06] w-[110%] border border-neutral-300 -translate-y-10 bg-white rounded-t-2xl'
                : ' scale-100 -translate-y-0'
            "
          >
            <button
              @click="toggleFeedbackForm"
              class="flex items-center gap-5 px-5 w-full h-full"
            >
              <Transition>
                <ChevronLeft
                  v-if="isSendingFeedback"
                  :size="20"
                  stroke-width="2"
                />
                <Mail v-else :size="20" stroke-width="2" />
              </Transition>

              <Transition>
                <p v-if="isSendingFeedback">Back</p>
                <p v-else>Send Feedback</p>
              </Transition>
            </button>
            <DashboardModalsFeedbackForm
              @closeForm="closeFeedbackForm"
              :isSendingFeedback="isSendingFeedback"
            />
          </div>
        </div>
        <button
          :disabled="isSendingFeedback"
          class="w-full h-16 px-5 flex items-center justify-between text-lg transition-all duration-200 rounded-b-2xl"
          :class="
            isSendingFeedback
              ? 'bg-neutral-300 grayscale'
              : 'hover:bg-neutral-100'
          "
        >
          <div class="flex items-center gap-5">
            <div>
              <FileText :size="20" stroke-width="2" />
            </div>
            <p>Acknowledgements</p>
          </div>
          <ArrowRight :size="18" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
