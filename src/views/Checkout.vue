<!--小心prettier-->
<template>
  <div class="container main">
    <Loading :active.sync="isLoading" />
      <div class="row py-5">
        <div class="col-12 col-md-6">
          <div class="d-flex justify-content-center align-items-center">
            <h2 class="mb-0">購買資訊</h2>
          </div>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="confirmPayment">
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label class="mt-3" for="name">姓名</label>
                <input
                  id="name"
                  :class="classes"
                  type="text"
                  name="姓名"
                  v-model="name"
                  class="form-control"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>

              <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <label for="email">電子信箱</label>
                <input
                  id="email"
                  :class="classes"
                  type="text"
                  name="電子信箱"
                  v-model="email"
                  class="form-control"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider rules="required|min:8|numeric" v-slot="{ errors, classes }">
                <label for="tel">電話</label>
                <input
                  id="tel"
                  :class="classes"
                  type="tel"
                  name="電話"
                  v-model="tel"
                  class="form-control"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="address">地址</label>
                <input
                  id="address"
                  :class="classes"
                  type="address"
                  name="地址"
                  v-model="address"
                  class="form-control"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
              <!-- <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="payment">付款方式</label>
                <select
                  id="payment"
                  :class="classes"
                  type="number"
                  name="付款方式"
                  v-model="payment"
                  class="form-control"
                >
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="CVS">CVS</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider> -->
              <label for="payment">付款方式</label>
              <select
                id="payment"
                :class="classes"
                type="number"
                name="付款方式"
                v-model="payment"
                class="form-control"
                required
              >
                <option value="WebATM">WebATM</option>
                <option value="ATM">ATM</option>
                <option value="CVS">CVS</option>
                <option value="Barcode">Barcode</option>
                <option value="Credit">Credit</option>
                <option value="ApplePay">ApplePay</option>
                <option value="GooglePay">GooglePay</option>
              </select>
              <label for="message">留言</label>
              <textarea
                id="message"
                type="text"
                name="message"
                v-model="message"
                class="form-control"
              ></textarea>
              <button type="submit" class="btn btn-primary mt-3" :disabled="invalid">確認付款</button>
            </form>
          </validation-observer>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex justify-content-center align-items-center">
            <h2 class="mb-4">購物車內容</h2>
          </div>
          <div class="product_view">
            <div class="d-flex border mb-2" v-for="item in products" :key="item.id">
              <div class="col-md-6 col-lg-5 col-xl-4 px-0">
                <img
                  :src="item.product.imageUrl"
                  width="100%"
                  alt
                />
              </div>
              <div class="col-md-4 col-lg-5 col-xl-6 pt-3 py-md-1 py-lg-3 pl-lg-4 pr-0 overflow-hidden">
                <div>
                  <h5 class="mb-lg-2 text_overflow">{{ item.product.title }}</h5>
                  <div>
                    <div class="mb-1">價格：{{ item.product.price }}</div>
                    <div class="mb-1">數量：{{ item.quantity }}</div>
                    <div class="mb-1">小計：{{ item.product.price * item.quantity }}</div>
                  </div>
                </div>
              </div>
              <div class="col-2 d-flex align-items-center justify-content-center">
                <button class="btn btn-outline-danger" @click="deleteItem(item)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="d-flex mt-4 align-items-center">
            <div class="col-6 px-0 d-flex ">
              <input class="px-2 coupon_input" v-model="couponCode" type="text" placeholder="請輸入優惠卷">
              <button class="btn-dark coupon_btn" @click="getCoupon">套用</button>
            </div>
            <h5 class="mb-0 px-0 col-6 d-flex justify-content-end">
              總計 {{couponInfo.percent ? amount * (couponInfo.percent * 0.01) : amount | money}}
            </h5>
          </div>
        </div>
      </div>
  </div>
</template>
<style scoped>
input{
  outline: none;
}
.deleteBtn {
  width: 90px;
}
select {
  appearance: none;
}
.text_overflow{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.product_view{
    overflow-y: auto;
    max-height: 350px;
}
.product_view img{
  height: 150px;
  object-fit: cover;
}
.product_view::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    background: rgba(104, 104, 104, 0.1);
}
.product_view::-webkit-scrollbar-thumb {
    border-radius: 100px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #c2c2c2;
}
.product_view::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
.coupon_input{
  width: 70%;
}
.coupon_btn{
  outline: none;
  border: none;
  font-size: 14px;
  width: 30%;
}
</style>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: '',
      message: '',
      amount: '',
      couponCode: '',
      couponInfo: '',
      products: [],
      isLoading: false,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      let total = 0;
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`)
        .then((res) => {
          this.products = res.data.data;
          this.products.forEach((value) => {
            total += value.product.price;
            this.amount = total;
          });
          this.isLoading = false;
        });
    },
    deleteItem(item) {
      const productIdArray = this.products;
      let key;
      productIdArray.forEach((value, index) => {
        if (value.product.id === item.product.id) {
          key = index;
        }
      });
      this.axios
        .delete(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${productIdArray[key].product.id}`)
        .then(() => {
          this.getData();
        });
    },
    confirmPayment() {
      this.isLoading = true;
      const orderInformation = {
        name: this.name,
        email: this.email,
        tel: this.tel,
        address: this.address,
        payment: this.payment,
        coupon: this.couponCode,
        message: this.message,
      };
      this.axios
        .post(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`, orderInformation,
        )
        .then(() => {
          this.name = '';
          this.email = '';
          this.tel = '';
          this.address = '';
          this.payment = '';
          this.message = '';
          this.amount = '';
          this.couponInfo = '';
          this.couponCode = '';
          this.coupon = '';
          this.getData();
          this.isLoading = false;
          this.$swal('成功', '成功訂購', 'success');
        });
    },
    getCoupon() {
      this.isLoading = true;
      this.axios.post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`, { code: this.couponCode })
        .then((res) => {
          this.couponInfo = res.data.data;
          this.isLoading = false;
          this.$swal('成功', '序號正確', 'success');
        }).catch(() => {
          this.isLoading = false;
          this.$swal('失敗', '序號錯誤', 'error');
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
