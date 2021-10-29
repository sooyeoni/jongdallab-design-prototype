<template>
  <section class=" flexWrap">
    <div class="form">
      <div>
        <h4>E-카탈로그를 보내드립니다</h4>
        <p>000의 새로운소식과 정기메일을 받아보세요</p>
        <input type="text" placeholder="이름 또는 기업명을 작성해주세요" />
        <input type="email" placeholder="이메일" />
        <button class="btn-default">
          구독하기
        </button>
      </div>
    </div>
    <div>
      <img
        src="
        https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsletterForm",
};
</script>

<style scoped lang="scss">
.flexWrap {
  display: flex;
  > div {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .form {
    position: relative;
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h4 {
        font-size: $elg-font * 2;
      }
      p {
        margin-top: 25px;
        font-size: $lg-font;
        margin-bottom: 50px;
      }
      input {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
      button {
        padding: 15px;
      }
    }
  }
}
</style>
