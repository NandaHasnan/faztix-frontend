<template>
    <footer class="py-24 flex flex-col gap-12">
      <div class="flex flex-col gap-10 lg:flex-row md:gap-20 justify-between">
        <!-- Logo dan Deskripsi -->
        <div>
          <img class="w-44" :src="logo" alt="Logo" />
          <div class="text-lg w-72">
            Stop waiting in line. Buy tickets conveniently, watch movies quietly.
          </div>
        </div>
  
        <!-- Explore Section -->
        <div class="flex flex-col gap-7">
          <div class="text-base font-semibold">Explore</div>
          <ul class="flex md:flex-col gap-3.5 text-sm text-abu">
            <li><a href="#">Cinemas</a></li>
            <li><a href="#">Movie List</a></li>
            <li><a href="#">My Ticket</a></li>
            <li><a href="#">Notification</a></li>
          </ul>
        </div>
  
        <!-- Sponsor Section -->
        <div class="flex flex-col gap-7">
          <div class="text-base font-semibold">Our Sponsor</div>
          <ul class="flex md:flex-col gap-6">
            <li><img :src="ebv" alt="EBV Sponsor" /></li>
            <li><img :src="cineone" alt="Cineone Sponsor" /></li>
            <li><img :src="hiflix" alt="Hiflix Sponsor" /></li>
          </ul>
        </div>
  
        <!-- Follow Us Section -->
        <div class="flex flex-col gap-7">
          <div class="text-base font-semibold">Follow us</div>
          <ul class="flex flex-col gap-7">
            <li>
              <a href="#">
                <span class="inline-flex items-center">
                  <img src="" alt="" class="mr-2" /> Tickitz Cinema id
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="inline-flex items-center">
                  <img src="" alt="" class="mr-2" /> Tickitz.id
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="inline-flex items-center">
                  <img src="" alt="" class="mr-2" /> Tickitz.id
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="inline-flex items-center">
                  <img src="" alt="" class="mr-2" /> Tickitz Cinema id
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center text-sm">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
  </template>
  
  <script setup>
  import logo from "../assets/logo.png";
  import ebv from "../assets/gambar/ebv.id-2.png";
  import cineone from "../assets/gambar/CineOne21-2.png";
  import hiflix from "../assets/gambar/hiflix-2.png";
  </script>
  
  <style scoped>
  .text-abu {
    color: #a5a5a5;
  }
  </style>
  