<template>
  <div>
    <header class="bg-white top wv100">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="col-6 d-flex justify-content-end justify-content-lg-start px-0">
            <a class="navbar-brand" href="#">
              <img src="../assets/images/logo.png" width="208" alt />
            </a>
          </div>
          <div class="collapse navbar-collapse justify-content-end col-lg-6 px-0" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active " data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/">
                  首頁
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/products">
                  全部產品
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/checkout">
                  購物車
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li
                class="nav-item"
                @click="getLocalStorage"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <router-link
                  class="nav-link"
                  to="/products"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="far fa-heart"></i>
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/login">
                  <i class="far fa-user"></i>
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">我的最愛</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead class="thead-light">
                <th>產品名稱</th>
                <th>數量</th>
                <th>單價</th>
                <th>小計</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in FavoriteGet2" :key="item.id">
                  <td>{{ item.title }}</td>
                  <td>{{ item.content }}</td>
                  <td>{{ item.price }}</td>
                  <td class="deleteBtn">
                    <button class="btn btn-outline-danger" @click="deleteFavoriteGet2(item)">
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 716;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
</style>
<script>
export default {
  data() {
    return {
      FavoriteGet2: [],
    };
  },
  methods: {
    deleteFavoriteGet2(val) {
      this.FavoriteGet2.splice(this.FavoriteGet2.indexOf(val), 1);
      localStorage.setItem('favorite', JSON.stringify(this.FavoriteGet2));
    },
    getLocalStorage() {
      this.FavoriteGet2 = JSON.parse(localStorage.getItem('favorite'));
    },
  },
  created() {
    this.getLocalStorage();
  },
};
</script>
