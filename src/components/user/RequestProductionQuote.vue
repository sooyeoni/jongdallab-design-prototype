<template>
  <section>
    <common-header />
    <section class="request_wrap">
      <div class="container">
        <div class="contents">
          <div>
            <h3>
              제작 견적 요청
              <router-link to="/product/list"
                >목록으로 <i class="fal fa-chevron-right"></i
              ></router-link>
            </h3>
            <div class="request_box">
              <p class="request_name">
                <input type="text" placeholder="의뢰명을 입력해주세요." />
              </p>
              <div>
                <p class="label_title"><label>1차 카테고리</label></p>
                <p>
                  <label class="box-radio-input"
                    ><input
                      type="radio"
                      name="PrimaryCategory"
                      checked="checked"
                    /><span>라벨</span></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="PrimaryCategory" /><span
                      >지퍼</span
                    ></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="PrimaryCategory" /><span
                      >밴드</span
                    ></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="PrimaryCategory" /><span
                      >테이프</span
                    ></label
                  >
                </p>
              </div>
              <div>
                <p class="label_title"><label>2차 카테고리</label></p>
                <p>
                  <label class="box-radio-input"
                    ><input
                      type="radio"
                      name="SecondCategory"
                      checked="checked"
                    /><span>인쇄라벨</span></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="SecondCategory" /><span
                      >케어라벨</span
                    ></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="SecondCategory" /><span
                      >직조라벨</span
                    ></label
                  >
                  <label class="box-radio-input"
                    ><input type="radio" name="SecondCategory" /><span
                      >행택</span
                    ></label
                  >
                </p>
              </div>
              <div>
                <p class="label_title"><label>견적 요청 수량</label></p>
                <p>
                  <input
                    type="number"
                    placeholder="요청 수량이 최소 수량 보다 적을 수 없습니다."
                  />
                </p>
              </div>
              <div class="textareaDiv">
                <p class="label_title"><label>견적내용</label></p>
                <p>
                  <textarea
                    placeholder="견적 받을 내용을 작성해 주세요."
                  ></textarea>
                </p>
              </div>
              <div class="fileDiv">
                <p class="label_title"><label>파일 첨부</label></p>
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
            <div class="btn_wrap">
              <button class="btn-round-default modify_btn">
                요청하기
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
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";

export default {
  name: "RequestProdictionQuote",
  components: {
    CommonHeader,
    CommonFooter,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
section.request_wrap {
  background-color: $sub-background-color;
  padding: $section-padding 0;
  h3 {
    font-size: 30px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    a {
      color: $gray-scale-1;
      font-size: $md-font;
      line-height: 30px;
    }
  }
  .request_box {
    height: 100%;
    background-color: white;
    flex: 1;
    border: 1px solid $gray-scale-3;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 30px 30px;
    margin-top: 35px;
    .request_name {
      margin-bottom: 20px;
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 15px 15px;
      }
    }
    div {
      margin-bottom: 20px;
      display: flex;
      p {
        .box-radio-input {
          margin: 0 10px 0 0;
        }
        &.label_title {
          line-height: 40px;
          margin-right: 10px;
          min-width: 120px;
          font-size: $md-font;
        }
        label.box-radio-input {
          span {
            padding: 12px 30px;
            min-width: 120px;
            box-sizing: border-box;
          }
        }
        input[type="number"] {
          width: 300px;
          box-sizing: border-box;
        }
      }
      &.textareaDiv {
        display: inherit;
        label {
          width: 100%;
        }
      }
      &.fileDiv {
        display: inherit;
      }
    }
  }
  .btn_wrap {
    display: flex;
    justify-content: flex-end;
    button {
      width: 200px;
      margin-top: 30px;
      height: 40px;
    }
  }
}
</style>
