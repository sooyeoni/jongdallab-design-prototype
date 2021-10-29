<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <mypage-dashboard></mypage-dashboard>
        </div>
        <div class="contents">
          <mypage-navi :active="9"></mypage-navi>
          <div class="wrap">
            <h3>사업자정보</h3>
            <div class="infobox">
              <div>
                <label>사업자명</label>
                <p>
                  <span
                    ><input type="text" placeholder="사업자명을 입력해주세요."
                  /></span>
                </p>
              </div>

              <div>
                <label>연락처</label>
                <p>
                  <span><input type="text" placeholder="010-0000-0000"/></span>
                </p>
              </div>
              <div class="address_wrap">
                <label>주소</label>
                <p>
                  <span
                    ><input type="text" disabled /><button class="btn-border">
                      우편 찾기
                    </button></span
                  >
                  <span><input type="text"/></span>
                  <span><input type="text"/></span>
                </p>
              </div>
              <div>
                <label><span class="Ess">*</span> 담당자</label>
                <p>
                  <span
                    ><input type="text" placeholder="담당자를 입력해주세요."
                  /></span>
                </p>
              </div>
              <div>
                <label><span class="Ess">*</span> 웹사이트</label>
                <p>
                  <span><input type="text" placeholder="웹사이트 입력"/></span>
                </p>
              </div>
              <div class="tax">
                <p>사업자 등록증<br />(세금 계산서 발행)</p>
                <div class="file_wrap">
                  <p>
                    dasdasdasdas.jpg
                    <button class="close_btn">
                      <i class="fal fa-times"></i>
                    </button>
                  </p>
                  <p class="filebox">
                    <label for="file_input"
                      >첨부하기 <i class="fal fa-paperclip"></i
                    ></label>
                    <input
                      style="display: none;"
                      type="file"
                      id="file_input"
                      accept=".png,.jpg,.jpeg,.ai,.pdf"
                    />
                  </p>
                </div>
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
    <common-footer />
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import MypageNavi from "@/components/user/Common/Mypage/MypageNavi.vue";
import MypageDashboard from "@/components/user/Common/Mypage/MypageDashboard.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";

export default {
  name: "MypageBusinesspersonInfo",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    CommonFooter,
  },
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
          &.tax {
            // width: 30%;
            p {
              flex: inherit;
              &:nth-child(1) {
                width: 140px;
              }
              &.filebox {
                line-height: 18px;
                flex: inherit;
                label {
                  width: 320px;
                  background-color: white;
                  border: 1px solid $primary-color;
                  border-radius: 4px;
                  display: flex;
                  justify-content: space-between;
                  line-height: 40px;
                  padding: 0 10px;
                  color: $primary-color;
                  i {
                    line-height: 40px;
                    color: $gray-scale-2;
                    font-size: $md-font;
                  }
                }
              }
            }
            .file_wrap {
              display: flex;
              flex-direction: column;
              margin-bottom: 0;
              p:nth-child(1) {
                width: 320px;
                background-color: $background-color;
                margin-bottom: 10px;
                line-height: 40px;
                padding: 0 10px;
                justify-content: space-between;
                display: flex;
                color: $gray-scale-2;
                button {
                  background-color: transparent;
                  border: 0;
                  font-size: $default-font;
                  max-width: 15px;
                  color: $gray-scale-2;
                }
              }
            }
          }

          &.address_wrap {
            p {
              span {
                margin-bottom: 10px;
                &:nth-child(1) {
                  display: flex;
                  input {
                    width: 280px;
                  }
                  button {
                    width: 142px;
                    margin-left: 10px;
                  }
                }
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
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
