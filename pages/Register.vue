<script setup lang="ts">
// icons
import { ArrowLeft, Check, Eye, EyeOff } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
    layout: false,
});

// Password visibility
const isPasswordVisible = ref(true);
const passwordInputType = ref("password")
const toggleVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
    passwordInputType.value = passwordInputType.value == "text" ? "password" : "text"
}

const router = useRouter()


// Input validation;
interface RegisterForm {
    email: string;
    password: string;
}

const { errors, meta, defineField, isSubmitting, handleSubmit } = useForm<RegisterForm>({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const register = handleSubmit(values => {
    fetch("http://localhost:3000/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
    }).then(response => {
        if (response.ok) {
            alert("Success");
        } return response.json().then((data) => {
            console.log(data.error[0].message);
        })
    }).catch((error) => {
        const err = error.json().then((errorMessage: any) => errorMessage);
    })
})
// user@gmail.com
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
        <h1 class="font-gelion_medium text-lg w-full max-w-sm lg:text-3xl">Create an account</h1>

        <form @submit.prevent="register" class="w-full flex flex-col gap-4 max-w-sm">
            <div class="flex flex-col gap-1 items-start">
                <!-- <label class="text-sm" for="email">Email</label> -->
                <small v-show="errors.email" class="pl-1 text-red-500">{{ errors.email }}</small>
                <div class="relative w-full">
                    <input v-model="email" type="email" v-bind="emailAttrs" :class="errors.email && '!border-red-400'"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl pl-4  lg:text-lg outline-none border border-zinc-100 focus:border-zinc-500"
                        placeholder="user@gmail.com">
                    <div
                        class="absolute right-3 top-2/4 -translate-y-2/4 grid place-items-center size-5 lg:size-6 rounded-full bg-green-200 scale-0">
                        <Check stroke-width="3" class="stroke-green-700 size-[10px] lg:size-3" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1 items-start">
                <!-- <label class="" for="email">Password</label> -->
                <small v-show="errors.password" class="pl-1 text-red-500">{{ errors.password }}</small>
                <div class="relative w-full">

                    <input v-model="password" :type="passwordInputType" v-bind="passwordAttrs"
                        :class="errors.password && 'border-red-400'"
                        class="p-3 bg-neutral-100 placeholder:text-neutral-500 w-full rounded-xl lg:text-lg pl-4  outline-none border border-zinc-100 focus:border-zinc-500"
                        placeholder="Password">
                    <div @click="toggleVisibility" class="absolute top-2/4 right-0 -translate-y-2/4  p-4 cursor-pointer">
                        <Eye v-if="!isPasswordVisible" class="stroke-neutral-500 size-4 lg:size-5" />
                        <EyeOff v-if="isPasswordVisible" class="stroke-neutral-500 size-4 lg:size-5" />
                    </div>
                </div>
            </div>
            <button :disabled="isSubmitting" type="submit"
                class="bg-neutral-900 text-white h-12 rounded-lg shadow-lg text-sm lg:text-lg disabled:bg-neutral-900">
                <div v-if="isSubmitting" class="w-full h-full grid place-items-center">
                    <Loader />
                </div>
                <div v-else>
                    Register
                </div>
            </button>
        </form>
        <!-- <div class="px-6 relative flex w-full">
            <div class="absolute left-0 h-[1px] w-full bg-neutral-200/60 top-2/4 -translate-y-2/4"></div>
            <small class="text-center relative z-10 bg-white px-3 max-w-fit m-auto lg:text-lg">or</small>
        </div> -->
        <button
            class="border rounded-xl p-3 text-sm border-neutral-200 bg-blue-600 text-white lg:text-lg w-full max-w-sm">Continue
            with
            google</button>

        <div>
            <p class="text-sm text-center lg:text-base">
                Already have an account? <a href="/login" class="underline">Login</a>
            </p>
        </div>
    </main>
</template>


<style></style>
