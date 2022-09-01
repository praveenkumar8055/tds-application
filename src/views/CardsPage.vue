<template>
  <div :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }">
    <div>
      <label>Search :</label>
      <input type="text" v-model="search" placeholder="Search..." />
    </div>
    <div class="product-cart-container">
      <ProductSummaryCard
        v-for="product in resultQuery"
        :key="product.id"
        :product="product"
        v-on:delete-product="deleteProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "@/components/products/ProductSummaryCard.vue";
export default {
  name: "CardsPage",
  components: { ProductSummaryCard },
  data() {
    return {
      search: null,
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
      userTheme: "light-theme",
    };
  },
  computed: {
    resultQuery() {
      if (this.search) {
        return this.items.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.items;
      }
    },
  },
  methods: {
    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    deleteProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      this.items.splice(
        this.items.findIndex(
          (e) => (e.id && e.name) === (this.product.id && this.product.name)
        ),
        1
      );
    },
  },
};
</script>

<style lang="scss">
.product-cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.dark-theme {
  background: black;
}
</style>
