<template>
  <section>
    <common-header />
    <div class="joinform_wrap">
      <div class="join_wrap">
        <h2>회원가입</h2>
        <form action="/" method="post">
          <!--기본 정보-->
          <div>
            <h3>기본정보</h3>
            <div class="infobox">
              <p>
                <label>아이디 <span class="Ess">*</span></label
                ><span
                  ><input type="text" placeholder="아이디를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 아이디가 입력되지
                  않았습니다.</span
                >
              </p>
              <p>
                <label>비밀번호 <span class="Ess">*</span></label
                ><span
                  ><input type="password" placeholder="비밀번호를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 비밀번호가 입력되지
                  않았습니다.</span
                >
              </p>
              <p>
                <label>비밀번호 확인 <span class="Ess">*</span></label
                ><span
                  ><input
                    type="password"
                    placeholder="비밀번호를 재입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 비밀번호를 다시
                  한번 확인해주세요.</span
                >
              </p>
              <p class="email_input">
                <label>이메일 <span class="Ess">*</span></label
                ><span
                  ><input
                    type="email"
                    placeholder="이메일 주소를 입력해주새요."
                  /><button class="btn-border-round">
                    인증
                  </button></span
                >
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 입력하신 이메일로
                  인증코드 메일이 발송되었습니다.</span
                >
              </p>
              <p>
                <label>이메일 인증코드 <span class="Ess">*</span></label
                ><span
                  ><input
                    type="text"
                    placeholder="이메일 인증코드를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 이메일 인증코드가
                  잘못입력되었습니다.</span
                >
              </p>
              <p>
                <label>핸드폰 번호 <span class="Ess">*</span></label
                ><span
                  ><input type="text" placeholder="핸드폰 번호를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 핸드폰번호가
                  입력되지 않았습니다.</span
                >
              </p>
            </div>
          </div>
          <!--사업자 정보-->
          <div>
            <h3>사업자 정보</h3>
            <div class="infobox">
              <p>
                <label>사업자 명</label
                ><span
                  ><input type="text" placeholder="사업자명을 입력해주세요."
                /></span>
              </p>
              <p>
                <label>연락처</label
                ><span><input type="text" placeholder="010-0000-0000"/></span>
              </p>
              <p class="address_input">
                <label>주소</label
                ><span class="post_find"
                  ><input type="text" disabled /><button class="btn-border">
                    우편 찾기
                  </button></span
                >
                <span><input type="text" disabled/></span>
                <span><input type="text"/></span>
              </p>
              <p>
                <label>담당자 <span class="Ess">*</span></label
                ><span
                  ><input type="text" placeholder="담당자를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 담당자가 입력되지
                  않았습니다.</span
                >
              </p>
              <p>
                <label>웹사이트 <span class="Ess">*</span></label
                ><span><input type="text" placeholder="jongdali.com"/></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 웹사이트가 입력되지
                  않았습니다.</span
                >
              </p>
            </div>
          </div>
        </form>
        <div class="checkboxWrap">
          <p>
            <label class="label_box" for="agreement">
              <input type="checkbox" id="agreement" checked />
              <span class="checkmark"></span>
            </label>
            <label for="agreement"
              ><span class="red">(필수)</span><b> 이용약관</b>에
              동의하시겠습니까?<button
                class="view_btn"
                onclick="window.open('/termsOfService','Bujamarket','width=900,height=530,location=no,status=no,scrollbars=no');"
              >
                보기
              </button></label
            >
          </p>
          <p>
            <label class="label_box" for="terms">
              <input type="checkbox" id="terms" checked />
              <span class="checkmark"></span>
            </label>
            <label for="terms"
              ><span class="red">(필수)</span> <b>개인정보 수집 및 이용</b>에
              동의하시겠습니까?<button
                class="view_btn"
                onclick="window.open('/privacyPolicy','Bujamarket','width=900,height=530,location=no,status=no,scrollbars=no');"
              >
                보기
              </button></label
            >
          </p>
          <p>
            <label class="label_box" for="alarm">
              <input type="checkbox" id="alarm" checked />
              <span class="checkmark"></span>
            </label>
            <label for="alarm"
              >이벤트 및 알림, 소식등의 광고성 정보 수신에
              동의하시겠습니까?</label
            >
          </p>
        </div>
        <div class="btn_wrap">
          <button class="btn-default" disabled>가입 신청</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";

export default {
  name: "EmailJoin",
  components: {
    CommonHeader,
  },
};
</script>

<style scoped lang="scss">
.joinform_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color;
  padding: 120px 0;
  height: 100%;
  .join_wrap {
    // padding: 0px 0;
    max-width: 800px;
    min-width: 800px;
    h2 {
      font-size: 35px;
      text-align: center;
      margin-bottom: 35px;
    }
    form {
      background-color: white;
      border: 1px solid $gray-scale-3;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      > div {
        &:nth-child(1) {
          padding-right: 20px;
        }
        &:nth-child(2) {
          padding-left: 20px;
        }
      }
      div {
        flex: 1;
        h3 {
          margin-bottom: 35px;
          font-size: 20px;
        }
        &:nth-child(1) {
          border-right: 1px solid $gray-scale-3;
        }
      }

      .infobox {
        p {
          margin-bottom: 30px;
          label {
            width: 100%;
            display: inline-flex;
            margin-bottom: 15px;
            span {
              display: block;
              color: crimson;
              margin-left: 5px;
              font-size: $md-font;
            }
          }
          span {
            display: block;
            input {
              width: 100%;
              box-sizing: border-box;
            }
          }
        }
        .email_input {
          span {
            display: flex;
            input {
              width: 70%;
            }
            button {
              margin-left: 10px;
              width: 30%;
            }
          }
        }
        .address_input {
          span {
            margin-bottom: 9px;
            &.post_find {
              display: flex;
              input {
                width: 70%;
              }
              button {
                margin-left: 10px;
                width: 30%;
              }
            }
          }
        }
      }
    }
    .checkboxWrap {
      margin-top: 20px;
      p {
        display: flex;
        margin-bottom: 10px;
        line-height: 25px;
        label:nth-child(2) {
          margin-left: 10px;
        }
        .view_btn {
          background-color: transparent !important;
          border: 0;
          padding: 0;
          width: inherit;
          margin-left: 5px;
          color: $gray-scale-2;
          text-decoration: underline;
          line-height: 18px;
        }
      }
    }
    .btn_wrap {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      button {
        width: 30%;
        height: 50px;
        font-size: $lg-font;
      }
    }
  }
}
span.red {
  color: $primary-color;
}
</style>
