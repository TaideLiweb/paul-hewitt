<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="row">
            <div class="col-6">LOGO</div>
            <div class="col-6 d-flex justify-content-end align-items-center">
              <router-link class="link" to="/">Home</router-link>
              <router-link to="/products">products</router-link>
              <router-link to="/checkout">checkout</router-link>
              <router-link to="/admin">dashboard</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<style scoped>
.navbar {
  height: 60px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
header {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 716;
}
header a {
  color: #4b4b4b;
  margin-right: 20px;
}
header a:hover {
  color: #000;
  text-decoration: none;
}
.link {
  display: block;
}
</style>
<script>
export default {};
</script>
