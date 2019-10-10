<template>
<div class="about">
                

                <v-row id="main-p1">

                    <v-card class="my-5" max-width="600">

                        <v-img height="800px" width="600px" :src="products.imgLink">

                        </v-img>

                    </v-card>

                    <v-card id="card1" class="my-5 indigo lighten-1 white--text" width="400">
                        <v-card-title>
                            <span class="display-3">Price: {{products.price}}$</span>
                        </v-card-title>
                        <v-card-text id="cardText">

                            <li class="mt-5 mb-2">
                                <span class="bold display-1 white--text">
                                    Køn: {{whatGender(products.isMan)}}
                                </span>
                            </li>
                            <li class="my-2">
                                <span class="bold display-1 white--text">
                                    Størrelse: {{products.size}}
                                </span>
                            </li>
                            <li class="my-2">
                                <span class="bold display-1 white--text">
                                    Farve: {{products.color}}
                                </span>
                            </li>
                            <li class="my-2">
                                <span class="bold display-1 white--text">
                                    Type: {{products.type}}
                                </span>
                            </li>

                            <v-card height="300px" width="400px" class="mb-max indigo lighten-1 white--text" flat>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit omnis
                                    distinctio accusamus assumenda recusandae minus illo molestias incidunt eos?
                                    Suscipit, praesentium facilis doloremque debitis similique voluptatibus dolore
                                    magnam illum.
                                </span>
                            </v-card>

                            <div id="buy-btn">
                                <v-btn min-width="300px" class="yellow accent-4" @click="messages++">
                                    <span>
                                        Add to cart
                                    </span>
                                </v-btn>
                            </div>

                        </v-card-text>

                    </v-card>

                </v-row>


        
</div>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        const { id } = this.$route.params;
            this.fetchProducts(id);
    },
    data: () => ({
       /* show: false,
        messages: 0,*/
        products: {}
    }),
    
    methods:{
        fetchProducts(id) {
        axios.get('https://tshirtshopdab.azurewebsites.net/api/tshirts/' + id)
                .then((data) => {
                  this.products = data.data;
                });
    },
          whatGender(isMan){
        if(isMan == true)
        {
          return "Man"
        }
        else
        {
          return "Woman"
        }
      }

    }
}
</script>