<template>
  <v-app>
   <div class="bg">
     
    
    <v-main class="d-flex justify-center align-center">
        <v-col cols="10" lg="5" class="mx-auto">
            <v-card class="pa-4 my-5">
                
                <router-view></router-view>

            </v-card>
        </v-col>
    </v-main>


   </div>
  </v-app>
</template>
<style>
.bg{
    /* background-image: url(''); 
      background: url('https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/313249147_1456447864876982_277807099796992584_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkiTqKiGqfr54wpTYw2aEAkFId1b2WNDKQUh3VvZY0MgEDL4z1z67WdU2_8U63qmwnPDtzEu6TKHA_yDDad5Ba&_nc_ohc=HJnZpAlbivMAX_2KngH&tn=MfcdcHVicpqOziLs&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfDG8GWX02-q0wNfQUjRf_5baMLLJFlexgxIy1FYrusxdw&oe=636F8735') no-repeat center center fixed !important;
   /* Add the blur effect */
   /* background: url('https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/315014993_192294070028567_87231149541392857_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHK3VUXHRhSHQpVUd7qXuqTN3XDW5vCGkY3dcNbm8IaRrzufhhKFVQazy0UgmfGu_2oqxeoZttOyyIyRHz_VSIo&_nc_ohc=Crl5wDfEq5cAX9sbRpz&_nc_oc=AQmPRVG-4vly9BNXEagVNa99vjyCrq5e7Re6Mky-31x895bg9Lun7zCJFzil6opvluo&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AfA8JXBB_HqdBpyKEeHy_zcYw690HrlsvX_fcQR5T72hiQ&oe=636E062C') no-repeat center center fixed !important; */
  filter: blur(8px);
  -webkit-filter: blur(0.2px);
  background-image: url('/src/assets/logo.png');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

</style>