<template>
  <div class="main">
    <Loading :active.sync="isLoading" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <img :src="products.imageUrl" width="100%" alt />
        </div>
        <div class="col-md-6 col-12">
          <h3 class="mt-4">{{ products.title }}</h3>
          <p class="my-4">{{ products.description }}</p>
          <div class="mb-3 d-flex justify-content-end">
            <div
              v-for="(item, index) in size"
              :key="item.size"
              @click="checkSize(index)"
              class="size_box p-1 mr-2"
              :class="{ size_box_active: checkSizeIndex == index }"
            >
              {{ item.size }}
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-end">
            <h4 class="text-right mr-3 origin_price">
              <del>{{ products.origin_price || 0 | money }}</del>
            </h4>
            <h2 class="text-right price">{{ products.price || 0 | money }}</h2>
          </div>
          <div class="d-flex justify-content-end align-items-end">
            <h6 class="text-right subtotal">{{ subTotal || 0 | subcount }}</h6>
          </div>
          <div class=" justify-content-end errFont" :class="{ errFontHide: quantityCheck }">
            <h6 class="mb-0">請選擇數量</h6>
          </div>
          <div class="d-flex mt-3">
            <div class="mr-2" style="flex:1">
              <ul class="counter px-0 m-0">
                <li id="minus" style="flex:1">
                  <input class="btn width100" type="button" v-on:click="minuser" value="-" />
                </li>
                <li id="countnum" style="flex:3">{{ count }}</li>
                <li id="plus" style="flex:1">
                  <input class="btn width100" type="button" v-on:click="adder" value="+" />
                </li>
              </ul>
            </div>
            <div style="flex:2">
              <button class="btn btn-dark width100" @click="checkOutUpdate">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.container {
  font-family: 'Noto Sans TC', sans-serif !important;
}
.width100 {
  width: 100%;
}
.counter {
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 0.25rem;
}
#countnum {
  padding: 6px 0;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}
.counter li {
  list-style: none;
}
.size_box {
  border: 1px solid #dee2e6;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.size_box_active {
  background: #343a40;
  color: #fff;
}
.errFont {
  color: #dc3545;
  display: flex;
}
.errFontHide {
  display: none;
}
.origin_price {
  color: #6c757d;
}
.price {
  color: #dc3545;
}
.subtotal {
  color: #afafaf;
}
</style>
<script>
export default {
  data() {
    return {
      products: {},
      count: 0,
      subTotal: 0,
      quantityCheck: true,
      size: [{ size: 's' }, { size: 'm' }, { size: 'l' }, { size: 'xl' }],
      checkSizeIndex: 0,
      isLoading: false,
    };
  },
  methods: {
    adder() {
      this.count += 1;
      this.subTotal = this.count * this.products.price;
      this.quantityCheck = true;
    },
    minuser() {
      if (this.count <= 0) {
        this.count = 0;
      } else {
        this.count -= 1;
        this.subTotal = this.count * this.products.price;
      }
    },
    checkSize(index) {
      this.checkSizeIndex = index;
    },
    checkOutUpdate() {
      this.isLoading = true;
      if (this.count > 0) {
        this.axios
          .post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`, {
            product: this.products.id,
            quantity: this.count,
          })
          .then(() => {
            this.isLoading = false;
            this.$swal('成功', '成功放入購物車', 'success');
          })
          .catch(() => {
            this.isLoading = false;
            this.$swal('錯誤', '此商品已放入購物車', 'error');
          });
      } else {
        this.isLoading = false;
        this.$swal('錯誤', '請選擇商品', 'error');
        this.quantityCheck = false;
      }
    },
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    this.axios
      .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
