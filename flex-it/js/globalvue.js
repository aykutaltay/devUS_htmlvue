// https://vuejs.org/guide/quick-start.html#using-vue-from-cdn

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Test Amaçlı Eklenmiştir.",
      ArrayList: [],
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
    },
  },
}).mount("#app");
