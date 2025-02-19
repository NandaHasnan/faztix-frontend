<script setup>
import { ref, onMounted, computed } from 'vue';
import { useAuthStore } from '../stores/auth'; // Pinia Store untuk auth
import { useRouter } from 'vue-router';
import Logo from '@/assets/logo.png';
import Profile from '@/assets/gambar/prof.png';


const isOpen = ref(false);
const profile = ref({}); // Pastikan profile adalah objek kosong awalnya

const authStore = useAuthStore(); // Pinia Store
const router = useRouter();

// Ambil token dari auth store
const isAuthenticated = computed(() => authStore.token && authStore.token !== "");

// Toggle menu (mobile)
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Fetch profil pengguna
async function getProfile() {
  if (!authStore.token) return; // Jika token kosong, hentikan eksekusi

  try {
    const data = await $fetch("http://localhost:8888/profile", {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });

    if (data.result) {
      profile.value = {
        id: data.result.id,
        firstname: data.result.firstname,
        lastname: data.result.lastname,
        email: data.result.email,
        image: data.result.image,
      };
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

// Jalankan fetch saat komponen dimuat
onMounted(() => {
  if (isAuthenticated.value) {
    getProfile();
  }
});

// Logout user
const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>


<template>
  <nav class="px-4 md:px-12 lg:px-48 items-center shadow-md py-3 flex justify-between bg-white">
    <!-- Logo -->
    <div>
      <NuxtLink to="/home">
        <img :src="Logo" alt="Logo" />
      </NuxtLink>
    </div>

    <!-- Menu Desktop -->
    <ul class="hidden md:flex gap-14">
      <NuxtLink to="/home" class="hover:text-oren cursor-pointer">Home</NuxtLink>
      <NuxtLink to="/movie" class="hover:text-oren cursor-pointer">Movie</NuxtLink>
      <NuxtLink to="/order" class="hover:text-oren cursor-pointer">Buy Ticket</NuxtLink>
    </ul>

    <!-- Jika user authenticated -->
    <div v-if="isAuthenticated" class="hidden md:flex items-center gap-3">
      <button @click="handleLogout" class="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda">
        Logout
      </button>
      <div>Location</div>
      <div><IoIosArrowDown /></div>
      <div><IoSearch /></div>
      <NuxtLink to="/profil">
        <img
          class="w-14 h-14 rounded-full"
          :src="profile?.image ? `http://localhost:8888/users/image/${profile.image}` : Profile"
          alt="Profile"
        />
      </NuxtLink>
      <div>{{ profile?.firstname || profile?.email }}</div>
    </div>

    <!-- Jika user tidak authenticated -->
    <div v-else class="hidden md:flex gap-5">
      <NuxtLink to="/login" class="rounded-lg py-2 px-4 border border-[#e77b33] text-oren hover:bg-[#ff6600] hover:text-white">
        Login
      </NuxtLink>
      <NuxtLink to="/register" class="rounded-lg py-2 px-4 bg-[#ff6600] text-white hover:bg-orenMuda">
        SignUp
      </NuxtLink>
    </div>

    <!-- Menu Mobile -->
    <div class="md:hidden">
      <button @click="toggleMenu">
        <FaBars v-if="!isOpen" class="text-2xl" />
        <FaTimes v-else class="text-2xl" />
      </button>
    </div>

    <!-- Dropdown Mobile -->
    <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
      <ul class="flex flex-col gap-4 p-4">
        <NuxtLink to="/home" class="hover:text-oren cursor-pointer" @click="toggleMenu">Home</NuxtLink>
        <NuxtLink to="/movie" class="hover:text-oren cursor-pointer" @click="toggleMenu">Movie</NuxtLink>
        <NuxtLink to="/order" class="hover:text-oren cursor-pointer" @click="toggleMenu">Buy Ticket</NuxtLink>
      </ul>
      <div class="flex flex-col gap-4 p-4">
        <NuxtLink to="/login" class="rounded-lg py-2 px-4 border border-orenMuda text-oren hover:bg-orenMuda hover:text-white text-center">
          Login
        </NuxtLink>
        <NuxtLink to="/register" class="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda text-center">
          SignUp
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style>
/* Tambahkan styling global atau sesuaikan sesuai kebutuhan */
</style>
