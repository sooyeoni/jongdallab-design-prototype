<template>
  <div class="mypage_navi">
    <p>마이페이지</p>
    <ul>
      <!-- <li>
        <h3>견적 정보</h3>
        <ul>
          <li :class="{ active: 0 === active }">
            <router-link to="/">견적받기</router-link>
          </li>
          <li :class="{ active: 1 === active }">
            <router-link to="/mypage/requestQuote">견적내역</router-link>
          </li>
        </ul>
      </li>
      <li>
        <h3>발주 정보</h3>
        <ul>
          <li :class="{ active: 3 === active }">
            <router-link to="/orderRequest">발주하기</router-link>
          </li>
          <li :class="{ active: 4 === active }">
            <router-link to="/mypage/orderList">발주내역</router-link>
          </li>
        </ul>
      </li>
      <li>
        <h3>문의 정보</h3>
        <ul>
          <li :class="{ active: 5 === active }">
            <router-link to="/mypage/Inquire">1:1문의하기</router-link>
          </li>
          <li :class="{ active: 6 === active }">
            <router-link to="/mypage/inquireList">문의내역</router-link>
          </li>
          <li :class="{ active: 7 === active }">
            <router-link to="/faq">자주묻는 질문</router-link>
          </li>
        </ul>
      </li> -->
      <li>
        <h3>나의 정보</h3>
        <ul>
          <li :class="{ active: 8 === active }">
            <router-link to="/mypage/basicInfo">기본정보</router-link>
          </li>
          <li :class="{ active: 9 === active }">
            <router-link to="/mypage/businesspersonInfo"
              >사업자 정보</router-link
            >
          </li>
          <!-- <li :class="{ active: 10 === active }">
            <router-link to="/mypage/interestedProduct">관심상품</router-link>
          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "MypageNavi",
  props: {
    active: Number,
  },
};
</script>

<style scoped lang="scss">
.mypage_navi {
  width: 183px;
  overflow: hidden;
  float: left;

  p {
    background-color: $gray-scale-1;
    color: white;
    display: block;
    height: 140px;
    text-align: center;
    line-height: 140px;
    font-size: $elg-font;
    font-weight: bold;
  }
  > ul {
    padding: 0 19px 10px 20px;
    border-left: 1px solid $gray-scale-3;
    border-right: 1px solid $gray-scale-3;
    border-bottom: 1px solid $gray-scale-3;
    background-color: white;
    > li {
      line-height: 25px;
      font-size: $default-font;
      padding: 19px 0 18px;
      border-bottom: 1px solid $gray-scale-3;
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      a {
        color: $gray-scale-1;
        &.active {
          color: $primary-color;
        }
      }
      &:last-child {
        padding-bottom: 20px;
        border-bottom: 0;
      }
      .active a {
        color: $primary-color;
      }
    }
  }
}
</style>
