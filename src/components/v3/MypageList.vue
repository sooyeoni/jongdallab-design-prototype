<template>
  <div class="mypageList">
    <basic-header :page-title="pageTitle"></basic-header>
    <div class="section">
      <!--비회원일때-->
      <!--<div class="nonememberInfoWrap">
        <p>
          <router-link to="/login"
            ><b>로그인</b>하세요 <i class="fal fa-angle-right"></i
          ></router-link>
        </p>
      </div>-->
      <!--회원일때-->
      <div class="memberInfoWrap">
        <p>
          <label>종달랩회원님</label>
          <button class="setting_btn" @click="onSetting">
            <i class="fal fa-cog"></i>
          </button>
        </p>
        <p>jongdallab@jongdali.com</p>
      </div>
    </div>
    <div class="ListWrap">
      <div class="List">
        <h3>쇼핑</h3>
        <p><router-link to="/purchaseList">구매 내역</router-link></p>
        <!--purchaseList 리스트로 이동-->
        <p>
          <router-link to="/cancelReturnList">취소 / 반품 목록</router-link>
        </p>
        <p>
          <router-link to="/couponList">쿠폰 <span>3</span></router-link>
        </p>
        <p><router-link to="/myReviewList">나의 리뷰</router-link></p>
        <p><router-link to="/productInquiryList">상품 문의</router-link></p>
        <p><router-link to="/inquiry">1:1문의</router-link></p>
        <p><router-link to="/myScrapbookList">내 스크랩북</router-link></p>
      </div>
      <div class="List">
        <h3>정보</h3>
        <p>
          <router-link to="/Notice">공지사항 <span>3</span></router-link>
        </p>
        <p><router-link to="/guide">부자마켓 가이드</router-link></p>
        <p><router-link to="/customerCenter">고객 센터</router-link></p>
        <p>
          <button class="alarm_btn" @click="onClickAlarm">알림 설정</button>
        </p>
      </div>
      <slide-up-modal v-if="isAlarm" class="join_modal">
        <div slot="contents">
          <div class="modalBody">
            <p>
              <img src="../../../src/assets/img/ico/icoNoAlarm.svg" />
            </p>
            <p>알림서비스 안내</p>
            <p>
              웹에서는 해당 기능을 지원하지 않습니다.<br />앱을 설치 후
              진행해주세요.
            </p>
          </div>
          <div class="modalFooter">
            <button class="ok_btn" @click="onClickClose">확인</button>
          </div>
        </div>
      </slide-up-modal>
    </div>
    <global-navigation />
  </div>
</template>

<script>
import BasicHeader from "@/components/v3/Common/Header/BasicHeader";
import GlobalNavigation from "@/components/v3/Common/Navigation/GlobalNavigation";
import SlideUpModal from "@/components/v3/Common/Modal/SlideUpModal";
export default {
  name: "MypageList",
  components: {
    BasicHeader,
    GlobalNavigation,
    SlideUpModal,
  },
  methods: {
    onSetting() {
      this.$router.push({
        path: "/setting",
      });
    },
    onClickClose() {
      this.isAlarm = false;
    },
    onClickAlarm() {
      this.isAlarm = true;
    },
  },
  data: () => ({
    pageTitle: "마이페이지",
    isAlarm: false,
  }),
};
</script>

<style scoped lang="scss">
.mypageList {
  background-color: $background-color;
  position: absolute;
  width: 100%;
  max-width: 640px;
  min-height: 100%;
  height: 100%;
  padding-top: 45px;
  box-sizing: border-box;
}
.memberInfoWrap {
  padding: 30px 16px;
  background-color: white;
  margin-bottom: 10px;
  p:nth-child(1) {
    font-size: $elg-font;
    margin-bottom: 15px;
    .setting_btn {
      float: right;
      width: 28px;
      height: 28px;
      border: 1px solid $gray-scale-4;
      background-color: transparent;
      border-radius: 50%;
      color: $gray-scale-3;
    }
  }
  p:nth-child(2) {
    font-size: $default-font;
    color: $gray-scale-1;
  }
}
.nonememberInfoWrap {
  background-color: white;
  margin-bottom: 10px;
  padding: 20px 16px;
  font-size: $md-font;
}
.ListWrap {
  padding-bottom: 70px;
  background-color: $background-color;
}
.List {
  background-color: white;
  padding: 20px 16px 10px 16px;
  margin-bottom: 10px;
  h3 {
    font-size: $default-font;
    color: $gray-scale-3;
    font-weight: 500;
  }
  p {
    font-size: $default-font;
    border-bottom: 1px solid $gray-scale-4;
    a {
      display: block;
      padding: 16px 0;
      span {
        display: inline-block;
        width: 14px;
        height: 14px;
        text-align: center;
        color: white;
        border-radius: 3px;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
    button.alarm_btn {
      height: 46px;
      background-color: transparent;
      border: 0;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      font-size: $default-font;
    }
  }
  &:first-child p a span {
    background-color: $primary-color;
    font-size: $sm-font;
  }
  &:last-child p a span {
    background-color: $sub-color-orange;
    font-size: $sm-font;
  }
}
/* */
.modalBody {
  padding: 50px 0 40px 0;
  text-align: center;
  p:first-child {
    margin-bottom: 30px;
    letter-spacing: 0.3px;
  }
  p:nth-child(2) {
    margin-bottom: 20px;
    font-size: 24px;
    color: $gray-scale-1;
    font-weight: bold;
  }
  p:nth-child(3) {
    color: $gray-scale-2;
    font-size: $default-font;
    line-height: 1.3;
  }
}
.modalFooter {
  padding-bottom: 45px;
  .ok_btn {
    display: block;
    text-align: center;
    line-height: 42px;
    height: 42px;
    width: 100%;
    background-color: $primary-color;
    color: white;
    border: 0;
    border-radius: 30px;
    font-size: $md-font;
  }
}
</style>
