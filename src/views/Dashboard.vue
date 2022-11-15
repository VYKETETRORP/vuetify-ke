<template>
  
  <div>
    <v-card class="mb-3">
      <v-card-title>
        Dashboard
      </v-card-title>
    </v-card>

    <v-row>
      <v-col lg="7" cols="12">
        <v-row>
          <v-col sm="6" md="4" cols="12">
            <v-card color="green lighten-1">
              <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="80">mdi-grass</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Crops
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                {{crops.length}}
              </v-list-item-title>
            </v-card>
          </v-col>


          <v-col sm="6" md="4" cols="12">
            <v-card color="blue lighten-1">
              <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="80">mdi-memory</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Diseases
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                {{diseases.length}}
              </v-list-item-title>
            </v-card>
          </v-col>


          <v-col sm="6" md="4" cols="12">
            <v-card color="purple lighten-1">
               <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="80">mdi-folder-wrench-outline</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Measurements
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                {{measurements.length}}
              </v-list-item-title>
            </v-card>
          </v-col>


          <v-col sm="6" md="4" cols="12">
            <v-card color="orange lighten-1">
               <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="80">mdi-account-group</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Users
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                {{users.length}}
              </v-list-item-title>
            </v-card>
          </v-col>


          <v-col sm="6" md="4" cols="12">
            <v-card color="blue darken-3">
               <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="80">mdi-account-school</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Guide
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                00
              </v-list-item-title>
            </v-card>
          </v-col>

          <v-col sm="6" md="4" cols="12">
            <v-card color="red lighten-1">
               <v-list-item-content class="pt-5">
                <v-avatar rounded="0">
                  <v-icon color="white" size="60">mdi-bell</v-icon>
                </v-avatar>
              </v-list-item-content>
              <v-list-item-subtitle class="text-center text--white ma-1" style="color: white;">
                Total Alerts
              </v-list-item-subtitle>
              <v-list-item-title class="text-center text-h5 pb-5" style="color: white;"> 
                00
              </v-list-item-title>
            </v-card>
          </v-col>
          
        </v-row>
      </v-col>
      <v-col lg="5" cols="12">
       <v-data-table
      :headers="headers"
      :items="desserts"
      :test="search"
    ></v-data-table>
      </v-col>
    </v-row>

  </div>
  
</template>

<script>

export default {
  data() {
    return {
       search: '',
       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      crops: [

      ],
      diseases: [

      ],
      users: [

      ],
      measurements: [

      ]
    }
  },
  mounted() {
    const token =  window.localStorage.getItem('accessToken');
      this.axios.get('http://localhost:8000/api/get-data', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      })
      .then(response => {
        this.crops = response.data[0];
        this.measurements = response.data[1];
        this.diseases = response.data[2];
        this.users = response.data[3];
         console.log(response);
      }) 
      .catch(({ response }) => {
        console.log(response);
      })
  }
}
</script>

<style>

</style>