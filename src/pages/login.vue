<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

// Skema Validasi dengan Yup
const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Email tidak valid')
    .min(8, 'Email minimal 8 karakter')
    .required('Email harus diisi'),
  password: yup
    .string()
    .required('Password harus diisi')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password harus memiliki setidaknya 8 karakter, satu huruf besar, dan satu karakter spesial'
    ),
});

// Setup form
const { handleSubmit, errors } = useForm({
  validationSchema: loginFormSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

// State lainnya
const isOpen = ref(false);
const showPassword = ref(false);

// Navigasi router
const router = useRouter();

// Fungsi submit
const onSubmit = handleSubmit(async (values) => {
  try {
    const queryString = new URLSearchParams(values).toString();

    const response = await $fetch('http://localhost:8888/auth/login', {
      method: 'POST',
      body: queryString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.success) {
      console.log('Login berhasil:', response.result);
      router.push('/');
    } else {
      isOpen.value = true;
    }
  } catch (error) {
    console.error('Error login:', error);
    isOpen.value = true;
  }
});
</script>

<template>
  <div class="bg-bg-marvel bg-no-repeat bg-cover h-screen bg-center flex items-center justify-center">
    <div class="w-full max-w-md mx-4 md:mx-auto">
      <div class="flex justify-center mb-8">
        <img class="w-32 md:w-40" src="../assets/gambar/logo2.png" alt="Tickitz Logo" />
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6 md:p-8">
        <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
          <div class="text-2xl md:text-3xl font-bold">Welcome Back👋</div>
          <div class="text-base md:text-lg text-gray-500">
            Sign in with your data that you entered during your registration
          </div>

          <!-- Notifikasi Error -->
          <div v-if="isOpen" class="py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white">
            Invalid Email or Password
          </div>

          <!-- Input Email -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-gray-600">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="py-2 md:py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>

          <!-- Input Password -->
          <div class="flex flex-col gap-2">
            <label for="password" class="text-gray-600">Password</label>
            <div class="relative w-full">
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-4 md:right-6 flex items-center"
              >
                <i class="text-gray-400">👁</i>
              </button>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="py-2 md:py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
          </div>

          <a class="text-right text-sm text-gray-600 mt-2 md:mt-6">Forgot your password?</a>
          <button
            type="submit"
            class="cursor-pointer w-full py-3 md:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-center text-white font-semibold"
          >
            Login
          </button>
          <div class="flex items-center justify-between mt-6">
            <div class="w-1/4 h-px bg-gray-300"></div>
            <div class="text-gray-500 text-sm">or</div>
            <div class="w-1/4 h-px bg-gray-300"></div>
          </div>
          <div class="flex flex-col md:flex-row gap-4">
            <a
              href="https://www.google.com/"
              class="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
            >
            <font-awesome-icon icon="fa-brands fa-google" class="text-red-500 text-lg" /> Google
            </a>
            <a
              href="https://www.facebook.com/"
              class="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
            >
              <i>📘</i> Facebook
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-bg-marvel {
  background-image: url('../assets/gambar/marvel.png');
}
</style>
