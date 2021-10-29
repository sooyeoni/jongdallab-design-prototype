<template>
  <section class="wrap">
    <common-header class="transparent" />
    <section class="container alignment">
      <div class="contentsWrap">
        <div class="informationContent">
          <h2>E밴드,헤리테이프등 6종 퀄리티와 단가 받아보기</h2>
          <ul>
            <li>
              <span>무상 제공</span> : 퀄리티를 확인할 수 있는 샘플 6종과
              배송비까지 무료입니다.
            </li>
            <li><span>자신있는 퀄리티</span> : 타사와 비교하여 보세요.</li>
            <li><span>합리적인 가격</span> : 타사와 비교하여 보세요.</li>
          </ul>
          <p>※ 1ID당 1회 신청 가능합니다.</p>
        </div>
        <div class="requestForm">
          <h2>샘플신청하기</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <span class="label">수취인</span>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label">연락처</span>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td class="address_input">
                  <span class="label">주소지</span>
                  <span class="post_find"
                    ><input type="text" disabled /><button class="btn-border">
                      우편 찾기
                    </button></span
                  >
                  <span><input type="text" disabled/></span>
                  <span><input type="text"/></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label">배송 메세지</span>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <ul class="checkList">
            <li>
              <label class="label_box" for="check">
                <input type="checkbox" id="check" />
                <span class="checkmark"></span> </label
              ><label for="check">개인정보 수집동의[필수]</label>
            </li>
            <li>
              <label class="label_box" for="check2">
                <input type="checkbox" id="check2" />
                <span class="checkmark"></span> </label
              ><label for="check2">마케팅 정보수집•활용 동의[필수]</label>
            </li>
          </ul>
          <button class="btn-default requestBtn" disabled="true">
            샘플 신청하기
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
export default {
  name: "RequestFreeSample",
  components: { CommonHeader },
};
</script>

<style scoped lang="scss">
.wrap {
  background-color: #3469d1;
  // background-color: $primary-color;
}
.alignment {
  display: flex;
  min-height: calc(100vh - 68px);
  justify-content: center;
  padding-top: $section-padding;
}
.contentsWrap {
  width: 820px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  background-color: #fff;
  height: fit-content;
  .informationContent {
    padding: 40px;
    box-sizing: border-box;
    border-right: 1px solid $gray-scale-4;
    flex: 1;
    position: relative;
    ul {
      li {
        margin-top: 30px;
        color: $gray-scale-2;
        font-size: $lg-font - 2px;
        span {
          color: $gray-scale-1;
        }
      }
    }
    p {
      position: absolute;
      bottom: 40px;
      color: $primary-color;
      text-align: center;
    }
  }
  .requestForm {
    flex: 1;
    padding: 40px;
    box-sizing: border-box;
    h2 {
      font-size: $elg-font + 5;
      text-align: center;
    }
  }
}
table {
  width: 100%;
  input {
    width: 100%;
  }
  span {
    display: block;
    margin-bottom: 9px;
  }
  td,
  th {
    font-weight: normal;
    text-align: left;
    padding: 10px 0;
    font-size: $md-font;
  }
  .address_input {
    .post_find {
      display: flex;
      input {
        width: 30%;
      }
      button {
        margin-left: 10px;
        width: 20%;
      }
    }
  }
}
.checkList {
  li {
    display: flex;
    margin-top: 15px;
    label {
      margin-right: 5px;
      &:last-child {
        line-height: 25px;
      }
    }
  }
}
.requestBtn {
  padding: 15px;
  font-size: $lg-font !important;
  margin-top: 25px;
}
</style>
