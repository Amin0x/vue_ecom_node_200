<template>
  <div class="container">
    <div>
      <button>{{ (name = "tablet") }}</button>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3">       
          <prod-card-component
            v-for="item in products"
            v-bind:item="item"
            v-bind:key="item.id"
            v-bind:product="item"
          ></prod-card-component>        
      </div>
    </div>
  </div>
</template>

<script>
import ProdCardComponent from "./ProdCardComponent.vue";
export default {
  data() {
    return {
      products: [
        {
          name: "",
          price: "30 SAR",
        },
      ],
    };
  },
  components: { ProdCardComponent },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
