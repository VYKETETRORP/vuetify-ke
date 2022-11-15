<template class="form">
  <div class="app"  >
    
    <div class="text-center">
      <h2 class="indigo--text">Sign In</h2>
    </div>
    
    <v-divider class="ma-5"/>

    <v-form  @submit.prevent="onSubmit" lazy-validation ref="form" >

      <v-card-text>
        <v-alert color="red" v-if="errors?.message" class="white--text text-center mb-8" elevation="3">{{errors?.message}}</v-alert>
        <v-text-field
          type="email"
          label="Email"
          placeholder="Email"
          prepend-inner-icon="mdi-email"
          outlined
          v-model="form.email"
          :rules="[v => !!v || 'Please enter email']"
        />
        <!-- <p v-if="errors.email">{{errors.email[0]}}</p> -->
        <v-text-field
          v-model="form.password"
          :type="passwordShow ? 'text' : 'password'"
          label="Password"
          placeholder="Password"
          prepend-inner-icon="mdi-lock"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordShow = !passwordShow"
          outlined
          :rules="[v => !!v || 'Please enter password']"
        />
        <v-switch label="Remember me" color="indigo"></v-switch>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn type="submit" color="indigo">
          <span class="white--text px-5">Login</span>
        </v-btn>
      </v-card-actions>

    </v-form>

    <v-card-actions>
      <a href="/register" class="black--text d-flex">  Not yet have account?</a>

      <v-spacer/>

      <a href="/forget" class="black--text d-flex">  Forgot password?</a>
      
    </v-card-actions>
    <br><br>
    <p class="ml-5">By continuing, you agree to Plant Helper's <a href="#" style="color:black;">Policy</a> and <a style="color:black;" href="#">Terms of Use</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordShow: 0,
      form: {
        email: null,
        password: null
      },
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      if(this.$refs.form.validate()) {
        this.axios.post('http://login.info/api/login', this.form)
        .then(response => {
          console.log(response);
          window.localStorage.setItem("accessToken", response.data.access_token);
          window.localStorage.setItem("refreshToken", response.data.refresh_token);
          window.localStorage.setItem("authenticated", 1);
          window.localStorage.setItem('isTokenRefreshing', 0);
          this.$router.push({name: 'home'});
        })
        .catch(({ response }) => {
          this.errors = response.data;
        })
        .finally(() => {
          
        })
      }
    },
  },

}
</script>

<style>
.app {
  
  background-color: rgb(255, 244, 244); /* Fallback color */
  background-color: rgba(255, 255, 255, 0.7); /*Black w/opacity/see-through */

  font-weight: bold;
  border: 1px solid #f1f1f1;
  position: absolute;
  top: 840%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  width: 100%;
 
  text-align: center;



}

</style>