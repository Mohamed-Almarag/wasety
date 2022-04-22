<template>
  <div class="offers-notifications">
    <div
      class="every-notification d-flex"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <router-link
        class="link"
        :to="`/transactions/${notification.data.project_id}`"
      >
        <div class="photos">
          <img
            v-if="userImg"
            :src="userImg"
            alt="user"
            class="d-block user-img"
          />
          <img
            v-else
            src="../../assets/images/default.png"
            alt="user"
            class="d-block user-img"
          />
        </div>
        <div class="details">
          <p class="texts">{{ notification.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffersNotifications",
  data() {
    return {
      userImg: "",
    };
  },
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    },
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    this.userImg = userInfo.image;
    // this.lastName = userInfo.last_name;
    // console.log(userInfo);
  },
  mounted() {
    this.$store.dispatch("getAllNotifications").then(() => {
      console.log("yes");
      // console.log(this.notifications);
    });
    // .catch((error) => {
    //   if (error.response.status === 404) {
    //     // this.$router.push({ name: "NotFound" });
    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
.offers-notifications {
  .every-notification {
    margin-bottom: 15px;
    .link {
      display: flex;
      gap: 10px;
      color: $textcolor;
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        color: $maincolor;
      }
    }
    .user-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
