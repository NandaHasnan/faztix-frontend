<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// Schema Validasi dengan VeeValidate
const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Email tidak valid')
    .min(8, 'Email minimal 8 karakter')
    .required('Email harus diisi'),
  password: yup
    .string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password harus diisi')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password harus memiliki setidaknya 8 karakter, satu huruf besar, dan satu karakter spesial'
    ),
  agreeTos: yup.boolean().oneOf([true], 'Anda harus menyetujui syarat dan ketentuan'),
});

const showPassword = ref(false);
const router = useRouter();

const onSubmit = (values) => {
  const query = new URLSearchParams(values).toString();

  fetch('http://localhost:8888/auth/register', {
    method: 'POST',
    body: query,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(() => {
    router.push('/login');
  });
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="bg-bg-marvel bg-cover h-screen bg-center flex items-center justify-center px-4 sm:px-8">
    <div class="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div class="flex justify-center mb-6">
        <img class="w-32 sm:w-40" src="../assets/gambar/logo2.png" alt="Tickitz Logo" />
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <div className="md:flex justify-between items-center mb-6 hidden">
          <div className="flex flex-col gap-3 sm:gap-5 items-center">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[#e77b33] rounded-full text-white">1</div>
            <div className="text-xs sm:text-sm">Fill Form</div>
          </div>
          <div className="w-12 sm:w-16 border border-abu border-dashed"></div>
          <div className="flex flex-col gap-3 sm:gap-5 items-center">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[#A0A3BD] rounded-full text-white">2</div>
            <div className="text-xs sm:text-sm text-[#A0A3BD]">Activate</div>
          </div>
          <div className="w-12 sm:w-16 border border-abu border-dashed"></div>
          <div className="flex flex-col gap-3 sm:gap-5 items-center">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[#A0A3BD] rounded-full text-white">3</div>
            <div className="text-xs sm:text-sm text-[#A0A3BD]">Done</div>
          </div>
        </div>
        <Form
          class="flex flex-col gap-4 sm:gap-6"
          @submit="onSubmit"
          :validation-schema="loginFormSchema"
        >
          <div class="flex flex-col gap-2">
            <label for="email" class="text-gray-600">Email</label>
            <Field
              id="email"
              name="email"
              class="py-2 sm:py-3 px-3 sm:px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" class="text-red-500 text-sm" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password" class="text-gray-600">Password</label>
            <div class="relative w-full">
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute py-5 right-4 flex items-center"
              >
                <span v-if="!showPassword">👁️</span>
                <span v-else>🙈</span>
              </button>
              <Field
                id="password"
                name="password"
                class="px-4 py-2 sm:py-3 w-full h-12 sm:h-14 border border-[#DEDEDE] rounded-lg focus:outline-none"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Write your password"
              />
              <ErrorMessage name="password" class="text-red-500 text-sm" />
            </div>
          </div>
          <div class="flex items-center">
            <Field
              type="checkbox"
              id="terms"
              name="agreeTos"
              class="mr-2"
            />
            <label for="terms" class="text-xs sm:text-sm text-gray-600">
              I agree to terms & conditions
            </label>
            <ErrorMessage name="agreeTos" class="text-red-500 text-sm ml-2" />
          </div>
          <button
            type="submit"
            class=" cursor-pointer w-full py-3 sm:py-4 rounded-md bg-[#fc6500] hover:bg-[#e77b33] text-center text-white font-semibold"
          >
            Join For Free Now
          </button>
        </Form>
        <div class="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
          Already have an account?
          <router-link to="/login" class="text-blue-600 hover:underline">Log in</router-link>
        </div>
        <div class="flex gap-2 items-center justify-between mt-4 sm:mt-6">
          <div class="flex-1 h-px bg-abu"></div>
          <div class="text-xs sm:text-sm">or</div>
          <div class="flex-1 h-px bg-abu"></div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
          <a
            href="https://www.google.com/"
            class="flex items-center justify-center gap-2 py-2 px-4 shadow-lg rounded-lg w-full hover:bg-gray-100"
          >
            <span class="text-lg sm:text-xl">🔍</span>Google
          </a>
          <a
            href="https://www.facebook.com/"
            class="flex items-center justify-center gap-2 py-2 px-4 shadow-lg rounded-lg w-full hover:bg-gray-100"
          >
            <span class="text-biru text-lg sm:text-xl">🔵</span>Facebook
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-bg-marvel {
  background-image: url('../assets/gambar/marvel.png');
}
</style>