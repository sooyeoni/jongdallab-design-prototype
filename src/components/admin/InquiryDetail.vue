<template>
  <section>
    <div class="admin_wrapper">
      <side-bar></side-bar>
      <div class="main_section">
        <page-header :page-title="pageName" />
        <div class="contents_box">
          <div class="basic_info">
            <div class="title">
              <label>상품 정보</label
              ><button @click="onSlide">
                <i class="fal" :class="icon"></i>
              </button>
            </div>
            <div class="basic_contents" id="productinfo_slide">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>상품 이미지</th>
                  <td>
                    <img
                      src="https://bupasastorage.blob.core.windows.net/deepch/learning/candyfabric.co.kr/web/product/medium/corla007_21861.jpg"
                    />
                  </td>
                </tr>
                <tr>
                  <th>상품명</th>
                  <td>패션 라벨</td>
                </tr>
                <tr>
                  <th>카테고리</th>
                  <td>1차카테고리>2차 카테고리</td>
                </tr>
                <tr>
                  <th>혼용률</th>
                  <td>
                    Cotton 100%
                  </td>
                </tr>
                <tr>
                  <th>규격</th>
                  <td>제작</td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>염색</td>
                </tr>
                <tr>
                  <th>최소주문수량</th>
                  <td>100/Yard</td>
                </tr>
                <tr>
                  <th>제작기간</th>
                  <td>5일~10일 소요</td>
                </tr>
                <tr>
                  <th>가격대</th>
                  <td>₩7,800~15,400/yard</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="basic_info">
            <div class="title">
              <p>회원 정보</p>
            </div>
            <div class="basic_contents">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>회원 아이디</th>
                  <td>wooorin1001</td>
                </tr>
                <tr>
                  <th>핸드폰 번호</th>
                  <td>010-1212-1212</td>
                </tr>
                <tr>
                  <th>사업자명</th>
                  <td>이우린</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="basic_info">
            <div class="title">
              <p>문의 정보</p>
            </div>
            <div class="basic_contents">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>문의 유형</th>
                  <td>상품 문의</td>
                </tr>
                <tr>
                  <th>문의 날짜</th>
                  <td>2021-01-31</td>
                </tr>
                <tr>
                  <th>문의명</th>
                  <td>문의합니다.</td>
                </tr>
                <tr>
                  <th>문의내용</th>
                  <td class="textarea">
                    문의내용입니당..문의내용입니당문의내용입니당문의내용입니당문의내용입니당문의내용입니당문의내용입니당문의내용입니당문의내용입니당문의내용입니당
                  </td>
                </tr>
                <tr>
                  <th>첨부 파일</th>
                  <td class="file_Download">
                    <p><a href="#" download>12354565.ai</a></p>
                    <p><a href="#" download>12354565.ai</a></p>
                    <p><a href="#" download>12354565.ai</a></p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="basic_info">
            <div class="title">
              <p>문의 답변</p>
            </div>
            <div class="basic_contents">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>답변</th>
                  <td><textarea></textarea></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="button_wrap">
            <button class="btn-round-default">답변등록</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import PageHeader from "@/components/admin/Common/PageHeader.vue";
import SideBar from "@/components/admin/Common/SideBar.vue";
import Paging from "@/components/admin/Common/Paging.vue";

export default {
  name: "InquiryDetail",
  components: {
    SideBar,
    PageHeader,
    Paging,
  },
  data: () => ({
    pageName: "문의 상세",
    icon: "fa-chevron-down",
  }),
  methods: {
    onSlide() {
      const target = `#productinfo_slide`;
      if (this.icon === "fa-chevron-down") {
        $(target).hide("blind");
        this.icon = "fa-chevron-right";
      } else {
        $(target).show("blind");
        this.icon = "fa-chevron-down";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.basic_info {
  background-color: white;
  max-width: 800px;
  min-width: 800px;
  // border: 1px solid $gray-scale-3;
  border-radius: 3px;
  margin-bottom: 30px;
  .title {
    border-bottom: 1px solid $gray-scale-3;
    padding: 16px;
    font-size: $lg-font;
    display: flex;
    justify-content: space-between;
    button {
      width: 30px;
      height: 30px;
      font-size: $sm-font;
    }
    &:first-child {
      line-height: 30px;
      padding: 10px 16px;
    }
  }
  .basic_contents {
    table {
      width: 100%;
      tr {
        border-bottom: 1px solid $gray-scale-3;
        th {
          padding: 16px;
          // border-right: 1px solid $gray-scale-3;
          text-align: left;
          font-weight: 500;
          color: $gray-scale-1;
        }
        td {
          padding: 16px;
          input[type="password"] {
            width: 50%;
          }
          img {
            height: 150px;
          }
          &.textarea {
            line-height: 1.3;
          }
          &.file_Download {
            p {
              line-height: 1.3;
              a {
                color: black;
                text-decoration: underline;
                color: $gray-scale-1;
              }
            }
          }
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
.button_wrap {
  width: 800px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 140px;
  }
}
</style>
