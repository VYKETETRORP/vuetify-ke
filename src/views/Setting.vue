<template>
  <v-app color="grey lighten-4">
    <div class="conta">
      <div class="row">
        <div class="col-8"><Productlist /></div>
        <div class="col-4"><Cart /></div>
      </div>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Cart from "@/components/Cart.vue";
import Productlist from "@/components/Productlist.vue";

export default {
  name: "App",
  components: {
    Productlist,
    Cart,
    //  Navbar,
  },
};
</script>





