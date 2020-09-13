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
              data-target=".navbar-collapse.show"
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
              <li
                class="nav-item active"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <router-link class="nav-link" to="/">
                  回到前台
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/admin/products">
                  產品管理
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/admin/coupon">
                  優惠卷
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/admin/order">
                  訂單管理
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <button class="btn btn-outline-danger btn-block" type="button" @click="logout">登出</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
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
  methods: {
    logout() {
      document.cookie = 'loginVerify=; expires= GMT; path=/';
    },
  },
};
</script>
