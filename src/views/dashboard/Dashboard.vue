<template>
  <div id="app">
    <div id="nav">
      <router-link to="/admin/products">產品列表</router-link>|
      <router-link to="/admin/coupon">優惠券列表</router-link>|
      <router-link to="/admin/order">訂單列表</router-link>|
    </div>
    <router-view />
  </div>
</template>
