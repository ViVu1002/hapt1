export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],

    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    script: [{
      src: [
        "~/assets/js/contact.js",
        "~/assets/js/gmaps.js",
        "~/assets/js/html5shiv.js",
        "~/assets/js/jquery.js",
        "~/assets/js/main.js",
        "~/assets/js/price-range.js",
        "~/assets/js/jquery.prettyPhoto.js",
        "~/assets/js/jquery.scrollUp.min.js"
      ]
    },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: "#fff"},
  /*

   ** Global CSS
   */
  css: [
    "~/assets/css/style.css",
    "~/assets/css/all.min.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/animate.css",
    "~/assets/css/main.css",
    "~/assets/css/price-range.css",
    "~/assets/css/responsive.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/v-validate",
    {
      src: "~/plugins/vue-ckeditor5.js",
      mode: "client"
    },
    {
      src: "~/plugins/paypal.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-socket",
      mode: "client"
    },
    {
      src: "~/plugins/star-rating.js",
      mode: "client"
    },
    {
      src: "~/plugins/alert.js",
      mode: "client"
    },
    {
      src: "~/plugins/vue-flash.js",
      mode: "client"
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:4000/"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
      // Doc: https://bootstrap-vue.js.org
      "bootstrap-vue/nuxt",
      // Doc: https://axios.nuxtjs.org/usage
      "@nuxtjs/axios"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
      baseURL: "http://localhost:4000/"
    },
    /*
     ** Build configuration
     */
    extend(config, ctx) {
    }
  }
};
