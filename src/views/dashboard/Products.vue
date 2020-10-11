<template>
  <div class="container main">
    <Loading :active.sync="isLoading" />
    <div class="text-right mb-3">
      <button @click="openModal" class="btn btn-outline-primary btn-sm">新增產品</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th>分類</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <th>{{item.title}}</th>
          <th>{{item.category}}</th>
          <th>{{item.origin_price}}</th>
          <th>{{item.price}}</th>
          <th>
            <div class="custom-control custom-switch">
              <input
                @click="productswitch(item.id,item,item.enabled)"
                type="checkbox"
                class="custom-control-input custom-control-label"
                :id="item.id"
                value="item.enabled"
                v-model="item.enabled"
              />
              <label class="custom-control-label" :for="item.id"></label>
            </div>
          </th>
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
    <pagination :pages="pagination" @updata="getData"></pagination>
    <!--modal-->
    <modal @update-data="updateData" @cancel="cancel" :template="template"></modal>
    <!--delete modal-->
    <deletemodal @cancel="cancel" @remove-data="removeData" :template="template"></deletemodal>
  </div>
</template>
<style scoped>
.main {
  margin-top: 77px;
}
</style>
<script>
/* global $ */
import modal from '../../components/Modal.vue';
import deletemodal from '../../components/DeleteModal.vue';
import pagination from '../../components/Pagination.vue';

export default {
  components: {
    pagination,
    modal,
    deletemodal,
  },
  data() {
    return {
      products: [],
      template: { imageUrl: [] },
      pagination: {},
      token: '',
      isLoading: false,
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
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
        });
    },
    openModal() {
      this.template = { imageUrl: [] };
      $('#modal').modal('show');
    },
    openEditModal(item) {
      this.template = { ...item };
      $('#modal').modal('show');
    },
    openRemoveModal(item) {
      $('#deleteModal').modal('show');
      this.template = { ...item };
    },
    removeData(template) {
      this.isLoading = true;
      let key;
      this.products.forEach((item, index) => {
        if (item.id === template.id) {
          key = index;
        }
      });
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.products[key].id}`;
      this.axios.delete(api).then(() => {
        this.getData();
        this.isLoading = false;
      });
      $('#deleteModal').modal('hide');
    },

    updateData() {
      this.isLoading = true;
      if (this.template.id) {
        let key;
        this.products.forEach((item, index) => {
          if (this.template.id === item.id) {
            key = index;
          }
        });
        const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.products[key].id}`;
        this.axios.patch(api, this.template).then(() => { this.isLoading = false; });
        this.$set(this.products, key, this.template);
        $('#modal').modal('hide');
        this.template = { imageUrl: [] };
        /* 以上為編輯方法 */
      } else {
        const time = new Date().getTime();
        this.template.enabled = false;
        this.template.id = time;
        const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
        this.axios.post(api, this.template).then(() => {
          this.getData();
          this.isLoading = false;
        });
        $('#modal').modal('hide');
        this.template = { imageUrl: [] };
      }
    },
    productswitch(itemId, item, itemEnabled) {
      this.template = { ...item };
      this.template.enabled = !itemEnabled;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${itemId}`;
      this.axios.patch(api, { ...this.template });
    },
    cancel() {
      $('#modal').modal('hide');
      $('#deleteModal').modal('hide');
    },
  },
  created() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)loginVerify\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getData();
  },
};
</script>
