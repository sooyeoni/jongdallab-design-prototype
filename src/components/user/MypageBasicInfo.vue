<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <mypage-dashboard></mypage-dashboard>
        </div>
        <div class="contents">
          <mypage-navi :active="8"></mypage-navi>
          <div class="wrap">
            <h3>기본정보</h3>
            <div class="infobox">
              <div><label>아이디</label><span>wiwiki2846</span></div>
              <div>
                <label>비밀번호</label>
                <p>
                  <button
                    class="pass_change_btn"
                    v-on:click="isHidden = !isHidden"
                  >
                    비밀번호 변경
                  </button>
                </p>
              </div>
              <!--비밀번호 변경 클릭시 현재 비밀번호,변경 비밀번호, 변경 비밀번호 확인 버튼 show hide-->
              <div class="password_change_form" v-if="!isHidden">
                <div>
                  <label><span class="Ess">*</span> 현재 비밀번호</label>
                  <p>
                    <span
                      ><input
                        type="password"
                        placeholder="현재 비밀번호를 입력해주세요."
                    /></span>
                  </p>
                </div>
                <div>
                  <label><span class="Ess">*</span> 변경 비밀번호</label>
                  <p>
                    <span
                      ><input
                        type="password"
                        placeholder="변경 비밀번호를 입력해주세요."
                    /></span>
                  </p>
                </div>
                <div>
                  <label> <span class="Ess">*</span> 변경 비밀번호 확인</label>
                  <p>
                    <span
                      ><input
                        type="password"
                        placeholder="변경 비밀번호를 재입력해주세요."
                    /></span>
                  </p>
                </div>
              </div>
              <div class="email_input">
                <label><span class="Ess">*</span> 이메일</label>
                <p>
                  <span
                    ><input
                      type="email"
                      placeholder="이메일 주소를 입력해주세요."
                    /><button class="btn-border-round">
                      인증
                    </button></span
                  >
                </p>
              </div>
              <!--이메일 인증버튼 클릭시 show-->
              <!-- <div>
                <label><span class="Ess">*</span> 이메일 인증코드</label>
                <p>
                  <span
                    ><input
                      type="text"
                      placeholder="이메일 인증코드를 입력해주세요."
                  /></span>
                </p>
              </div> -->
              <div>
                <label><span class="Ess">*</span> 핸드폰 번호</label>
                <p>
                  <span
                    ><input
                      type="text"
                      placeholder="핸드폰 번호를 입력해주세요."
                  /></span>
                </p>
              </div>
            </div>
            <div class="button_wrap">
              <button class="btn-round-default modify_btn">
                회원정보 수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <common-footer></common-footer>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import MypageNavi from "@/components/user/Common/Mypage/MypageNavi.vue";
import MypageDashboard from "@/components/user/Common/Mypage/MypageDashboard.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";
export default {
  name: "MypageBasicInfo",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    CommonFooter,
  },
  data: () => ({
    isHidden: true,
  }),
};
</script>

<style scoped lang="scss">
section.mypage_wrap {
  background-color: $background-color;
  padding: $section-padding 0;
  .contents {
    display: flex;
    .wrap {
      padding-left: 30px;
      flex: 1;
      h3 {
        font-size: $elg-font;
      }
      .infobox {
        background-color: white;
        border: 1px solid $gray-scale-3;
        padding: 30px 30px;
        margin-top: 20px;
        border-radius: 4px;
        div {
          display: flex;
          margin-bottom: 15px;
          label {
            display: block;
            width: 140px;
            line-height: 40px;
          }
          span {
            line-height: 40px;
          }
          p {
            flex: 1;
            span {
              display: block;
              line-height: 40px;
              input {
                width: 50%;
                box-sizing: border-box;
              }
              &.error_text {
                line-height: 17px !important;
              }
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
          &.email_input {
            p span input {
              width: 35%;
            }
            button {
              width: 120px;
              margin-left: 10px;
            }
          }
        }
        .pass_change_btn {
          width: 140px;
        }
        .password_change_form {
          display: inherit;
        }
      }
      .button_wrap {
        padding: 0 40%;
        .modify_btn {
          margin-top: 30px;
          height: 40px;
        }
      }
    }
  }
}
.Ess {
  display: inline-block;
  color: crimson;
  margin-left: 5px;
  font-size: 14px;
}
</style>
