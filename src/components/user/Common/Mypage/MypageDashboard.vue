<template>
  <div class="mypage_dash">
    <div>
      <p><b>핑핑이</b> 고객님 반갑습니다! <i class="fal fa-grin"></i></p>
      <!-- <p>
          사업자 미인증<router-link to="/mypage/businesspersonInfo"
            >사업자 인증 <i class="fal fa-angle-right"></i
          ></router-link>
        </p> -->
      <p class="complete_text">사업자 인증완료</p>
    </div>
    <ul>
      <li class="border">
        <h3>견적</h3>
        <ul>
          <li>
            <router-link to="/">열람 <span>10</span></router-link>
          </li>
          <li>
            <router-link to="/">미열람 <span>10</span></router-link>
          </li>
          <li>
            <router-link to="/">완료 <span>10</span></router-link>
          </li>
        </ul>
      </li>
      <li class="border">
        <h3>발주</h3>
        <ul>
          <li>
            <router-link to="/">열람 <span>10</span></router-link>
          </li>
          <li>
            <router-link to="/">미열람 <span>10</span></router-link>
          </li>
          <li>
            <router-link to="/">완료 <span>10</span></router-link>
          </li>
        </ul>
      </li>
      <li class="border">
        <h3>문의</h3>
        <ul>
          <li>
            <router-link to="/">답변 대기 <span>10</span></router-link>
          </li>
          <li>
            <router-link to="/">답변 완료 <span>10</span></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MypageDashboard",
};
</script>

<style scoped lang="scss">
.mypage_dash {
  background-color: white;
  margin-bottom: 50px;
  padding: 30px;
  border: 1px solid $gray-scale-3;
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $gray-scale-4;
    padding: 0 0 20px 0;
    p {
      &:nth-child(1) {
        font-size: $elg-font;
      }
      b {
        color: $primary-color;
      }
      &:nth-child(2) {
        font-size: $md-font;
        line-height: 21px;
        color: $gray-scale-3;
        display: flex;

        a {
          color: $gray-scale-3;
          display: block;
          margin-left: 5px;
          border: 1px solid $gray-scale-3;
          border-radius: 20px;
          padding: 0px 7px;
        }
        &.complete_text {
          color: $primary-color;
          border: 1px solid $primary-color;
          border-radius: 20px;
          padding: 0px 7px;
        }
      }
    }
  }
  ul {
    display: flex;
    padding-top: 15px;
    li {
      flex: 1;
      text-align: center;
      h3 {
        padding: 10px 0;
        font-weight: 500;
        border-left: 0;
      }
      a {
        display: flex;
        flex-direction: column;
        color: black;
        text-align: center;
        span {
          display: block;
          margin-top: 15px;
          font-size: 24px;
          color: black;
          text-align: center;
        }
      }
      &.border {
        border-right: 1px solid $gray-scale-4;
        &:last-child {
          border-right: 0;
        }
      }
    }
  }
}
</style>
