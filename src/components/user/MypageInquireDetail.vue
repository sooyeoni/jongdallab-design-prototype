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
              <h3>문의 상세</h3>
              <div class="infobox">
                <table>
                  <colgroup>
                    <col width="180" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>문의 일자</th>
                      <td>2021.08.08</td>
                    </tr>
                    <tr>
                      <th>답변 상태</th>
                      <td>답변완료</td>
                    </tr>
                    <tr>
                      <th>문의 유형</th>
                      <td>상품 문의</td>
                    </tr>
                    <tr>
                      <th>문의명</th>
                      <td>
                        문의명입니다.
                      </td>
                    </tr>
                    <tr>
                      <th>문의 내용</th>
                      <td>
                        문의명입니다.
                      </td>
                    </tr>
                    <tr>
                      <th>첨부 파일</th>
                      <td>
                        <p>
                          <a href="#" download="download"
                            >asdadadasdasdasd.png</a
                          >
                        </p>
                        <p>
                          <a href="#" download="download"
                            >asdadadasdasdasd.png</a
                          >
                        </p>
                        <p>
                          <a href="#" download="download"
                            >asdadadasdasdasd.png</a
                          >
                        </p>
                      </td>
                    </tr>
                    <tr class="answer_tr">
                      <th>답변</th>
                      <td>
                        <div class="textarea">
                          adsasdsadasdasdasda답변 블라블라블라
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="button_wrap">
                  <button class="btn-round-default" @click="oninquireList">
                    목록
                  </button>
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
  name: "MypageInquireDetail",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    ProductInfo,
    CommonFooter,
  },
  methods: {
    oninquireList() {
      this.$router.push(`/mypage/inquireList`);
    },
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
        .infobox {
          table {
            background-color: white;
            width: 100%;
            border: 1px solid $gray-scale-4;
            tbody {
              tr {
                border-bottom: 1px solid $gray-scale-4;
                th {
                  text-align: left;
                  padding: 18px 20px;
                  border-right: 1px solid $gray-scale-4;
                  background-color: $background-color;
                  font-weight: 500;
                }
                td {
                  text-align: left;
                  padding: 12px 20px;
                  .textarea {
                    border: 0;
                    padding: 0;
                    resize: none;
                    height: 180px;
                  }
                  p {
                    margin-top: 10px;
                    a {
                      color: $gray-scale-1;
                      text-decoration: underline;
                    }
                    &:first-child {
                      margin-top: 0;
                    }
                  }
                }
              }
            }
          }
        }
        .button_wrap {
          margin-top: 25px;
          width: 180px;
          float: right;
        }
      }
      .right_wrap {
        margin-top: 40px;
        flex: 1;
        max-width: 300px;
        margin-left: 30px;
      }
    }
  }
}
</style>
