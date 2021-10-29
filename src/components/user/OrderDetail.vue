<template>
  <section>
    <common-header />
    <!--발주서 수정은 미열람 상태일때만 수정이 가능하므로 미열람상태일때 상세에서는 모든 입력가능한input을 disabled로 해놓으면 된다.-->
    <section class="order_wrap">
      <div class="container">
        <div class="contents">
          <div class="wrap">
            <h3>
              발주서
              <router-link to="/mypage/orderList"
                >목록으로 <i class="fal fa-chevron-right"></i
              ></router-link>
            </h3>
            <div class="infoTwo">
              <div class="order_info">
                <div class="top_info">
                  <div>
                    <h4>BUJA 발주서</h4>
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
                      <col width="100" />
                      <col width="200" />
                      <col width="300" />
                    </colgroup>
                    <tr>
                      <th colspan="2">입금정보</th>
                      <th>입금기한</th>
                      <th>입금 금액 <span>(공급가액+세액+운송료)</span></th>
                    </tr>
                    <tr>
                      <th rowspan="1">입금은행:</th>
                      <td>국민은행</td>
                      <td rowspan="3" class="deposit_Date">
                        2021년9월30일까지
                      </td>
                      <td rowspan="3" class="deposit_amount">₩5,000,000</td>
                    </tr>
                    <tr>
                      <th rowspan="1">계좌번호:</th>
                      <td>입금은행계좌번호</td>
                    </tr>
                    <tr>
                      <th rowspan="1">예금주:</th>
                      <td>&#40;주&#41;종달랩</td>
                    </tr>
                  </table>
                </div>
                <div class="text_info">
                  <ul>
                    <li>입금 금액을 꼭 확인하세요.</li>
                    <li>입금 확인 후 생산 및 배송이 진행됩니다.</li>
                    <li>
                      입금 기한 내 입금 시 자동 취소되며 발주서 조회가
                      불가능합니다.
                    </li>
                  </ul>
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
              <div class="delivery_info">
                <h4>배송 정보</h4>
                <div class="delivery_input">
                  <p>
                    <label>수취인</label>
                    <input type="text" />
                  </p>
                  <p>
                    <label>연락처</label>
                    <input type="text" />
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
                </div>
                <div class="DesireddeliveryDate">
                  <label
                    >희망 배송일<span
                      >최대한 반영 예정이나 못 맞출 수 있음</span
                    ></label
                  >
                  <span class="date_wrap">
                    <input type="date" />
                  </span>
                </div>
                <div class="colorchip">
                  <label
                    >컬러칩 전달유무<label class="switch">
                      <input type="checkbox" checked disabled />
                      <span class="slider round"></span> </label
                  ></label>
                  <p>
                    염색할 색상칩 또는 원단의 스와치를 전달하시겠습니까?<br />컬러칩
                    전달 시 운송 및 확인 절차로 인하여 제작 기간이 늘어납니다.
                  </p>
                </div>
                <div class="shippingMethod">
                  <label>운송방법</label>
                  <p>운송료는 운송 방법 및 지역에 따라 추가 될 수 있습니다.</p>
                  <div class="buttontypeRadio">
                    <input type="radio" id="value1" name="RadioType" checked />
                    <label for="value1">
                      <i class="fas fa-dot-circle"></i>
                      <span>택배 배송</span></label
                    >
                    <input type="radio" id="value2" name="RadioType" />
                    <label for="value2">
                      <i class="fas fa-dot-circle"></i>
                      <span>퀵배송</span></label
                    >
                  </div>
                </div>
                <button class="btn-round-default">수정하기</button>
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
  name: "OrderDetail",
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
              &.deposit_Date {
                font-size: $md-font;
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
      .text_info {
        ul {
          padding: 50px 0;
          li {
            position: relative;
            margin-top: 15px;
            list-style: disc;
            margin-left: 20px;
            color: $gray-scale-1;
          }
        }
      }
      .company_info {
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
    .delivery_info {
      flex: 1;
      margin-left: 30px;
      max-width: 350px;
      background-color: white;
      border: 1px solid $gray-scale-3;
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      h4 {
        font-size: $lg-font;
        font-weight: 500;
      }
      > div {
        border-bottom: 1px solid $gray-scale-4;
        padding: 25px 0;
      }
      .delivery_input {
        p {
          margin-bottom: 30px;
          label {
            width: 100%;
            color: $gray-scale-1;
            display: block;
            margin-bottom: 15px;
          }
          input {
            width: 100%;
            box-sizing: border-box;
          }
          &.address_input {
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
              &:last-child input {
                margin-top: 9px;
              }
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .DesireddeliveryDate {
      display: flex;
      justify-content: space-between;
      label {
        display: flex;
        flex-direction: column;
        color: $gray-scale-1;
        span {
          color: $primary-color;
          font-size: $sm-font;
          margin-top: 10px;
          word-break: keep-all;
          line-height: 1.3;
        }
      }
      .date_wrap {
        padding: 10px 0;
        input[type="date"] {
          height: 35px;
          padding: 5px;
          box-sizing: border-box;
        }
      }
    }
    .colorchip {
      label {
        display: flex;
        justify-content: space-between;
        color: $gray-scale-1;
      }
      p {
        font-size: $sm-font;
        line-height: 1.3;
        color: $gray-scale-2;
        margin-top: 15px;
        word-break: keep-all;
      }
    }
    .shippingMethod {
      border-bottom: 0 !important;
      > label {
        color: $gray-scale-1;
      }
      > p {
        margin-top: 7px;
        color: $gray-scale-2;
        font-size: $sm-font;
      }
      .buttontypeRadio {
        margin-top: 15px;
      }
    }
  }
}
</style>
