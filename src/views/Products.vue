<template>
  <div>
    <Loading :active.sync="isLoading" />
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
                    <div class="py-2 px-3 border_t overflow-hidden">
                      <h5 class="text_break">{{ item.title }}</h5>
                      <div class="my-2 d-flex align-items-center justify-content-between">
                        <div class="origin_price">
                          <del>{{ item.origin_price | money }}</del>
                        </div>
                        <div class="text-center price">{{ item.price | money }}</div>
                      </div>
                    </div>
                    <div class="d-flex border_t">
                      <router-link class="border_r buy px-2 py-2" :to="`/product/${item.id}`"
                        >商品詳情</router-link
                      >
                      <button class="btn px-2 favor" @click="Atob(item.id)" style="flex:1;">
                        <i
                          class="far fa-heart"
                          style="color:red"
                          v-if="favorite.indexOf(item.id) === -1"
                        ></i>
                        <i class="fas fa-heart" style="color:red" v-else></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif !important;
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
.text_break{
  overflow : hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
}
</style>
<script>
export default {
  data() {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      products: [],
      category: ['所有商品', '手錶', '手環', '組合商品'],
      isLoading: false,
    };
  },
  methods: {
    Atob(id) {
      const favorite = this.favorite.indexOf(id);
      if (favorite === -1) {
        this.favorite.push(id);
      } else {
        this.favorite.splice(favorite, 1);
      }
      localStorage.setItem('favorite', JSON.stringify(this.favorite));
      this.$bus.$emit('pushfavorite', id);
    },
    category_switch(item) {
      this.isLoading = true;
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
      this.isLoading = true;
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.products = res.data.data;
          this.$bus.$on('delfavorite', (id) => {
            const favorite = this.favorite.indexOf(id);
            if (favorite !== -1) {
              this.favorite.splice(favorite, 1);
            }
          });
          this.isLoading = false;
        });
    },
    category_fliter(categoryName) {
      this.isLoading = true;
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          const filterAry = res.data.data;
          const productAry = [];
          filterAry.forEach((item) => {
            if (item.category === categoryName) {
              productAry.push(item);
              this.products = productAry;
            }
          });
          this.isLoading = false;
        });
    },
  },
  created() {
    this.category_all();
  },
};
</script>
