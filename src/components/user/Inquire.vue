<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <!-- <mypage-dashboard></mypage-dashboard> -->
        </div>
        <div class="contents">
          <!-- <mypage-navi :active="5"></mypage-navi> -->
          <div class="wrap">
            <div class="left_wrap">
              <h3>문의 등록</h3>
              <ol>
                <!--마이페이지 , 홈,변함-->
                <li><router-link to="/">마이페이지</router-link></li>
                <li>문의 등록</li>
              </ol>
              <div class="infobox">
                <div class="inquire_title">
                  <!--상품 정보에서 문의하기 클릭시 상품문의로 option변경-->
                  <select>
                    <option>문의 유형</option>
                    <option>상품 문의</option>
                    <option>교환/환불</option>
                    <option>취소</option>
                    <option>불량</option>
                    <option>상품</option>
                    <option>견적/발주</option>
                    <option>결제</option>
                    <option>배송</option>
                    <option>기타</option>
                  </select>
                  <input type="text" placeholder="문의명을 입력해주세요." />
                </div>
                <div class="inquire_content">
                  <textarea placeholder="문의 내용을 작성해주세요."></textarea>
                </div>
                <div class="file_upload_wrap">
                  <p>파일 첨부</p>
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
                <div class="button_wrap">
                  <button class="btn-round-default">문의하기</button>
                </div>
              </div>
            </div>
            <div class="right_wrap">
              <product-info></product-info>
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
import ProductInfo from "@/components/user/Common/Product/ProductInfo.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";

export default {
  name: "Inquire",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    ProductInfo,
    CommonFooter,
  },
};
</script>

<style scoped lang="scss">
section.mypage_wrap {
  background-color: $background-color;
  padding: $section-padding 0;
  .contents {
    .wrap {
      display: flex;
      flex: 1;
      .left_wrap {
        flex: 1;
        ol {
          border-bottom: 1px solid $gray-scale-3;
          margin-bottom: 30px;
          padding: 0 0 20px 0;
          display: flex;
          li {
            a {
              color: $gray-scale-1;
              font-size: $md-font;
            }
            &:nth-child(1) {
              a {
                color: $gray-scale-2;
              }
              ::after {
                content: ">";
                margin: 0 4px;
                color: $gray-scale-2;
              }
            }
          }
        }
        h3 {
          font-size: $elg-font;
          margin-bottom: 20px;
        }
        .inquire_title {
          border: 1px solid $gray-scale-3;
          background-color: white;
          border-radius: 4px;
          display: flex;

          select {
            border: 0;
            outline: none;
            padding: 15px 10px;
            box-sizing: border-box;
            border-radius: 4px;
          }
          input {
            border: 0;
            padding: 15px 15px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            :focus {
              border: 0;
            }
          }
        }
        .inquire_content {
          margin-top: 15px;
          textarea {
            resize: none;
            height: 400px;
          }
        }
        .file_upload_wrap {
          margin-top: 20px;
          .file_wrap {
            margin-top: 10px;
          }
        }
        .button_wrap {
          margin-top: 25px;
          width: 180px;
          float: right;
        }
      }
      .right_wrap {
        margin-top: 75px;
        flex: 1;
        max-width: 300px;
        margin-left: 30px;
      }
    }
  }
}
</style>
