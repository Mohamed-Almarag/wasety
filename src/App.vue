<template>
  <div id="app" :class="[{ arabic: isArabic }, { english: isEnglish }]">
    <app-header></app-header>
    <ScrollToTopButton></ScrollToTopButton>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {},
      isArabic: false,
      isEnglish: false,
    };
  },
  mounted() {
    axios.get(this.$API_URL + "info").then((response) => {
      let userInfo = this.info;
      userInfo = response.data.data.data;
      localStorage.setItem("website-Info", JSON.stringify(userInfo));
    });

    const appContainer = document.getElementById("app");
    let lang = localStorage.getItem("lang");

    if (lang == "en") {
      appContainer.setAttribute("dir", "ltr");
      this.isEnglish = true;
    } else if (lang == "ar") {
      appContainer.setAttribute("dir", "rtl");
      this.isArabic = true;
    } else {
      appContainer.setAttribute("dir", "ltr");
      this.isEnglish = true;
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=El+Messiri&display=swap");

.english {
  font-family: "Montserrat", sans-serif !important;
}
.arabic {
  font-family: "Cairo", sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

::selection {
  background-color: $maincolor;
  background: $headcolor;
  color: $white;
  color: $maincolor;
  padding: 10px;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: $headcolor;
  box-shadow: 0 0 0 5px inset;
}
::-webkit-scrollbar-thumb {
  background: $maincolor;
  border-radius: 5px;
}
</style>
