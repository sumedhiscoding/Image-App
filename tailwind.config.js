/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'hero':"url('https://s3-alpha-sig.figma.com/img/e743/8927/0934542578d7a5804676ffdeb1326d02?Expires=1678665600&Signature=KL6y6zUZfcksDH1UUSjvqYkBgkLR7YFH62gQWc5ZaGGyYAzbnMNm6JZNNLzgamp6-YHqQi45WU7ptUZTs7wwpOLLkcSpU1L8f6JoTBu-S7fK0Tqy58weti5zb4DA7jLNdvH3NoYHy3U4WMjyrHdvGyjpXJKOGQEBYFh1Izz~49~z8e9xQHMYbjj-hSmGQi3Eekc3BbNnFXS-UHJUxYVS8gJUpjopcHD6SSNcYt2qxi3M9brqVt2~HCwMkJcnCHFea~1pFGA50uJIsoJqX6FVETK-YzPPfUb4KdvMs47porbaBKwHxauavnPWjuCw8I92WtzQBDdYBkyx1YRBTy~kEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
    },
  },
  plugins: [require("daisyui")],}
