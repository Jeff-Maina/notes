<script setup lang="ts">
import { ArrowLeft, Check, Eye, EyeOff } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import { Toaster, toast } from 'vue-sonner'
import * as yup from 'yup'

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

// input validation;
interface RegisterForm {
    email: string;
    password: string;
}

const { errors, meta, defineField, isSubmitting, handleSubmit, resetForm } = useForm<RegisterForm>({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
})
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const login = handleSubmit(values => {
    fetch("http://localhost:3000/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
    }).then(response => {
        console.log(response)
        if (response.ok) {
            toast.success('Login Succesfull! Dashboard loading...')
            setTimeout(() => {
                router.push('/notes')
            }, 2000)
            return response.json().then((data) => {
                const token = data.token
            })
        } return response.json().then((data) => {
            console.log(data, 'not found')
            const errorType = data.error
            toast.error(errorType)
            resetForm()
        })
    }).catch((error) => {
        console.error(error)
    })
})


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
        <form @submit.prevent="login" class="w-full flex flex-col gap-4 max-w-sm">
            <div class="flex flex-col gap-1 items-start">
                <small v-show="errors.email" class="pl-1 text-red-500">{{ errors.email }}</small>
                <div class="relative w-full">
                    <input v-model="email" type="email" v-bind="emailAttrs" :class="errors.email && '!border-red-400'"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl pl-4  lg:text-base outline-none border border-zinc-100 focus:border-zinc-500"
                        placeholder="user@gmail.com">
                    <div
                        class="absolute right-3 top-2/4 -translate-y-2/4 grid place-items-center size-5 lg:size-6 rounded-full bg-green-200 scale-0">
                        <Check stroke-width="3" class="stroke-green-700 size-[10px] lg:size-3" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1 items-start">
                <small v-show="errors.password" class="pl-1 text-red-500">{{ errors.password }}</small>
                <div class="relative w-full">
                    <input v-model="password" :type="passwordInputType" v-bind="passwordAttrs"
                        :class="errors.password && 'border-red-400'"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl lg:text-base pl-4  outline-none border border-zinc-100 focus:border-zinc-500"
                        placeholder="Password">
                    <div @click="toggleVisibility" class="absolute top-2/4 right-0 -translate-y-2/4  p-4 cursor-pointer">
                        <Eye v-if="isPasswordVisible" class="stroke-neutral-500 size-4" />
                        <EyeOff v-if="!isPasswordVisible" class="stroke-neutral-500 size-4" />
                    </div>
                </div>
            </div>
            <button :disabled="isSubmitting" type="submit"
                class="bg-neutral-900 text-white h-12 rounded-lg shadow-lg text-sm lg:text-base disabled:bg-neutral-900">
                <div v-if="isSubmitting" class="w-full h-full grid place-items-center">
                    <Loader />
                </div>
                <div v-else>
                    Login
                </div>
            </button>
        </form>
        <div class="px-6 relative flex">
            <div class="absolute left-0 h-[1px] w-full bg-neutral-100 top-2/4 -translate-y-2/4"></div>
            <small class="text-center relative z-10 bg-white px-3 max-w-fit m-auto lg:text-lg">or</small>
        </div>
        <button
            class="border rounded-xl p-3 text-sm border-neutral-200 bg-blue-600 text-white lg:text-base w-full max-w-sm flex items-center gap-2 justify-center">

            <div class="s">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z"
                        fill="#000000" />
                </svg>

            </div>
            Continue
            with
            google
        </button>
        <p class="text-sm text-center lg:text-base">
            Don't have an account? <a href="/register" class="underline">Register</a>
        </p>
        <Toaster richColors position="top-right" />

    </main>
</template>


<style></style>
