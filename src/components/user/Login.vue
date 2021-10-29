<template>
  <section>
    <common-header />
    <div class="loginform_wrap">
      <div class="login_wrap">
        <h2>로그인</h2>
        <form action="/" method="post">
          <div class="idPass">
            <label>아이디</label><span><input type="text"/></span>
          </div>
          <div class="idPass">
            <label>비밀번호</label><span><input type="password"/></span>
          </div>
          <div class="autoLogin">
            <label class="label_box" for="rememberMe">
              <input type="checkbox" id="rememberMe" checked />
              <span class="checkmark"></span>
            </label>
            <label for="rememberMe">자동 로그인</label>
          </div>
        </form>
        <div class="btn_wrap">
          <button class="btn-default">로그인</button>
        </div>
        <div class="login_bottom">
          <div class="find_form">
            <button @click="modalIdOpen">아이디 찾기</button>
            <span>|</span>
            <button @click="modalPasswordOpen">비밀번호 찾기</button>
          </div>
          <div class="join">
            <router-link to="/join">회원가입</router-link>
          </div>
        </div>
      </div>
    </div>
    <find-id-modal v-if="isIdModal" @close="onCloseModal"></find-id-modal>
    <find-password-modal
      v-if="isPasswordModal"
      @close="onClosePasswordModal"
    ></find-password-modal>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import FindIdModal from "@/components/user/Common/Modal/FindIdModal.vue";
import FindPasswordModal from "@/components/user/Common/Modal/FindPasswordModal.vue";

export default {
  name: "Login",
  components: {
    CommonHeader,
    FindIdModal,
    FindPasswordModal,
  },
  data: () => ({
    isIdModal: false,
    isPasswordModal: false,
  }),
  methods: {
    modalIdOpen() {
      this.isIdModal = true;
    },
    onCloseModal() {
      this.isIdModal = false;
    },
    modalPasswordOpen() {
      this.isPasswordModal = true;
    },
    onClosePasswordModal() {
      this.isPasswordModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
.loginform_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color;
  padding: 120px 0;
  height: 100%;
  .login_wrap {
    padding: 120px 0;
    max-width: 500px;
    min-width: 420px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
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
      div.idPass {
        margin-bottom: 30px;
        label {
          width: 100%;
          display: block;
          margin-bottom: 15px;
        }
        span {
          width: 100%;
          display: block;
          input[type="text"] {
            width: 100%;
            box-sizing: border-box;
            height: 48px;
          }
          input[type="password"] {
            width: 100%;
            box-sizing: border-box;
            height: 48px;
          }
        }
        &:nth-child(2) {
          margin-bottom: 0;
        }
      }
      div.autoLogin {
        display: flex;
        line-height: 25px;
        margin-top: 15px;
        label:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
    .btn_wrap {
      margin-top: 20px;
      button {
        height: 50px;
        font-size: $lg-font;
      }
    }
    .login_bottom {
      margin-top: 30px;
      border-top: 1px solid $gray-scale-3;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      .find_form {
        display: flex;
        flex: 0.6;
        line-height: 30px;
        font-size: $default-font;
        span {
          display: block;
        }
        button {
          background-color: transparent;
          border: 0;
          width: auto;
          padding: 0 5px;
        }
      }
      .join {
        a {
          color: black;
          font-size: $default-font;
        }
      }
    }
  }
}
</style>
