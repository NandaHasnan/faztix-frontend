module.export = {
    mode: "jit",
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          oren: "#FF5722", // Warna oranye kustom
          biru: "#007BFF", // Warna biru kustom
          hijau: {
            light: "#A7F3D0",
            DEFAULT: "#10B981", // Warna hijau utama
            dark: "#064E3B",
          },
        },
      },
    },
    plugins: [],
  };
  