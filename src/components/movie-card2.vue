<template>
  <div :class="`${layout} gap-5`">
    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="flex gap-5">
      <div
        v-for="n in 6"
        :key="n"
        class="flex flex-col items-center gap-3 animate-pulse"
      >
        <div class="w-[264px] h-[405px] rounded-md bg-gray-400"></div>
        <div class="w-[204px] h-3 rounded-full bg-gray-400"></div>
        <div class="w-[150px] h-3 rounded-full bg-gray-400"></div>
      </div>
    </div>

    <!-- Movie Cards -->
    <div v-else class="flex gap-5">
      <div
        v-for="(character, index) in characters"
        :key="index"
        class="flex flex-col justify-center items-center"
      >
        <div class="flex group rounded-xl overflow-hidden relative">
          <img
            class="w-[264px] h-[405px] rounded-md"
            :src="`http://localhost:8888/movies/image/${character.image_movie}`"
            :alt="character.title || 'Movie image'"
          />
          <div
            class="flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center"
          >
            <NuxtLink
              :to="`/movie/${character.id}`"
              class="w-44 h-12 border border-white text-white rounded-md text-center py-2.5"
            >
              Detail
            </NuxtLink>
            <NuxtLink
              to="#"
              class="w-44 h-12 bg-oren text-white text-center rounded-md py-2.5"
            >
              Buy Ticket
            </NuxtLink>
          </div>
        </div>
        <div class="text-2xl font-semibold">{{ character.title }}</div>
        <div class="flex gap-1">
          <span
            v-for="(val, idx) in character.genre.split(',').slice(0, 2)"
            :key="idx"
            class="rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]"
          >
            {{ val }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Props
const props = defineProps({
  layout: {
    type: String,
    required: true,
  },
});

// State
const characters = ref([]); // Internal state for characters
const isLoading = ref(true);

// Fetch data on component mount
onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8888/movies");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.result) {
      characters.value = data.result; // Assign fetched data
    } else {
      console.error("Invalid data structure:", data);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    isLoading.value = false; // Stop loading indicator
  }
});
</script>

<style scoped>
.text-oren {
  color: #ff5722; /* Adjust to desired color */
}

.bg-oren {
  background-color: #ff5722;
}
</style>
