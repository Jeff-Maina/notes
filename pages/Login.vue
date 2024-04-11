<script setup lang="ts">
import { ArrowLeft, Check, Eye, EyeOff } from 'lucide-vue-next';

definePageMeta({
    layout: false,
});

const isPasswordVisible = ref(true);
const passwordInputType = ref("password")
const toggleVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
    passwordInputType.value = passwordInputType.value == "text" ? "password" : "text"
}

const router = useRouter()
</script>


<template>
    <main class="flex flex-col gap-8 justify-center items-center p-6  max-w-4xl m-auto">
        <div class="w-full flex items-center justify-between mb-6">
            <div class="flex gap-4 items-center">
                <button @click="$router.back()">
                    <ArrowLeft class="size-4 lg:size-6" />
                </button>
                <!-- <p class="font-semibold">Create Account</p> -->
            </div>
        </div>
        <h1 class="font-gelion_medium text-lg w-full max-w-sm lg:text-3xl">Welcome back</h1>
        <form class="w-full flex flex-col gap-4 max-w-sm">
            <div class="flex flex-col gap-1 items-start">
                <!-- <label class="text-sm" for="email">Email</label> -->
                <div class="relative w-full">
                    <input type="email" required pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl pl-4 text-sm lg:text-lg outline-none [&:not(placeholder-shown):valid~div]:scale-100 "
                        placeholder="user@gmail.com">
                    <div
                        class="absolute right-3 top-2/4 -translate-y-2/4 grid place-items-center size-5 rounded-full bg-green-200 scale-0">
                        <Check :size="10" stroke-width="3" class="stroke-green-700" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1 items-start">
                <!-- <label class="text-sm" for="email">Password</label> -->
                <div class="relative w-full">
                    <input :type="passwordInputType"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl lg:text-lg pl-4 text-sm outline-none border border-zinc-100 focus:border-zinc-500"
                        placeholder="Password">
                    <div @click="toggleVisibility" class="absolute top-2/4 right-0 -translate-y-2/4  p-4">
                        <Eye v-if="!isPasswordVisible" class="stroke-neutral-500 size-4 lg:size-5" />
                        <EyeOff v-if="isPasswordVisible" class="stroke-neutral-500 size-4 lg:size-5" />
                    </div>
                </div>
            </div>
            <button class="bg-neutral-900 text-white p-3  rounded-lg shadow-lg text-sm lg:text-lg">Login</button>
        </form>
        <div class="px-6 relative flex">
            <div class="absolute left-0 h-[1px] w-full bg-neutral-100 top-2/4 -translate-y-2/4"></div>
            <small class="text-center relative z-10 bg-white px-3 max-w-fit m-auto lg:text-lg">or</small>
        </div>
        <button
            class="border rounded-xl p-3 text-sm border-neutral-200 bg-blue-600 text-white lg:text-lg w-full max-w-sm">Continue
            with
            google</button>

        <div>
            <p class="text-sm text-center lg:text-base">
                Don't have an account? <a href="/register" class="underline">Register</a>
            </p>
        </div>
    </main>
</template>


<style></style>
