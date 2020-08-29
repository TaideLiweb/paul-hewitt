<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>| <router-link to="/products">products</router-link>|
      <router-link to="/product">product</router-link>|
      <router-link to="/admin">dashboard</router-link>|
    </div>

    <router-view />
  </div>
</template>
