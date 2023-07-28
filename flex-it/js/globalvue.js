// https://vuejs.org/guide/quick-start.html#using-vue-from-cdn

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Test Amaçlı Eklenmiştir.",
      ArrayList: [],
      deneme : "testmetini",
      lang : {
        pg_index : {
          menu_home: "Ana Sayfa",
          menu_about: "Hakkımızda",
          menu_service: "Hizmetlerimiz",
          menu_portfolio: "Portfolio",
          menu_contact:"Bize Ulaşın"

        },
      },

    };
  },
  created() {
    this.getApiList();


  },

  methods: {
    getApiList() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => (this.ArrayList = json));

        document.getElementById("e_menu_home").innerText = this.lang.pg_index.menu_home;
    },
  },
}).mount("#app");
