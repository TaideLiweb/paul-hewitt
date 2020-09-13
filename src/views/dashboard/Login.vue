<template>
<div class="login">
    <div class="login_content">
      <form class="form-signin" @submit.prevent="login">
        <!--@submit.prevent 阻止表單送出事件-->
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <!--autofocus頁面開啟自動聚焦-->
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
          <!--type="password"可以讓input欄位遮蓋字串-->
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">登入</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
html,
.login {
  height: 100vh;
  text-align: center;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_content{
 width: 500px;
}
</style>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.axios
        .post(api, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `loginVerify=${token}; expires=${new Date(
            expired * 1000,
          )} GMT; path=/`;
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          console.log('error', err);
        });
    },
  },
};
</script>
