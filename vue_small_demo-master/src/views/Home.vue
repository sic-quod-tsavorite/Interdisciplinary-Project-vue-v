<template>
  <div>
    <v-app-bar fixed app flat class="indigo lighten-1">
                        <v-toolbar-title>
                            <div id="home">
                                <a id="home" href="home.vue">
                                    <span class="font-weight-bold white--text">Best Shirts:</span>
                                    <span class="font-weight-light white--text">SHIRTS FOR YOU</span>
                                </a>
                            </div>
                        </v-toolbar-title>
                        <div class="text-center ml-5">
                            <!--<v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" dark v-on="on">
                                        <v-icon left>expand_more</v-icon>
                                        Category
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                                    </v-list-tile>                                    
                                </v-list>
                            </v-menu>-->
                        </div>
                        <v-spacer></v-spacer>
                        <div>Search Bar Here</div>
                        <v-spacer></v-spacer>

                        <div class="text-center">
                            <v-badge overlap left color="yellow accent-4">
                                <template v-slot:badge v-if="messages > 0">{{ messages }}</template>

                                <v-btn class="grey lighten-3 ma-1">
                                    <v-icon left>shopping_cart</v-icon>
                                    <span>Your Cart</span>
                                </v-btn>

                            </v-badge>
                        </div>


                        <v-btn class="yellow accent-4 black--text depressed ma-2">Check Out</v-btn>
                    </v-app-bar>

                    <v-row id="carousel">
                        <v-carousel :show-arrows="false" :cycle="false">
                            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
                                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                        </v-carousel>
                    </v-row>
                    <v-row id="main">
                        <v-col id="products">

                            <section id="prc">
                                <div id="productCont">

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <a id="tt1" href="product1.html">
                                            <v-img class="white--text" height="500px"
                                                src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                                <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                                </v-card-title>
                                            </v-img>
                                        </a>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text>
                                                <a id="tt1" href="product1.html">View product</a>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                    <v-card class="my-5 mx-auto" max-width="300">
                                        <v-img class="white--text" height="500px"
                                            src="http://www.hotel-engelhof.eu/img/content/content-3.jpg">
                                            <v-card-title class="align-end fill-height">Top 10 Australian beaches
                                            </v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-btn text color="orange" class="mx-1" @click="messages++">
                                                Add to card
                                            </v-btn>
                                            <v-btn text color="orange">
                                                View product
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>

                                </div>
                            </section>

                        </v-col>
                    </v-row>
                    <v-footer dark padless>
                        <v-card flat tile class="indigo lighten-1 white--text text-center">
                            <v-card-text>
                                <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                                    <v-icon size="24px">{{ icon }}</v-icon>
                                </v-btn>
                            </v-card-text>

                            <v-card-text class="white--text pt-0">
                                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
                                commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at
                                orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
                                faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
                                cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut
                                orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus.
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-text class="white--text">
                                {{ new Date().getFullYear() }} — <strong>BEST SHIRTS A/S</strong>
                            </v-card-text>
                        </v-card>
                    </v-footer>



  </div>
</template>


<script>
export default {
  data () {
    return {
        items: [
          {
            src: 'https://dslv9ilpbe7p1.cloudfront.net/Uyj7Yyeq_KuVx1FsHjnMnw_store_header_image',
          },
          {
            src: 'http://www.daystarmarketing.com/media/932f3258-f52f-45ac-a6e4-335ad1302730/YUQ5hg/shirt-stack-2.jpg',
          },
          {
            src: 'https://userdefenders.com/wp-content/uploads/2017/10/User-Defenders-podcast-Logo-Tee-Model-Charcoal.png',
          },
          {
            src: 'https://www.psdmockups.com/wp-content/uploads/2017/02/Male-Model-T-Shirt-Bundle-PSD-Mockup.jpg',
          },
        ],
              icons: [
          'fa fa-facebook',
          'fa fa-twitter',
          'fa fa-linkedin',
          'fa fa-instagram',
        ],
    }
  }
}
</script>
<script>
        export default {
            data () {
                return {
                    links: [
                        {text: 'Men', route:'/men'},  
                        {text: 'Women', route:'/women'},
                    ]
                }
            }
        }
    </script>