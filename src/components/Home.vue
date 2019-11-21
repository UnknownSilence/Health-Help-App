<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-content>
          <v-card-title>
            Health Score:
            <span class="ma-2" style="color: #EF2F2A">76</span>
          </v-card-title>
          <v-row class="my-12">
            <v-btn color="#EF2F2A" min-width="280px" class="mx-auto" large outlined>Find Care</v-btn>
          </v-row>
          <v-row class="my-12">
            <v-btn color="#EF2F2A" min-width="280px" class="mx-auto" large outlined>Schedule Visit</v-btn>
          </v-row>
          <v-row class="my-12">
            <v-btn color="#EF2F2A" min-width="280px" class="mx-auto" large outlined>Check Status</v-btn>
          </v-row>
          <v-row class="my-12">
            <v-btn color="green" min-width="280px" class="mx-auto" large outlined>Contribute</v-btn>
          </v-row>
        </v-card-content>
      </v-col>
      <v-col>
        <v-card-content>
          <v-flex>
            <v-img src="../assets/illus1v2.png"></v-img>
          </v-flex>
        </v-card-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>