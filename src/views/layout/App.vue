<template>
  <v-app class="bosy">
  
    <Navbar @search="test"/>
    <v-main>
      <router-view></router-view>
      <h1 v-show="search">{{search}}</h1>
    </v-main>
  </v-app>

</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Productlist from '@/components/Productlist.vue'

import { onMounted } from 'vue'
export default {
  components:{
    Navbar,
    Productlist,
  },
  data() {
    return {
      search: '' 
    }
  },
 mounted(){
  this.axios.get('login.info/api/user')
 },

 methods: {
  test(search) {
    console.log('search from parent:', search);
    this.search = search
  }
 }
  


}
</script>
<style>

</style>
