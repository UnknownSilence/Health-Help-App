<template>
  <v-app>
    <div class="home page" id="mainContainer">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item @click="drawer">
                <v-list-item-action>
                  <v-icon color="#EF2F2A">mdi-home</v-icon>
                </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="drawer">
              <v-list-item-action>
                <v-icon color="#EF2F2A">fa-medkit</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Find Care</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="drawer">
              <v-list-item-action>
                <v-icon color="#EF2F2A">fa-clock</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Schedule Visit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="drawer">
              <v-list-item-action>
                <v-icon color="#EF2F2A">mdi-check-circle</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Check Status</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="drawer">
              <v-list-item-action>
                <v-icon color="#EF2F2A">fa-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contribute</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="#EF2F2A" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>HealthHelp</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon append color="white">fa-plus</v-icon>
        </v-app-bar>

        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center fill-height justify-center>
              <v-flex text-xs-center fill-height>
                <v-card>
                  <router-view></router-view>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
        <v-footer color="#EF2F2A" app>
          <span class="white--text">&copy; 2019</span>
        </v-footer>
      </v-app>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null
  })
};
</script>
