<template>
  <transition name="modal" class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="close_btn" @click="onClose">
              <i class="fal fa-times"></i>
            </button>
          </div>
          <!--비밀번호 찾기-->
          <div class="modal-body main_modal_popup">
            <h3>비밀번호 찾기</h3>
            <div class="form_fieldset">
              <p>
                <label>아이디</label>
                <span
                  ><input type="text" placeholder="아이디를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 아이디가 일치하지
                  않습니다.
                </span>
              </p>
              <p>
                <label>이메일</label>
                <span
                  ><input type="email" placeholder="이메일을 입력해주세요." />
                  <button class="btn-border-round">
                    인증
                  </button></span
                >
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 이메일이 일치하지
                  않습니다.</span
                >
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 입력하신 이메일로
                  인증코드 메일이 발송되었습니다.</span
                >
              </p>
              <!---->
              <p>
                <label>이메일 인증코드</label>
                <span
                  ><input type="email" placeholder="인증코드를 입력해주세요."
                /></span>
                <span class="error_text"
                  ><i class="fad fa-exclamation-circle"></i> 인증코드가 일치하지
                  않습니다.</span
                >
              </p>
            </div>
            <button class="btn-default complete_btn" disabled>확인</button>
          </div>
          <!--비밀번호 찾기 완료 비밀번호 재설정-->
          <div class="modal-body main_modal_popup">
            <h3>비밀번호 재설정</h3>
            <div class="form_fieldset">
              <p>
                <label>비밀번호</label>
                <span
                  ><input
                    type="text"
                    placeholder="사용하실 비밀번호를 입력해주세요."
                /></span>
                <span class="info_text"
                  >사용하실 비밀번호를 입력해주세요.
                </span>
              </p>
            </div>
            <button class="btn-default complete_btn" disabled>확인</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FindPasswordModal",
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 340px;
  width: 100%;
  margin: 0px auto;
  /*padding: 20px 30px;*/
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
.modal-body {
  /*   margin: 20px 0;*/
}

/*  .modal-default-button {
      float: right;
    }*/

/*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/*modal 추가 css*/
.modal-header {
  font-size: $md-font;
  color: black;
  position: relative;
}
.modal-header button {
  background-color: transparent;
  border: 0;
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
}
.modal-body {
  font-size: $md-font;
  background-color: white;
  border-radius: 4px;
  padding: 30px 20px;
}
.modal-body h3 {
  font-weight: 500;
  text-align: center;
  font-size: $lg-font;
}
.form_fieldset {
  padding: 30px 0;
  p {
    margin-bottom: 30px;
    label {
      width: 100%;
      display: block;
      margin-bottom: 15px;
    }
    span {
      width: 100%;
      display: block;
      input {
        width: 100%;
        box-sizing: border-box;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(2) {
      span {
        display: flex;
        input {
          width: 70%;
        }
        button {
          width: 30%;
          margin-left: 10px;
        }
      }
    }
  }
  .info_text {
    font-size: $default-font;
    color: $gray-scale-1;
    margin-top: 8px;
  }
}
.complete_btn {
  height: 35px;
}
/*----------------------------modal 기존 css-------------------------------------------------*/
/*  https://kr.vuejs.org/v2/examples/modal.html*/
</style>
