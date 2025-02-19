<template>
    <section
      class="px-9 w-full md:h-80 h-full bg-oren py-20 flex flex-col gap-12 rounded-lg"
    >
      <div class="text-3xl md:text-5xl text-white text-center">
        Subscribe to our newsletter
      </div>
      <div class="flex flex-col sm:flex-row gap-2.5 justify-center">
        <input
          class="p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg"
          type="text"
          placeholder="First name"
        />
        <input
          class="p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg"
          type="text"
          placeholder="Email address"
        />
        <button
          class="bg-white py-4 px-11 rounded-lg text-oren"
          @click="subscribe"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  // Method to handle subscription logic
  const subscribe = () => {
    // Add subscription logic here
    console.log("Subscribed successfully!");
  };
  </script>
  
  <style scoped>
  /* Tambahan CSS jika diperlukan */
  .text-oren {
    color: #ff5722; /* Sesuaikan dengan kebutuhan */
  }
  
  .bg-oren {
    background-color: #ff5722;
  }
  </style>
  