<template>
  <header class="main-header">
    <Loading :loading="loading"></Loading>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'Home' }"
          ><img class="photo" src="@/assets/images/logo.png" alt="logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <fa icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
            <li class="nav-item" :class="{ active: $route.name == 'Home' }">
              <router-link
                :to="{ name: 'Home' }"
                class="nav-link"
                aria-current="page"
                >{{ $t("home") }}</router-link
              >
            </li>
            <li
              class="nav-item"
              :class="{ active: $route.name == 'Transactions' }"
            >
              <router-link :to="{ name: 'Transactions' }" class="nav-link">{{
                $t("transactions")
              }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.name == 'AboutUs' }">
              <router-link :to="{ name: 'AboutUs' }" class="nav-link">
                {{ $t("about") }}
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: $route.name == 'ContactUs' }"
            >
              <router-link :to="{ name: 'ContactUs' }" class="nav-link"
                >{{ $t("contact") }}
              </router-link>
            </li>
          </ul>
          <!-- Start User Details If The User Logged In And It Will Be None If Logged Out  -->
          <div class="languages d-flex align-items-center">
            <ul
              class="list-unstyled d-flex align-items-center user-detalis"
              v-if="isLoggedIn"
            >
              <li class="every-item notifications">
                <!-- Notifications  -->
                <span class="count-notifications">12</span>
                <fa @click="showHideNotifications" class="icon" icon="bell" />
                <div class="all-notifications" v-if="showNotifications">
                  <OffersNotifications></OffersNotifications>
                </div>
              </li>
              <li class="every-item">
                <!-- Messages -->
                <fa class="icon" icon="envelope" />
              </li>
              <!-- Logout -->
              <li class="every-item">
                <fa @click="logout" class="icon" icon="sign-out-alt" />
              </li>
              <li class="every-item">
                <div class="infos">
                  <router-link class="name" :to="{ name: 'Profile' }"
                    ><span>{{ userDetails.firstName }}</span></router-link
                  >
                  <router-link class="img" :to="{ name: 'Profile' }">
                    <img
                      v-if="userDetails.image"
                      :src="userDetails.image"
                      alt="user-img"
                    />
                    <img
                      v-else
                      src="@/assets/images/default.png"
                      alt="user-img"
                    />
                  </router-link>
                </div>
              </li>
            </ul>

            <div class="register-and-language">
              <!-- Languages -->
              <ul class="list-unstyled main-lists">
                <li>
                  <div class="dropdown">
                    <button
                      class="btn lang-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span id="language" class="lang-text"></span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li class="items">
                        <a
                          class="dropdown-item active"
                          href="javascript:void(0)"
                          @click="switchs('en')"
                          >En</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0)"
                          @click="switchs('ar')"
                          >Ar</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <!-- Sign Up -->

                  <router-link
                    class="sign-up"
                    :to="{ name: 'SignUp' }"
                    v-if="!isLoggedIn"
                    >Sign up</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- End User Details If The User Logged In And It Will Be None If Logged Out  -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import OffersNotifications from "@/components/Transactions/OffersNotifications.vue";
