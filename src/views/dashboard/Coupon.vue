<template>
  <div class="container main">
    <div class="text-right mb-3">
      <button @click="openModal" class="btn btn-outline-primary btn-sm">新增產品</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>優惠卷名稱</th>
          <th>序號</th>
          <th>折扣百分比</th>
          <th>是否開放</th>
          <th>到期日</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupon" :key="item.id">
          <th>{{item.title}}</th>
          <th>{{item.code}}</th>
          <th>{{item.percent}}</th>
          <th>
            <div class="custom-control custom-switch">
              <input
                @click="couponswitch(item.id,item,item.enabled)"
                type="checkbox"
                class="custom-control-input custom-control-label"
                :id="item.id"
                value="item.enabled"
                v-model="item.enabled"
              />
              <label class="custom-control-label" :for="item.id"></label>
            </div>
          </th>
          <th>{{item.deadline.datetime}}</th>
          <th>
            <button
              type="button"
              @click="openRemoveModal(item)"
              class="btn btn-outline-danger btn-sm"
            >刪除</button>
            <button
              type="button"
              @click="openEditModal(item)"
              class="btn btn-outline-primary btn-sm"
            >編輯</button>
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
                  <div class="form-group col-12">
                    <label for="recipient-name" class="col-form-label">優惠卷名稱:</label>
                    <input type="text" v-model="template.title" class="form-control" />
                  </div>
                  <div class="form-group col-12">
                    <label for="recipient-name" class="col-form-label">優惠卷序號:</label>
                    <input type="text" v-model="template.code" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">折扣百分比:</label>
                    <input type="text" v-model="template.percent" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">到期日期:</label>
                    <input type="date" v-model="deadline_at_date" class="form-control" />
                  </div>
                  <div class="form-group col-6">
                    <label for="recipient-name" class="col-form-label">到期時間:</label>
                    <input type="time" step="1" v-model="deadline_at_time" class="form-control" />
                  </div>
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
    <div id="deleteModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h4 class="modal-title text-white">確認刪除</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <p>確定要刪除"{{template.title}}"(刪除後將無法復原)</p>
          </div>
          <div class="modal-footer">
            <div>
              <button type="submit" @click="cancel" class="btn btn-outline-primary btn-sm">取消</button>
              <button
                type="submit"
                @click="removeData(template)"
                class="btn btn-outline-danger btn-sm"
              >確認</button>
            </div>
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
      coupon: [],
      template: {},
      deadline_at_date: '',
      deadline_at_time: '',
      pagination: {},
      token: '',
    };
  },
  methods: {
    getData(num = 1) {
      if (num > this.pagination.total_pages) {
        // eslint-disable-next-line no-param-reassign
        num = this.pagination.current_page;
      }
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${num}`;
      this.axios
        .get(api)
        .then((res) => {
          this.coupon = res.data.data;
          this.pagination = res.data.meta.pagination;
          console.log(this.coupon);
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
    openEditModal(item) {
      this.deadline_at_date = item.deadline.datetime.slice(0, 10);
      this.deadline_at_time = item.deadline.datetime.slice(11, 19);
      this.template = {
        id: item.id,
        title: item.title,
        code: item.code,
        percent: item.percent,
        enabled: item.enabled,
      };
      $('#couponModal').modal('show');
    },
    openRemoveModal(item) {
      $('#deleteModal').modal('show');
      this.template = { ...item };
    },
    removeData(template) {
      let key;
      this.coupon.forEach((item, index) => {
        if (item.id === template.id) {
          key = index;
        }
      });
      const api = ` ${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.coupon[key].id}`;
      this.axios.delete(api).then((res) => {
        this.getData();
        console.log(res);
      });
      $('#deleteModal').modal('hide');
    },
    openModal() {
      this.template = {};
      this.deadline_at_date = '';
      this.deadline_at_time = '00:00:00';
      $('#couponModal').modal('show');
    },
    updateData() {
      if (this.template.id) {
        let key;
        this.coupon.forEach((item, index) => {
          if (this.template.id === item.id) {
            key = index;
          }
        });
        this.template.deadline_at = `${this.deadline_at_date} ${this.deadline_at_time}`;
        const api = ` ${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.coupon[key].id}`;
        console.log(api);
        this.axios.patch(api, this.template).then((res) => {
          this.getData();
          console.log(res);
        });
      } else {
        this.template.enabled = false;
        this.template.deadline_at = `${this.deadline_at_date} ${this.deadline_at_time}`;
        this.axios
          .post(
            `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`,
            this.template,
          )
          .then((res) => {
            console.log(res);
            this.getData();
          });
      }
      $('#couponModal').modal('hide');
    },
    couponswitch(itemId, item, itemEnabled) {
      this.template = {
        title: item.title,
        code: item.code,
        percent: item.percent,
        enabled: !itemEnabled,
        deadline_at: item.deadline.datetime,
      };
      console.log(this.template);
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${itemId}`;
      this.axios.patch(api, { ...this.template });
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
