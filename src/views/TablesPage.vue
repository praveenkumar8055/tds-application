<template>
  <div>
    <b-table
      striped
      responsive
      sticky-header
      hover
      :items="items"
      :fields="fields"
      :busy="isBusy"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TablesPage",
  data() {
    return {
      isBusy: false,
      items: [],
      fields: [
        "API",
        "Auth",
        "Category",
        "Cors",
        "Description",
        "HTTPS",
        "Link",
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isBusy = !this.isBusy;
      try {
        const response = await axios.get("https://api.publicapis.org/entries");
        this.items = response.data.entries;
        this.isBusy = !this.isBusy;
      } catch (error) {
        console.log(error);
        this.isBusy = !this.isBusy;
      }
    },
  },
};
</script>

<style scoped>
.b-table-sticky-header {
  max-height: 500px !important;
}
</style>
