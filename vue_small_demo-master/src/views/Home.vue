<template>
  <div>
    <v-row id="carousel">
      <v-carousel :show-arrows="true" :cycle="false">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
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
                    <v-card-title class="align-end fill-height">{{product.color}} {{product.type}}</v-card-title>
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
  </div>
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
      items: [
        {
          src:
            "https://dslv9ilpbe7p1.cloudfront.net/Uyj7Yyeq_KuVx1FsHjnMnw_store_header_image"
        },
        {
          src:
            "http://www.daystarmarketing.com/media/932f3258-f52f-45ac-a6e4-335ad1302730/YUQ5hg/shirt-stack-2.jpg"
        },
        {
          src:
            "https://userdefenders.com/wp-content/uploads/2017/10/User-Defenders-podcast-Logo-Tee-Model-Charcoal.png"
        },
        {
          src:
            "https://www.psdmockups.com/wp-content/uploads/2017/02/Male-Model-T-Shirt-Bundle-PSD-Mockup.jpg"
        }
      ],
      fetchProducts() {
        axios
          .get("https://tshirtshopdab.azurewebsites.net/api/tshirts")
          .then(data => {
            this.products = data.data;
          });
      }
    };
  }
};
</script>