export default {
  name: "AppHeader",
  props: {},
  data() {
    return {
      loading: false,
      showNotifications: false,
      userDetails: {
        profilePhoto: null,
        firstName: "",
        lastName: "",
        image: "",
        bio: "",
        rate: "",
      },
    };
  },
  components: { OffersNotifications },
  computed: {
    isLoggedIn() {
      return this.userLoggedIn();
    },
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      this.userDetails.firstName = userInfo.first_name;
      this.userDetails.lastName = userInfo.last_name;
      this.userDetails.image = userInfo.image;
      this.userDetails.bio = userInfo.bio;
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    let test = document.getElementById("language");
    test.textContent = localStorage.getItem("lang").toUpperCase();
  },

  methods: {
    userLoggedIn() {
      return this.$store.getters.token;
    },
    switchs(local) {
      this.$i18n.locale = local;
      localStorage.setItem("lang", local);
      let languageText = document.getElementById("language");
      languageText.textContent = localStorage.getItem("lang").toUpperCase();
      window.location.reload();
    },
    logout() {
      this.loading = true;
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .finally(() => {
          window.location.reload();
          this.loading = false;
        });
      // localStorage.removeItem("token");
      // localStorage.removeItem("user-info");
      // this.$router.push({ name: "Home" });
      // window.location.reload();
    },
    showHideNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    handleScroll() {
      let navbar = document.querySelector(".main-header .navbar");
      if (window.scrollY >= 10) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .rtl {
//   direction: rtl !important;
// }
.main-header {
  color: $textcolor;
  .navbar {
    padding: 1rem 0;
    background-color: $white;
    transition: 0.5s;
    &.nav-scroll {
      padding: 0.5rem;
      box-shadow: $box-shadow;
      .navbar-brand {
        .photo {
          padding: 5px;
          box-shadow: $box-shadow;
          border-radius: 10px;
        }
      }
    }
    .navbar-brand {
      width: 75px;
      height: 75px;
      .photo {
        transition: 0.5s;
        width: 100%;
        height: 100%;
      }
    }
  }
  .navbar-collapse {
    // padding: 15px 0;
    .navbar-nav {
      margin: 0 auto;
      align-items: center;
      .nav-item {
        margin-right: 20px;
        transition: 0.4s;
        .nav-link {
          color: $textcolor;
          transition: 0.4s;
        }
        &.active,
        &:hover {
          .nav-link {
            color: $maincolor;
          }
        }
        .registration {
          background: none;
          color: $textcolor;
          border: none;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  .navbar-toggler {
    background-color: $maincolor;
    color: $white;

    box-shadow: 0 3px 9px rgba($black, 0.2);
  }
  .languages {
    @media (min-width: 320px) and (max-width: 991px) {
      justify-content: center;
    }
    ul {
      margin: 0;
    }
    .user-detalis {
      gap: 10px;
      .every-item {
        .icon {
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            color: $maincolor;
          }
        }
        &.notifications {
          position: relative;
          .count-notifications {
            position: absolute;
            width: 17px;
            height: 17px;
            background: red;
            border-radius: 50%;
            top: -12px;
            right: -7px;
            color: $white;
            font-size: 10px;
            line-height: 2;
            text-align: center;
            display: none;
          }
          .all-notifications {
            color: $textcolor;
            border: 1px solid $bordercolor;
            position: absolute;
            background: $white;
            width: 300px;
            height: 300px;
            overflow-y: scroll;
            overflow-x: unset;
            top: 40px;
            border-radius: 5px;
            z-index: 400;
            font-size: 14px;
            padding: 10px 5px;
            border-radius: 5px;
            z-index: 400;
          }
        }
        .infos {
          color: $textcolor;
          font-size: 12px;
          display: flex;
          align-items: center;
          .img {
            width: 50px;
            height: 50px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .name {
            margin: 5px;
            color: $textcolor;
            text-decoration: none;
          }
        }
      }
    }
    .register-and-language {
      color: $textcolor;
      .main-lists {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
}
.lang-btn {
  color: $textcolor;
  border: none;
  outline: none;
  box-shadow: unset;
  font-size: 14px;
  transition: 0.3s;
  margin: 5px;
  padding: 5px;
  color: $textcolor;
  &:hover {
    background-color: $maincolor;
    color: $white;
  }

  .lang-text {
    margin-left: 5px;
  }
}
.dropdown-menu {
  min-width: 80px;
  padding: 0;
  text-align: center;
  .dropdown-item {
    color: $textcolor;
    transition: 0.3s;
    font-size: 14px;
    &.active,
    &:focus,
    &:hover,
    &:active {
      background-color: $maincolor;
      color: $white;
    }
  }
}
.icons {
  span {
    margin: 5px;
  }
}
.sign-up {
  color: $textcolor;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: $maincolor;
  }
}
</style>
