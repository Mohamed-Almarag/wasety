<template>
  <div class="our-platforms text-capitalize">
    <div class="container">
      <div class="content">
        <div class="change-currency">
          <div class="row">
            <div class="currency col-lg-5 col-md-6">
              <label>Enter a dollar value</label>
              <input type="number" v-model="dollar" />
            </div>
            <div class="currency col-lg-5 col-md-6">
              <label>Your balance from we we</label>
              <input type="number" v-model="wewe" />
            </div>
          </div>
        </div>
        <div class="paltforms">
          <div class="row">
            <div
              class="platform col-md-3 col-sm-6"
              v-for="(platform, index) in platforms"
              :key="index"
            >
              <h6 class="text-capitalize name">{{ platform.name }}</h6>
              <span class="icon"
                ><i class="fa fa-usd" aria-hidden="true"></i
              ></span>
              <span class="price"
                >{{ platform.currency
                }}<fa class="dollar-icon" icon="dollar-sign"
              /></span>
            </div>
          </div>
        </div>
        <button class="text-capitalize buy-now-btn">buy now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurPlatforms",
  data() {
    return {
      dollar: "",
      wewe: "",
      platforms: [
        {
          name: "first platform",
          currency: "133,300",
        },
        {
          name: " second platform",
          currency: "8,300",
        },
        {
          name: "third platform",
          currency: "3,300",
        },
        {
          name: "fourth platform",
          currency: "1,600",
        },
      ],
    };
  },
  watch: {
    dollar: function (v) {
      this.wewe = v / 133.33;
    },
    wewe: function (v) {
      this.dollar = v * 133.33;
    },
  },
};
</script>

<style lang="scss" scoped>
.our-platforms {
  padding: 100px;
  @media (min-width: 320px) and (max-width: 991px) {
    padding: 10px;
    margin: 40px 0;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
  .content {
    background-color: $textcolor;
    color: $white;
    padding: 50px 30px;
    border-radius: 10px;
    text-align: center;

    .change-currency {
      .currency {
        @media (min-width: 320px) and (max-width: 768px) {
          margin-bottom: 20px;
        }
        label {
          margin-bottom: 10px;
          display: block;
          text-align: center;
        }
        input {
          border: 1px solid $bordercolor;
          color: $white;
          background: none;
          outline: none;
          padding: 7px;
          margin: 5px auto;
          display: block;
        }
      }
    }
    .paltforms {
      padding: 50px 0;
      @media (min-width: 320px) and (max-width: 768px) {
        padding: 30px 0;
      }
      .platform {
        @media (min-width: 320px) and (max-width: 768px) {
          margin-bottom: 30px;
        }
        .name {
          margin-bottom: 10px;
        }
        span {
          margin: 2px;
          text-align: center;
          .dollar-icon {
            color: $maincolor;
            margin: 0 5px;
          }
        }
      }
    }
    .buy-now-btn {
      background-color: #01dff6;
      color: #fff;
      padding: 10px 75px;
      border: none;
      border-radius: 5px;
      outline: none;
      margin-top: 20px;
      @media (min-width: 320px) and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
}
</style>
