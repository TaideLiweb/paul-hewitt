<template>
  <div id="app">
    <div id="nav">
      <DashboardHeader></DashboardHeader>
    </div>
    <router-view v-if="checkSuccess" :token="token" />
  </div>
</template>
<script>
import DashboardHeader from '../../components/DashboardHeader.vue';

export default {
  components: {
    DashboardHeader,
  },
  data() {
    return {
      token: '',
      checkSuccess: 'false',
    };
  },
  methods: {
    checkLogin() {
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)loginVerify\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}auth/check`;
      this.axios
        .post(api, { api_token: this.token })
        .catch(() => {
          this.$router.push('/login');
        });
      this.checkSuccess = true;
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
