<template>
  <section>
    <common-header />
    <section class="order_wrap">
      <div class="container">
        <div class="contents">
          <div class="wrap">
            <h3>
              견적서
              <router-link to="/mypage/orderList"
                >목록으로 <i class="fal fa-chevron-right"></i
              ></router-link>
            </h3>
            <div class="infoTwo">
              <div class="left_wrap">
                <div class="order_info">
                  <div class="top_info">
                    <div>
                      <h4>BUJA 견적서</h4>
                      <p>태양초 님</p>
                      <p>Date: 2021.01.23</p>
                    </div>
                    <div>
                      <table>
                        <tr>
                          <th>상호</th>
                          <td>(주)종달랩</td>
                        </tr>
                        <tr>
                          <th>대표자</th>
                          <td>성종형</td>
                        </tr>
                        <tr>
                          <th>사업자 등록번호</th>
                          <td>271-86-00528</td>
                        </tr>
                        <tr>
                          <th>주소</th>
                          <td>
                            서울시 중구 퇴계로 36길 2,<br />동국대학교 충무로관
                            신관 221호
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="order_product_info">
                    <table>
                      <colgroup>
                        <col width="40" />
                        <col width="250" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>품명</th>
                          <th>규격</th>
                          <th>수량</th>
                          <th>단가</th>
                          <th>공급가액</th>
                          <th>세액</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>상품명입니다.</td>
                          <td>48cm</td>
                          <td>50,000yd</td>
                          <td>100원</td>
                          <td>5,000,000원</td>
                          <td>500,000원</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>상품명입니다.</td>
                          <td>48cm</td>
                          <td>50,000yd</td>
                          <td>100원</td>
                          <td>5,000,000원</td>
                          <td>500,000원</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>상품명입니다.</td>
                          <td>48cm</td>
                          <td>50,000yd</td>
                          <td>100원</td>
                          <td>5,000,000원</td>
                          <td>500,000원</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>상품명입니다.</td>
                          <td>48cm</td>
                          <td>50,000yd</td>
                          <td>100원</td>
                          <td>5,000,000원</td>
                          <td>500,000원</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>상품명입니다.</td>
                          <td>48cm</td>
                          <td>50,000yd</td>
                          <td>100원</td>
                          <td>5,000,000원</td>
                          <td>500,000원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="deposit_info">
                    <table>
                      <colgroup>
                        <col width="300" />
                        <col width="300" />
                        <col width="300" />
                      </colgroup>
                      <tr>
                        <th>유효기간</th>
                        <th>합계</th>
                        <th>금액 <span>(Vat 포함)</span></th>
                      </tr>
                      <tr>
                        <td>2020-08-08까지 유효</td>
                        <td class="Total_price">
                          ₩5,010,000
                        </td>
                        <td class="deposit_amount">₩5,510,000</td>
                      </tr>
                    </table>
                  </div>
                  <div class="text_info">
                    <div class="company_info">
                      <p><b>Thank you:&#41;</b></p>
                      <p>
                        <span>Email.order@jongdali.com</span
                        ><span>Tel.02-2088-1716</span
                        ><span>Fax.02-2274-1116</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="downbuttonWrap">
                  <button>
                    <i class="fas fa-download"></i> 견적서 다운로드
                  </button>
                </div>
              </div>
              <div class="right_box">
                <div class="product_info">
                  <div class="img_box">
                    <img
                      src="https://bupasastorage.blob.core.windows.net/deepch/product/2021/01/46957933-956c-4c62-b38f-6ae1c2d29e9a-600.jpg"
                    />
                  </div>
                  <div class="product">
                    <p class="product_name">
                      (74색) 의류부자재 23수 헤링본 리본 테이프 패브릭 폴리끈
                      후드끈
                    </p>
                    <button class="btn-border-round">상품정보</button>
                  </div>
                </div>
                <div class="estimate_info">
                  <p>
                    <label>견적서명</label
                    ><span>견적서명__001daijghuw_001asdasdasdasdasd</span>
                  </p>
                  <p><label>주문타입</label><span>견적서명__001</span></p>
                  <p><label>종류</label><span>견적서명__001</span></p>
                  <p><label>사이즈</label><span>견적서명__001</span></p>
                  <p><label>수량</label><span>견적서명__001</span></p>
                  <p>
                    <label>디자인파일</label
                    ><span
                      ><a href="#" download="download">aksdjidjgsgsf.ai</a
                      ><a href="#" download="download">aksdjidjgsgsf.jpg</a
                      ><a href="#" download="download"
                        >aksdjidjgsgsf.png</a
                      ></span
                    >
                  </p>
                  <p><label>컷팅(옵션)</label><span>견적서명__001</span></p>
                </div>
                <button class="btn-round-default">발주하기</button>
              </div>
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
  name: "Estimate",
  components: {
    CommonHeader,
    CommonFooter,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
section.order_wrap {
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
  .infoTwo {
    display: flex;
    margin-top: 35px;
    .left_wrap {
      display: grid;
      .order_info {
        height: 100%;
        background-color: white;
        flex: 1;
        border: 1px solid $gray-scale-3;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 30px 30px;
        .top_info {
          display: flex;
          justify-content: space-between;
          div:nth-child(1) {
            h4 {
              font-size: 30px;
              margin-bottom: 80px;
            }
            p:nth-child(2) {
              font-weight: bold;
              font-size: 25px;
            }
            p:nth-child(3) {
              margin-top: 20px;
              color: $gray-scale-2;
            }
          }
          div:nth-child(2) {
            table {
              max-width: 480px;
              tr {
                border-bottom: 1px solid $gray-scale-4;
                th {
                  padding: 12px 20px 12px 12px;
                  text-align: left;
                }
                td {
                  padding: 12px 20px 12px 10px;
                  line-height: 1.3;
                }
                &:last-child {
                  border-bottom: 0;
                }
              }
            }
          }
        }
        .order_product_info {
          table {
            width: 100%;
            margin-top: 45px;
            thead {
              border-bottom: 1px solid $gray-scale-4;
            }
            tr {
              // border-bottom: 1px solid $gray-scale-4;
              th {
                padding: 12px 20px 12px 12px;
                text-align: left;
              }
              td {
                padding: 12px 20px 12px 10px;
                line-height: 1.3;
              }
            }
          }
        }
        .deposit_info {
          table {
            width: 100%;
            margin-top: 45px;
            tr {
              th {
                padding: 12px 20px 12px 12px;
                text-align: left;
                border-bottom: 1px solid $gray-scale-4;
                span {
                  font-size: $sm-font;
                  font-weight: 500;
                }
              }
              td {
                padding: 12px 20px 12px 10px;
                line-height: 1.3;
                &.Total_price {
                  color: $gray-scale-1;
                  font-size: 30px;
                }
                &.deposit_amount {
                  color: $primary-color;
                  font-size: 30px;
                }
              }
              &:nth-child(3) th {
                border-bottom: 0;
                font-weight: 500;
              }
              &:nth-child(4) th {
                border-bottom: 0;
                font-weight: 500;
              }
              &:nth-child(5) th {
                border-bottom: 0;
                font-weight: 500;
              }
            }
          }
        }
        .company_info {
          margin-top: 80px;
          display: flex;
          justify-content: space-between;
          p:nth-child(2) {
            color: $gray-scale-2;
            span {
              margin: 0 7px;
            }
          }
        }
      }
      .downbuttonWrap {
        display: flex;
        justify-content: flex-end;
        button {
          width: 150px;
          margin-top: 15px;
        }
      }
    }
    .right_box {
      flex: 1;
      margin-left: 30px;
      max-width: 350px;
      min-width: 350px;
      background-color: white;
      border: 1px solid $gray-scale-3;
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      height: 100%;
      .product_info {
        display: flex;
        margin-bottom: 20px;
        .img_box {
          width: 120px;
          position: relative;
          height: 120px;
          border: 1px solid $gray-scale-4;
          border-radius: 4px;
          img {
            height: 100%;
          }
        }
        .product {
          margin-left: 20px;
          .product_name {
            font-size: $md-font;
            line-height: 1.3;
          }
          button {
            margin-top: 10px;
          }
        }
      }
      .estimate_info {
        p {
          display: flex;
          padding: 20px 0 20px 0;
          border-bottom: 1px solid $gray-scale-4;
          label {
            color: $gray-scale-5;
            font-size: $md-font;
            display: block;
            min-width: 90px;
          }
          span {
            display: block;
            font-size: $md-font;
            word-break: break-all;

            a {
              display: block;
              text-decoration: underline;
              color: black;
              padding: 0 0 10px 0;
            }
          }
          &:last-child {
            border-bottom: 0;
          }
        }
      }
      button {
        margin-top: 30px;
      }
    }
  }
}
</style>
