<template>
  <v-row id="main">
    <v-col id="products">
      <section id="prc">
        <div id="productCont" v-for="product in products" v-bind:key="product.id">
          <v-card class="my-5 mx-auto" max-width="300">
            <v-card
              :to="{
                                name: 'about',
                                params: {
                                id: product.id
                                }
                            }"
            >
              <a id="tt1">
                <v-img class="white--text" height="500px" :src="product.imgLink">
                  <v-card-title class="align-end fill-height">
                    <div id="prText">
                    {{product.color}} {{product.type}}
                    </div>
                    </v-card-title>
                </v-img>
              </a>
            </v-card>

            <v-card-actions>
              <v-btn text color="orange" class="mx-1" @click="messages++">Add to cart</v-btn>
              <v-btn
                :to="{
                                    name: 'about',
                                    params: {
                                    id: product.id
                                    }
                                    }"
              >View</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </section>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.fetchProducts();

  },
  data() {
    return {
      /*show: false,
      messages: 0,*/
      products: [],
      fetchProducts() {
        axios
          .get("https://tshirtshopdab.azurewebsites.net/api/tshirts")
          .then(data => {
            this.products = data.data.filter(function(ele){
       return ele.isMan != true;
   });
          });
      }
  }}
};
</script>