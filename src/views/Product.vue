<template>
  <div>
    <div>{{products.title}}</div>
    <div>{{products.content}}</div>
    <div>{{products.price}}</div>
  </div>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.axios
      .get(`${process.env.VUE_APP_UUID}${process.env.VUE_APP_APIPATH}/ec/product/${id}`)
      .then((res) => {
        console.log('data', res);
        this.products = res.data.data;
        console.log('products', this.products);
      });
  },
};
</script>
