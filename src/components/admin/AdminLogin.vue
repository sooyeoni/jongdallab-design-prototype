<template>
  <section>
    <div class="loginform_wrap">
      <div class="login_wrap">
        <h2>B2B 관리자 로그인</h2>
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
          <button class="btn-round-default">로그인</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdminLogin",
};
</script>

<style scoped lang="scss">
.loginform_wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .login_wrap {
    padding: 120px 0;
    max-width: 500px;
    min-width: 420px;
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
  }
}
</style>
