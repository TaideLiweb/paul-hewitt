<template>
  <div>
    <div>
      <div class="main">
        <img src="../assets/images/paul-hewitt-banner_1.jpg" width="100%" alt />
      </div>
      <div class="container section1">
        <div class="row mt-4">
          <div class="col-12 col-md-3 col-lg-2 product_category">
            <h4>商品分類</h4>
            <ul class="px-0">
              <li class="py-2" v-for="item in category" :key="item" @click="category_switch(item)">
                <a>{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-9 col-gl-10">
            <h3>全部商品</h3>
            <div class="row mt-3">
              <div class="col-sm-6 col-lg-4 mb-3" v-for="item in products" :key="item.id">
                <div class="card">
                  <div>
                    <img :src="item.imageUrl[0]" width="100%" alt />
                  </div>
                  <div>
                    <div class="py-2 px-3">
                      <h5>{{ item.title }}</h5>
                      <div class="my-2 d-flex align-items-center justify-content-between">
                        <div class="origin_price">
                          <del>{{ item.origin_price | money }}</del>
                        </div>
                        <div class="text-center price">{{ item.price | money }}</div>
                      </div>
                    </div>
                    <div class="d-flex border_t">
                      <router-link class="border_r buy px-2 py-2" :to="`/product/${item.id}`"
                        >購買商品</router-link
                      >
                      <button class="btn px-2 favor" style="flex:1;">
                        <i class="far fa-heart" @click="Atob(item, $event)" style="color:red"></i>
                      </button>
                    </div>
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
<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif !important;
}
.main {
  margin-top: 77px;
}
a:hover {
  text-decoration: none;
}
.product_category li {
  list-style: none;
}
.product_category li a {
  color: rgba(17, 17, 17, 0.7);
}
.product_category li a:hover {
  color: rgba(0, 0, 0, 1);
}
.border_t {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.border_r {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
.buy {
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: center;
  color: #343a40;
  transition: all 0.3s;
}
.buy:hover {
  color: #343a40;
  background: #e6dfd7;
}
.favor {
  flex: 1;
}
.favor:hover {
  color: #dc3545;
}
.origin_price {
  color: #6c757d;
  font-size: 16px;
}
.price {
  color: #dc3545;
  font-size: 1.25rem;
}
.heart {
  font-weight: 900;
}
</style>
<script>
export default {
  data() {
    return {
      favorite: [],
      getfavorite: [],
      products: [],
      category: ['所有商品', '手錶', '手環', '組合商品'],
    };
  },
  methods: {
    Atob(val, e) {
      const FavoriteGet = JSON.parse(localStorage.getItem('favorite')) || [];
      FavoriteGet.forEach((value) => {
        this.favorite.push(value.id);
      });
      const index = this.favorite.findIndex((v) => v === val.id);
      if (index === -1) {
        const NewFavoriteGet = [...FavoriteGet, val];
        localStorage.setItem('favorite', JSON.stringify(NewFavoriteGet));
      }
      e.target.classList.toggle('heart');
    },
    category_switch(item) {
      switch (item) {
        case '所有商品':
          this.category_all();
          break;

        default:
          this.category_fliter(item);
          break;
      }
    },
    category_all() {
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          // console.log('data', res);
          this.products = res.data.data;
          // console.log('products', this.products);
        });
    },
    category_fliter(categoryName) {
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          const filterAry = res.data.data;
          filterAry.forEach((item) => {
            if (item.category === categoryName) {
              const productAry = [];
              productAry.push(item);
              this.products = productAry;
            }
          });
          console.log(this.products);
        });
    },
  },
  created() {
    this.category_all();
  },
};
</script>
