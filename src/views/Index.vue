<template>
  <div>
    <div class="main_banner main">
      <img src="../assets/images/Paul-Hewitt-Blog-Banner.jpg" width="100%" alt />
    </div>
    <div class="container section1">
      <div class="row">
        <div class="col-12 my-4 section_title">
          <h3 class="d-flex justify-content-center">商品分類</h3>
        </div>
        <div class="col-12 d-flex">
          <div id="category_watch" class="product_category mx-2 mx-md-0">
            <div class="black_block">
              <div class="black_block_content">
                <h3 class="text-center mb-4">手錶</h3>
                <div class="d-flex justify-content-center">
                  <button class="black_block_btn">快去逛逛</button>
                </div>
              </div>
            </div>
          </div>
          <div id="category_wristband" class="product_category mx-2 mx-md-0">
            <div class="black_block">
              <div class="black_block_content">
                <h3 class="text-center mb-4">手環</h3>
                <div class="d-flex justify-content-center">
                  <button class="black_block_btn">快去逛逛</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section2">
      <div>
        <div class="section_title my-4">
          <h3 class="d-flex justify-content-center">關於我們</h3>
        </div>
        <div class="fixed_gb">
          <div>
            承襲傳統航海冒險精神為品牌核心船錨識別，結合生動的色彩與海洋狂熱風情，Paul
            Hewit每個系列都如同船錨品牌靈魂源起一樣充滿故事性。
          </div>
        </div>
      </div>
    </div>
    <div class="container section3">
      <div class="row">
        <div class="col-12 my-4 section_title">
          <h3 class="d-flex justify-content-center">新品上市</h3>
        </div>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <div>
              <div class="swiper_image">
                <img src="../assets/images/slider1.jpg" width="100%" alt />
              </div>
              <div class="text-center my-2">套組系列</div>
              <div class="text-center my-2">黑色米蘭帶錶+船錨尼龍黑色手環</div>
              <div class="text-center my-2">$5000</div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark">馬上去逛逛</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <div class="swiper_image">
                <img src="../assets/images/slider1.jpg" width="100%" alt />
              </div>
              <div class="text-center my-2">套組系列</div>
              <div class="text-center my-2">黑色米蘭帶錶+船錨尼龍黑色手環</div>
              <div class="text-center my-2">$5000</div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark">馬上去逛逛</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <div class="swiper_image">
                <img src="../assets/images/slider1.jpg" width="100%" alt />
              </div>
              <div class="text-center my-2">套組系列</div>
              <div class="text-center my-2">黑色米蘭帶錶+船錨尼龍黑色手環</div>
              <div class="text-center my-2">$5000</div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark">馬上去逛逛</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <div class="swiper_image">
                <img src="../assets/images/slider1.jpg" width="100%" alt />
              </div>
              <div class="text-center my-2">套組系列</div>
              <div class="text-center my-2">黑色米蘭帶錶+船錨尼龍黑色手環</div>
              <div class="text-center my-2">$5000</div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark">馬上去逛逛</button>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner" />
          </div>-->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="container section4">
      <div class="row">
        <div class="col-12 my-4 section_title">
          <h3 class="d-flex justify-content-center">七夕商品</h3>
        </div>
        <div class="col-12 col-sm-6 py-4 py-sm-0 px-0">
          <img src="../assets/images/FhAI6b9FqC5t7meWCzZFbWYkC1JD.jpg" width="100%" alt />
        </div>
        <div class="col-12 col-sm-6 px-4 d-flex align-items-center">
          <div>
            <h2 class="text-center">Paul hewwit代表你滿滿的心意</h2>
            <p class="text-center">
              還在煩惱要送什麼東西給另一半嗎?情人節活動火熱開跑中 ,活動期間買一送一
            </p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-dark">馬上購買</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="mt-4 d-flex justify-content-center align-items-center"
      style="height:100px; background:#4b4b4b; color:#fff"
    >
      資料、圖片來源皆來自網路，僅用來做為學習用途。
    </footer>
  </div>
</template>
<style scoped>
.main {
  margin-top: 77px;
}
.main_banner {
  height: 167px;
  overflow: hidden;
}
.section1,
.section3,
.section4 {
  margin-top: 50px;
}
.section2 {
  margin-top: 70px;
}
.section_title {
  display: flex;
  justify-content: center;
  position: relative;
}
.section_title > h3::before {
  content: '';
  top: -15px;
  position: absolute;
  width: 40px;
  height: 2px;
  background: rgb(180, 180, 180);
}
.product_category {
  height: 150px;
  width: 50%;
  transition: all 0.5s;
}
#category_watch {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../assets/images/watch.jpg);
}
.black_block {
  width: 100%;
  height: 100%;
  opacity: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
}
.black_block > div {
  width: 80%;
}
.black_block_content {
  padding: 20px 10px;
}
.black_block_btn {
  outline: none;
  background: none;
  color: #fff;
  justify-self: center;
  letter-spacing: 2px;
  font-weight: 700;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.3s;
}

.black_block_btn:hover {
  transform: scale(1.1);
}
.product_category:hover .black_block {
  width: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
}
#category_wristband {
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../assets/images/P0000200003571_4_17482.png);
}
.fixed_gb {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-image: url(../assets/images/beach-1852945_1920.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.fixed_gb > div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  width: 90%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.swiper-container {
  height: 450px;
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
.swiper_image {
  display: flex;
  justify-content: center;
  width: 270px;
}
.swiper_image > img {
  height: 270px;
}

@media (min-width: 576px) {
  .main_banner {
    height: 300px;
    overflow: hidden;
  }
  .black_block_btn {
    padding: 10px 25px;
  }
  .swiper_image {
    width: 100%;
  }
  .swiper_image > img {
    height: auto;
  }
}
@media (min-width: 768px) {
  .main_banner {
    height: 400px;
    overflow: hidden;
  }
  .product_category {
    height: 240px;
  }
  .product_category:hover {
    width: 70%;
  }
  /* .swiper_image {
    display: flex;
    justify-content: center;
    width: 220px;
  } */
  .black_block_content {
    padding: 60px;
  }
}
@media (min-width: 992px) {
  .main_banner {
    height: 500px;
    overflow: hidden;
  }
  .main_banner > img {
    margin-top: -100px;
  }
  /* .swiper_image {
    display: flex;
    justify-content: center;
    width: 230px;
  } */
  .fixed_gb > div {
    width: 60%;
  }
}
@media (min-width: 1200px) {
  /* .swiper_image {
    display: flex;
    justify-content: center;
    width: 270px;
  } */
}
</style>
<script>
export default {
  name: 'swiper-example-autoplay',
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
  // mounted() {
  //   console.log('Current Swiper instance object', this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // },
};
</script>
