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
          <div class="logo col-6 d-flex justify-content-end justify-content-lg-start px-0">
            <h1>Paul Hewitt</h1>
            <router-link class="nav-link" to="/">
              <img src="../assets/images/logo.png" width="208" alt />
            </router-link>
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
                <a
                  class="nav-link"
                  data-toggle="modal"
                  data-target="#myFavorite"
                >
                  <i class="far fa-heart"></i>
                  我的最愛
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" data-toggle="collapse" @click="getLocalStorage" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/login">
                  <i class="far fa-user"></i>
                  後臺管理
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
      id="myFavorite"
      tabindex="-1"
      aria-labelledby="myFavoriteLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myFavoriteLabel">我的最愛</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="table-responsive">
            <table class="table rwd-table">
              <thead class="thead-light">
                <th>產品名稱</th>
                <th>原價</th>
                <th>單價</th>
                <th>移除</th>
              </thead>
              <tbody>
                <tr v-for="item in favoriteProduct" :key="item.id">
                  <td data-th="產品名稱">{{ item.title }}</td>
                  <td data-th="原價">{{ item.origin_price }}</td>
                  <td data-th="單價">{{ item.price }}</td>
                  <td data-th="移除" class="deleteBtn">
                    <button class="btn btn-outline-danger" @click="deleteFavoriteGet(item.id)">
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
button:focus{
  outline:none;
}
.logo h1{
  font-size: 0px;
}
.top {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 716;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.rwd-table {
background: #fff;
overflow: hidden;
}

.rwd-table tr:nth-of-type(2n){
  background: #eee;
}
.rwd-table th,
.rwd-table td {
  margin: 0.5em 1em;
}
.rwd-table {
  min-width: 100%;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:before {
  content: attr(data-th) " : ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}

.rwd-table th, .rwd-table td {
  text-align: left;
}

.rwd-table th, .rwd-table td:before {
  color: #D20B2A;
  font-weight: bold;
}

@media (min-width: 480px) {
.rwd-table td:before {
  display: none;
}
.rwd-table th, .rwd-table td {
  display: table-cell;
  padding: 0.25em 0.5em;
}
.rwd-table th:first-child,
.rwd-table td:first-child {
  padding-left: 0;
}
.rwd-table th:last-child,
.rwd-table td:last-child {
  padding-right: 0;
}
.rwd-table th,
.rwd-table td {
  padding: 1em !important;
}
}
</style>
<script>
export default {
  data() {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteProduct: [],
    };
  },
  methods: {
    deleteFavoriteGet(id) {
      const favorite = this.favorite.indexOf(id);
      if (favorite !== -1) {
        this.favorite.splice(favorite, 1);
        this.getFavorite();
      }
      localStorage.setItem('favorite', JSON.stringify(this.favorite));
      this.$bus.$emit('delfavorite', id);
    },
    getLocalStorage() {
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.products = res.data.data;
          this.getFavorite();
        });
    },
    getFavorite() {
      this.favoriteProduct = this.products.filter(
        (product) => this.favorite.indexOf(product.id) > -1,
      );
    },
  },
  created() {
    this.getLocalStorage();
    this.$bus.$on('pushfavorite', (id) => {
      const favorite = this.favorite.indexOf(id);
      if (favorite === -1) {
        this.favorite.push(id);
      } else {
        this.favorite.splice(favorite, 1);
      }
    });
  },
};
</script>
