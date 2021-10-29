<template>
  <section>
    <common-header />
    <div class="sliderBanner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../../img/Slide/slide1.svg" />
        </swiper-slide>
        <!-- <swiper-slide>
          <img src="../../img/Slide/slide2-2.png" />
        </swiper-slide> -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <search-form />
    <!-- <div class="eventBar">
      <div class="container">
        E밴드와 헤리테이프 등 퀄리티와 가격을 비교해보세요.
        <button>무료 샘플 배송 신청</button>
      </div>
    </div> -->
    <!-- <newsletter-form /> -->
    <jongdal-news />
    <common-footer></common-footer>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import SearchForm from "@/components/user/Home/SearchForm.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";
import NewsletterForm from "@/components/user/Home/NewsletterForm.vue";
import JongdalNews from "./Home/JongdalNews.vue";

export default {
  name: "Home",
  components: {
    CommonHeader,
    SearchForm,
    CommonFooter,
    NewsletterForm,
    JongdalNews,
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }),
};
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $background-color;
  box-sizing: border-box;
}
.sliderBanner {
  img {
    width: 100%;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: $elg-font * 3;
  }
}
.eventBar {
  background-color: $gray-scale-1;
  color: #ffffff;
  .container {
    display: flex;
    justify-content: space-between;
    font-size: $elg-font;
    padding: 18px 10px;
    line-height: 33px;
    button {
      width: auto;
      background-color: transparent;
      color: #fff;
      font-size: $lg-font;
      padding: 8px 18px;
      line-height: 1;
    }
  }
}
</style>
