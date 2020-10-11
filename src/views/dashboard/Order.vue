<template>
  <div class="container main">
    <table class="table">
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>付款方式</th>
          <th>訂單金額</th>
          <th>付款狀態</th>
          <th>訂單內容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order" :key="item.id">
          <th>{{item.id}}</th>
          <th>{{item.payment}}</th>
          <th>{{item.amount}}</th>
          <th>{{item.paid}}</th>
          <th>
            <button
              type="button"
              @click="openEditModal(item)"
              class="btn btn-outline-primary btn-sm"
            >訂單詳情</button>
          </th>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增優惠卷</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="container">
                <div class="row">
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">客戶名稱:</label>
                    <input type="text" v-model="orderUser.name" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">付款方式:</label>
                    <select class="form-control" v-model="orderOther.payment">
                      <option value="WebATM">WebATM</option>
                      <option value="ATM">ATM</option>
                      <option value="CVS">CVS</option>
                      <option value="Barcode">Barcode</option>
                      <option value="Credit">Credit</option>
                      <option value="ApplePay">ApplePay</option>
                      <option value="GooglePay">GooglePay</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <label for="recipient-name" class="col-form-label">客戶email:</label>
                    <input type="text" v-model="orderUser.email" class="form-control" />
                  </div>
                  <div class="form-group col-12">
                    <label for="recipient-name" class="col-form-label">客戶地址:</label>
                    <input type="text" v-model="orderUser.address" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">客戶電話:</label>
                    <input type="text" v-model="orderUser.tel" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">優惠卷:</label>
                    <input type="text" v-model="orderOther.coupon" class="form-control" />
                  </div>
                  <div class="form-group col-12">
                    <label for="recipient-name" class="col-form-label">客戶備註:</label>
                    <textarea type="" v-model="orderOther.message" class="form-control" />
                  </div>
                </div>
                <div class="row">
                  <table class="table">
                    <thead class="thead-light">
                      <th>產品名稱</th>
                      <th>數量</th>
                      <th>單價</th>
                      <th>小計</th>
                    </thead>
                    <tbody>
                      <tr v-for="item in orderProduvts" :key="item.id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>{{ item.product.price * item.quantity }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateData">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  margin-top: 77px;
}
</style>
<script>
/* global $ */
export default {
  data() {
    return {
      order: [],
      template: {},
      pagination: {},
      orderProduvts: [],
      orderOther: {},
      orderUser: {},
      token: '',
    };
  },
  methods: {
    getData(num) {
      let pageNum = num;
      if (num > this.pagination.total_pages) {
        pageNum = this.pagination.current_page;
      }
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${pageNum}`;
      this.axios
        .get(api)
        .then((res) => {
          this.order = res.data.data.map((item) => item);
          this.pagination = res.data.meta.pagination;
        });
    },
    openEditModal(template) {
      let key;
      this.order.forEach((item, index) => {
        if (item.id === template.id) {
          key = index;
        }
      });
      this.template = template;
      this.axios.get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${this.order[key].id}`,
      ).then((res) => {
        this.orderOther = res.data.data;
        this.orderOther.coupon = this.orderOther.coupon ? this.orderOther.coupon.code : '無優惠卷';
        this.orderOther.message = this.orderOther.message ? this.orderOther.message : '無備註';
        this.orderProduvts = this.orderOther.products;
        this.orderUser = this.orderOther.user;
      });
      $('#couponModal').modal('show');
    },
    openModal() {
      this.template = {};
      this.deadline_at_date = '';
      this.deadline_at_time = '';
      $('#couponModal').modal('show');
    },
    updateData() {
      let key;
      this.order.forEach((item, index) => {
        if (this.template.id === item.id) {
          key = index;
        }
      });
      const api = ` ${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${this.order[key].id}`;
      this.template = { ...this.orderOther, ...this.orderUser };
      this.axios.patch(api, this.template).then(() => {
        this.getData();
      });
      $('#couponModal').modal('hide');
    },
    cancel() {
      $('#couponModal').modal('hide');
      $('#deleteModal').modal('hide');
    },
  },
  created() {
    this.getData();
  },
};
</script>
