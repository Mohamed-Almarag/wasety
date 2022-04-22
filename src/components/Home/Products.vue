<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div
          class="product-container col-md-4 col-sm-6"
          v-for="product in products"
          :key="product.id"
        >
          <div class="every-product">
            <div class="product-photo">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="content d-flex justify-content-between">
              <h5 class="name">{{ product.name }}</h5>
              <span class="price d-block"
                >{{ product.price }} <fa class="icon" icon="dollar-sign"
              /></span>
            </div>
            <div class="details">
              <p>{{ product.details | justSpecificWords }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Products",
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 80px 0;
  .product-container {
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s;
    margin-bottom: 30px;
    .every-product {
      border-radius: 10px;
      padding: 10px;
      background-color: #eee;
    }
    &:hover {
      transform: translateY(-10px);
    }
    .product-photo {
      img {
        filter: brightness(0.7);
        object-fit: cover;
        width: 100%;
        height: 220px;
        display: block;
        margin: auto;
        border-radius: 10px;
        transition: 0.5s;
      }
    }
    .content {
      margin: 30px 0 8px;
      .name {
        color: $maincolor;
        font-weight: bold;
        font-size: 1.2rem;
      }
      .price {
        color: $textcolor;
        .icon {
          color: $maincolor;
        }
      }
    }
    .details {
      p {
        line-height: 2;
        font-size: 1rem;
        color: $textcolor;
        margin: 0;
      }
    }
  }
}
</style>
