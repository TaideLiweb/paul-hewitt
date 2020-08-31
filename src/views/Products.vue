<template>
  <div>
    <div>
      <div>
        <img src="../assets/images/paul-hewitt-banner_1.jpg" width="100%" alt />
      </div>
      <div class="container section1">
        <div class="row mt-4">
          <div class="col-12 col-md-3 col-lg-2 product_category">
            <h4>商品分類</h4>
            <ul class="px-0">
              <li>
                <a href>全部商品</a>
              </li>
              <li>
                <a href>手錶</a>
              </li>
              <li>
                <a href>手環</a>
              </li>
              <li>
                <a href>組合商品</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-9 col-gl-10">
            <h2>全部商品</h2>
            <div class="row">
              <div class="col-sm-6 col-lg-4 col-xl-3 mb-3" v-for="item in products" :key="item.id">
                <div>
                  <img :src="item.imageUrl[0]" width="100%" alt />
                </div>
                <div>
                  <div>
                    <h5 class="text-center">{{ item.category }}</h5>
                    <h6 class="text-center">{{ item.title }}</h6>
                    <div class="text-center">
                      <del>{{ item.origin_price }}</del>
                    </div>
                    <div class="text-center">{{ item.price }}</div>
                  </div>
                  <div class="d-flex">
                    <router-link
                      class="btn btn-outline-dark px-2 mr-2"
                      style="flex:5;"
                      :to="`/product/${item.id}`"
                    >購買商品</router-link>
                    <button class="btn btn-outline-dark px-2" style="flex:1;">
                      <i class="far fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height:300px"></div>
      </div>
    </div>
  </div>
</template>
<style>
.product_category li {
  list-style: none;
}
.product_category li a {
  color: rgba(17, 17, 17, 0.7);
}
</style>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_UUID}${process.env.VUE_APP_APIPATH}/ec/products`)
      .then((res) => {
        console.log('data', res);
        this.products = res.data.data;
        console.log('products', this.products);
      });
  },
};
</script>
