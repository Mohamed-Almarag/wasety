<template>
  <div class="mediators">
    <div class="row">
      <div
        class="midiator-details col-sm-6 col-md-4 col-lg-3"
        v-for="user in users"
        :key="user.id"
      >
        <div class="content">
          <div class="photo">
            <img
              class="w-100"
              v-if="user.image"
              :src="user.image"
              :alt="user.first_name"
            />
            <img
              class="w-100"
              v-if="!user.image"
              src="../../assets/images/03.png"
              alt="user.first_name"
            />
          </div>
          <div class="description">
            <div class="name d-flex align-items-center">
              <img
                class="img"
                v-if="user.image"
                :src="user.image"
                :alt="user.first_name"
              />
              <img
                class="img"
                v-if="!user.image"
                src="../../assets/images/03.png"
                alt="user.first_name"
              />
              <h6 class="text-capitalize">
                <router-link
                  :to="{
                    path: '/dealers',
                    name: 'Dealers',
                    params: { item: user },
                    query: { user: user },
                  }"
                  >{{ user.first_name }}
                </router-link>
              </h6>
            </div>
            <p>{{ user.bio }}</p>
          </div>
          <div class="rating d-flex justify-content-between">
            <div class="star-rating">
              <span class="star"><fa icon="star" /></span>
              <span class="rate-one">{{ user.rate }}</span>
            </div>
            <div class="pricing">
              <span class="start text-capitalize">starting from</span>
              <span class="price"
                >{{ user.coin_price }} <fa icon="dollar-sign"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Midiators",
  data() {
    return {};
  },
  created() {
    this.getUsers();
  },
  mounted() {
    console.log(this.$store.getters.users);
    console.log(this.$store.getters.singleMidiator);
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["getUsers"]),

    getDealerObjectData(someObject) {
      this.$router.push({
        name: "Dealers",
        params: {
          obj: { ...someObject },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mediators {
  padding: 50px 0;
  .midiator-details {
    margin-bottom: 40px;
    .content {
      box-shadow: 0 3px 9px rgba($black, 0.2);
      padding: 15px 8px;
      border-radius: 15px;
      transition: 0.5s;

      &:hover {
        transform: translateY(-10px);
      }
      .photo {
        img {
          height: 200px;
          transition: 0.5s;
          border-radius: 10px;
        }
      }
      .description {
        .name {
          color: $textcolor;
          margin: 15px 0;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 3px 9px rgba($black, 0.2);
          }
          h6 {
            margin: 10px;
            a {
              text-decoration: none;
              color: $textcolor;
              transition: 0.3s;
              &:hover {
                color: $maincolor;
              }
            }
          }
        }
        p {
          color: $textcolor;
          line-height: 1.7;
          font-size: 0.8rem;
        }
      }
      .rating {
        // margin: 0 0 10px;
        flex-wrap: wrap;
        font-size: 0.9rem;
        .star-rating {
          .star {
            color: $ratecolor;
          }
          .rate-one {
            color: $ratecolor;
            margin: 0 8px;
          }
          .rate-two {
            color: $textcolor;
          }
        }
        .pricing {
          .start {
            color: $maincolor;
            font-weight: bold;
            margin: 5px;
          }
          .price {
            color: $ratecolor;
          }
        }
      }
    }
  }
}
</style>
