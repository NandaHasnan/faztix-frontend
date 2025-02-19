<template>
    <div>
      <Navbar />
  
      <main class="px-4 sm:px-12 md:px-20 lg:px-32 xl:px-48 flex flex-col gap-10">
        <!-- Hero Section -->
        <section class="flex flex-col sm:flex-row items-center py-14 gap-6">
          <div class="flex flex-col gap-2.5">
            <div class="text-oren text-lg font-bold text-center sm:text-left">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </div>
            <div class="text-5xl leading-[70px] text-center sm:text-left">
              Experience the Magic of Cinema: Book Your Tickets Today
            </div>
            <div class="text-abu text-base text-center sm:text-left">
              Sign up and get the ticket with a lot of discount
            </div>
          </div>
          <div class="columns-2 gap-3">
            <img class="w-52 h-44" src="@/assets/gambar/Cinta Dalam Ikhlas.jpg" alt="Cinta Dalam Ikhlas" />
            <img class="w-52 h-64" src="@/assets/gambar/Bila Esok Ibu Tiada.jpg" alt="Bila Esok Ibu Tiada" />
            <img class="w-52 h-64" src="@/assets/gambar/Tebusan Dosa.jpg" alt="Tebusan Dosa" />
            <img class="w-52 h-44" src="@/assets/gambar/Aku Jati, Aku Asperger.jpg" alt="Aku Jati Aku Asperger" />
          </div>
        </section>
  
        <!-- Why Choose Us Section -->
        <section class="flex flex-col gap-6">
          <div class="flex flex-col gap-3.5">
            <div class="text-oren text-base font-bold text-center sm:text-left">
              WHY CHOOSE US
            </div>
            <div class="text-3xl w-full sm:w-96 text-center sm:text-left">
              Unleashing the Ultimate Movie Experience
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-8">
            <div class="flex flex-col gap-5 text-center sm:text-left">
              <div class="p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0">
                <BsShieldFillCheck />
              </div>
              <div class="text-lg font-semibold">Guaranteed</div>
              <div class="text-base text-abu">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div class="flex flex-col gap-5 text-center sm:text-left">
              <div class="p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0">
                <FaCircleCheck />
              </div>
              <div class="text-lg font-semibold">Affordable</div>
              <div class="text-base text-abu">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div class="flex flex-col gap-5 text-center sm:text-left">
              <div class="p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0">
                <LuMessagesSquare />
              </div>
              <div class="text-lg font-semibold">24/7 Customer Support</div>
              <div class="text-base text-abu">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
          </div>
        </section>
  
        <!-- Movies Section -->
        <section class="flex flex-col gap-7 py-14">
          <div class="text-center flex flex-col gap-3.5">
            <div class="text-lg text-oren font-semibold">MOVIES</div>
            <div class="text-3xl w-full sm:w-[545px] mx-auto">
              Exciting Movies That Should Be Watched Today
            </div>
          </div>
  
          <div class="overflow-x-auto flex-shrink-0 justify-between flex gap-10 px-4">
            <MovieCard2 :characters="characters" layout="flex flex-shrink-0" />
          </div>
  
          <nuxt-link to="/movie" class="flex gap-4 items-center justify-center text-oren text-center py-14 font-semibold">
            View All
            <FaArrowRightLong class="animate-bounce" />
          </nuxt-link>
        </section>

        <section class="flex flex-col gap-7 py-14">
          <div class='text-oren text-base font-bold text-center sm:text-left'>WHY CHOOSE US</div>
          <div class='flex justify-between items-center'>
            <div class='text-3xl text-center sm:text-left'>Unleashing the Ultimate Movie Experience</div>
            <div class='gap-2 hidden md:block'>
              <button class='p-5 text-white text-2xl w-16 h-16 bg-abu rounded-full'><FaArrowLeftLong /></button>
              <button class='p-5 text-white text-2xl w-16 h-16 bg-oren rounded-full'><FaArrowRightLong /></button>
            </div>
          </div>
  
          <div class="overflow-x-auto flex-shrink-0 justify-between flex gap-10 px-4">
            <MovieCard2 :characters="characters" layout="flex flex-shrink-0" />
          </div>
        </section>
  
        <!-- Subscribe Section -->
        <Subscribe />
        <Footer />
      </main>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Navbar from '@/components/navbar.vue';
  import Footer from '@/components/footer.vue';
  import MovieCard2 from '@/components/movie-card2.vue';
  import Subscribe from '@/components/subscribe.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
      MovieCard2,
      Subscribe,
    },
    setup() {
      const characters = ref([]);
  
      onMounted(() => {
        fetch('http://localhost:8888/movies')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data && data.result) {
              characters.value = data.result || [];
            } else {
              console.error('Invalid data structure:', data);
            }
          })
          .catch((error) => {
            console.error('Error fetching movies:', error);
          });
      });
  
      return {
        characters,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan style Anda di sini */
  </style>
  