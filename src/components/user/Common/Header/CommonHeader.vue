<template>
  <header ref="header">
    <div class="container headerContents">
      <div class="gnb">
        <h1>
          <router-link to="/"></router-link>
        </h1>
        <router-link to="/product/list">상품 보기</router-link>
        <!-- <router-link to="/faq">자주묻는 질문</router-link>
        <router-link to="/inquire">문의하기</router-link> -->
      </div>
      <!--비회원일때-->
      <!-- <div class="nonememberWrap">
        <router-link to="/join">회원가입</router-link>
        <router-link to="/login">로그인</router-link>
      </div> -->
      <!--회원일때-->
      <div class="memberWrap">
        <router-link to="/"><i class="fas fa-heart"></i></router-link>
        <!-- <router-link to="/mypage/basicInfo">견적문의</router-link> -->
        <router-link to="/mypage/basicInfo">마이페이지</router-link>
        <router-link to="/">로그아웃</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";

export default {
  name: "CommonHeader",
  data: () => ({ topHeader: 0 }),
  methods: {
    onScrollHeader() {
      const sc = $(window).scrollTop() - 100;
      if (sc > this.topHeader) {
        $(this.$refs.header).addClass("fixed");
      } else if (sc < this.topHeader && sc <= 0) {
        $(this.$refs.header).removeClass("fixed");
      }
    },
  },
  created() {
    document.documentElement.scrollTop = 0;
  },
  mounted() {
    this.topHeader = $(this.$refs.header).offset().top;
    $(window).scroll(this.onScrollHeader);
  },
  destroyed() {
    $(window).off("scroll", this.onScrollHeader);
  },
};
</script>

<style scoped lang="scss">
header {
  padding: 20px 0;
  width: 100%;
  // border-bottom: 1px solid $gray-scale-3;
  .headerContents {
    display: flex;
    justify-content: space-between;
    line-height: 28px;
    div {
      display: flex;
      a {
        color: $gray-scale-1;
        margin-right: 25px;
        font-size: $md-font;
      }
      &.gnb {
        a {
          font-size: $lg-font;
        }
        h1 {
          margin-right: 30px;
          a {
            font-size: $elg-font + 5;
            display: block;
            background: url(../../../../img/Logo/bujamarket_logo.png) 0 0
              no-repeat;
            height: 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 100% auto;
            width: 200px;
            // width: 200px;
            // img {
            //   height: 24px;
            // }
          }
        }
      }
      &.memberWrap,
      &.nonememberWrap {
        a {
          i {
            color: $primary-color;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  &.transparent {
    background-color: transparent;
    a {
      color: #fff !important;
    }
  }
  &.fixed2 {
    position: fixed;
    z-index: 11;
    a {
      color: #fff !important;
      margin-right: 25px;
      font-size: $md-font;
    }
  }
  &.fixed {
    position: fixed;
    background-color: #000;
    z-index: 11;
    h1 {
      a {
        display: block;
        background: url(../../../../img/Logo/bujamarket_logo_white.png) 0 0
          no-repeat !important;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 100% auto !important;
        width: 200px;
      }
    }

    a {
      color: #fff !important;
      margin-right: 25px;
      font-size: $md-font;
    }
  }
}
</style>
