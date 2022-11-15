   <template>
  <nav>
    <v-toolbar flat app color="teal darken-2">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
        clipped="left"
      ></v-app-bar-nav-icon>
      <v-tool-title class="white--text">
        <span>House </span>
        <span class="font-weight-light bold">PlantClub</span>
      </v-tool-title>
      <v-spacer></v-spacer>

      <!-- dropdown -->

      <!-- <v-btn flat slot="activator" color="grey">
          <v-icon>mdi-image</v-icon>
          <span>Menu</span>
        </v-btn> -->
      <!-- <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>
              {{link.text}}
            </v-list-tile-title>

          </v-list-tile>
        </v-list> -->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="transparent" dark flat v-bind="attrs" v-on="on">
              <v-icon> mdi-menu-down </v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>

      <!--PopUp-->

      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          @input="test()"
        ></v-text-field>
      </v-card-title>

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-map</v-icon>
            
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>  -->

      <!-- <template>
   <nav class="container mb-4 mt-4">
    <div class="row">
      <div class="col-9"></div>
      <div class="col-3">
        <select class="custom-select" v-model="lang" @change="handleChange($event)"> 
          <option value="en">English</option>
          <option value="kh">Khmer</option>
        </select>
      </div>
    </div>

  </nav>
 </template> -->

    <span>Cart (0)</span>
      <!--EndPopUp-->
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="teal darken-2">
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="97">
            <img src="/plant1.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-2">House PlantClub</p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon-action>
            <v-icon class="white--text px-3"> {{ link.icon }}</v-icon>
          </v-list-item-icon-action>
          <v-item-content>
            <v-list-title class="white--text">
              {{ link.text }}
            </v-list-title>
          </v-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>
<script >
export default {
  data() {
    return {
      drawer: false,
      loaded: false,
      loading: false,
      links: [
        { text: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { text: "About", icon: "mdi-information", route: "/about" },
        { text: "Crop", icon: "mdi-sprout", route: "/crop" },
        { text: "Guide", icon: "mdi-share-variant", route: "/guide" },
        { text: "Disease", icon: "mdi-virus", route: "/disese" },
        { text: "User Management" },
        { text: "User", icon: "mdi-account", route: "/user" },
        { text: "Setting" },
        { text: "Setting", icon: "mdi-cog", route: "/setting" },
        { text: "Extra" },
        { text: "Condition", icon: "mdi-radioactive", route: "/condition" },
        { text: "Category", icon: "mdi-shape-outline", route: "/category" },
        { text: "Comment" },
        { text: "Comment", icon: "mdi-comment-text", route: "/comment" },
      ],
      methods: {
        onClick() {
          this.loading = true;

          setTimeout(() => {
            this.loading = false;
            this.loaded = true;
          }, 2000);
        },
      },
    };
  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    test() {
      this.$emit('search', this.search)
    }
    // handleChange (event) {
    //           this.$emit("customChange", event.target.value.toUpperCase())
    //       }
  },
};
</script>
