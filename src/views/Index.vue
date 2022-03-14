<template>
  <div>
    <div class="main_banner main position-relative">
      <div class="coupon_text oh">即日起輸入 paul-hewitt <br>
享受最高 20% 折扣</div>
    </div>
    <div class="container section">
      <div class="row">
        <h2 class="col-12 section_title">商品分類</h2>
        <div class="col-12 d-flex">
          <div id="category_watch" class="product_category mx-2 mx-md-0">
            <div class="black_block">
              <div class="black_block_content">
                <h3 class="text-center mb-4">手錶</h3>
                <div class="d-flex justify-content-center">
                  <button class="black_block_btn">
                    <router-link to="/products">
                    快去逛逛
                    </router-link>
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div id="category_wristband" class="product_category mx-2 mx-md-0">
            <div class="black_block">
              <div class="black_block_content">
                <h3 class="text-center mb-4">手環</h3>
                <div class="d-flex justify-content-center">
                  <button class="black_block_btn">
                    <router-link to="/products">
                    快去逛逛
                    </router-link>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2 class="col-12 section_title">關於我們</h2>
      <div class="fixed_gb">
        <div>
          承襲傳統航海冒險精神為品牌核心船錨識別，結合生動的色彩與海洋狂熱風情，Paul
          Hewit每個系列都如同船錨品牌靈魂源起一樣充滿故事性。
        </div>
      </div>
    </div>
    <div class="container section">
      <div class="row">
        <h2 class="col-12 section_title">新品上市</h2>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="item in products" :key="item.id">
            <div class="overflow-hidden">
              <div class="swiper_image">
                <img :src="item.imageUrl" width="100%" alt />
              </div>
              <div class="category_style">{{item.category}}</div>
              <h3 class="text-center my-2 px-4 text_break">{{item.title}}</h3>
              <p class="text-center my-2">{{item.price | money}}</p>
              <div class="d-flex justify-content-center">
                <router-link class="btn btn-outline-dark" :to="`/product/${item.id}`">
                  商品詳情
                </router-link>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="container section">
      <div class="row">
        <h2 class="col-12 section_title">七夕商品</h2>
        <div class="col-12 col-sm-6 py-4 py-sm-0 px-0">
          <img src="../assets/images/FhAI6b9FqC5t7meWCzZFbWYkC1JD.jpg" width="100%" alt />
        </div>
        <div class="col-12 col-sm-6 px-4 d-flex align-items-center">
          <div>
            <h3 class="text-center mb-3">Paul hewwit代表你滿滿的心意</h3>
            <p class="text-center mb-4">
              還在煩惱要送什麼東西給另一半嗎?情人節活動火熱開跑中 ,活動期間買一送一
            </p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-dark">馬上購買</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a{
  text-decoration: none;
}
.black_block_btn a{
  color: #fff;
  text-decoration: none;
}
.black_block_btn a:hover{
  color: #fff;
  text-decoration: none;
}
.coupon_text{
  text-align: center;
  position: absolute;
  width: 52%;
  top: 53%;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 0px;
  font-size: 14px;
}

.main_banner {
  height: 167px;
  overflow: hidden;
  background-image: url(../assets/images/Paul-Hewitt-Blog-Banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.section{
  margin-top: 70px;
}

.section_title {
  padding-bottom:1.5rem;
  margin: 0;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
}
.section_title::before {
  content: '';
  width: 40px;
  height: 2px;
  position: absolute;
  left: 50%;
  top: -15px;
  transform: translate(-50%,0%);
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
  height: 480px;
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
.swiper-slide h3{
  font-size: 1rem;
}
.swiper_image {
  width: 270px;
  margin: 0 auto;
}
.swiper_image > img {
  object-fit: cover;
  height: 270px;
}

.category_style{
  font-size: 12px;
  width: 40%;
  border: 1px solid #343a40;
  border-radius: 20px;
  background: #343a40;
  color: #fff;
  text-align: center;
  padding: 3px 10px;
  margin: 15px auto 10px auto;
}
.text_break{
  overflow : hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
}

@media (min-width: 576px) {
  .main_banner {
    height: 300px;
    overflow: hidden;
  }
  .black_block_btn {
    padding: 10px 25px;
  }
  .swiper-container {
  height: 440px;
  width: 100%;
  }
  .swiper_image {
    width: 100%;
  }
  .swiper_image > img {
    height: 200px;
  }
    .coupon_text{
    width: 36%;
    top: 70%;
    font-size: 18px;
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
  .coupon_text{
    width: 32%;
    top: 70%;
    font-size: 18px;
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
  .coupon_text{
  width: 25%;
  top: 70%;
  font-size: 18px;
}
}
@media (min-width: 1200px) {
  /* .swiper_image {
    display: flex;
    justify-content: center;
    width: 270px;
  } */
  .coupon_text{
    width: 21%;
  }
}
</style>
<script>
export default {
  name: 'swiper-example-autoplay',
  data() {
    return {
      products: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
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
  methods: {
    getData() {
      this.axios.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          // this.products = res.data.data;
          const newItem = [];
          res.data.data.forEach((item, index) => {
            if (index < 5) {
              newItem.push(item);
            }
          });
          this.products = newItem;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
