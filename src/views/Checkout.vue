<!--小心prettier-->
<template>
  <div>
    <div class="container main">
      <div class="row">
        <div class="col-6">
          <div class="d-flex justify-content-center align-items-center">
            <h2>購買資訊</h2>
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
              <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                <label for="tel">電話</label>
                <input
                  id="tel"
                  :class="classes"
                  type="text"
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
                  type="text"
                  name="地址"
                  v-model="address"
                  class="form-control"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors, classes }">
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
              </validation-provider>
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
        <div class="col-6">
          <div class="d-flex justify-content-center align-items-center">
            <h2 class="mb-4">購物車內容</h2>
          </div>
          <div>
            <table class="table">
              <thead class="thead-light">
                <th>產品名稱</th>
                <th>數量</th>
                <th>單價</th>
                <th>小計</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.product.price }}</td>
                  <td>{{ item.product.price * item.quantity }}</td>
                  <td class="deleteBtn">
                    <button class="btn btn-outline-danger" @click="deleteItem(item)">刪除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  margin-top: 90px;
}
.deleteBtn {
  width: 90px;
}
select {
  appearance: none;
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
      products: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`)
        .then((res) => {
          this.products = res.data.data;
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
        .delete(
          // eslint-disable-next-line comma-dangle
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${productIdArray[key].product.id}`
        )
        .then(() => {
          this.getData();
        });
    },
    confirmPayment() {
      const orderInformation = {
        name: this.name,
        email: this.email,
        tel: this.tel,
        address: this.address,
        payment: this.payment,
        message: this.message,
      };
      this.axios.post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`, orderInformation)
        .then((res) => {
          this.getData();
          console.log(res);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
