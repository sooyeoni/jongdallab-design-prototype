<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <mypage-dashboard></mypage-dashboard>
        </div>
        <div class="contents">
          <mypage-navi :active="6"></mypage-navi>
          <div class="wrap">
            <h3>문의 내역 <router-link to="/inquire">문의하기</router-link></h3>
            <div class="infobox">
              <table>
                <colgroup>
                  <col width="100" />
                  <col width="200" />
                  <col width="200" />
                  <col width="400" />
                  <col width="120" />
                </colgroup>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>상태</th>
                    <th>문의일자</th>
                    <th>문의명</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>
                      <span class="answerCompleted">답변 완료</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button class="detailViewBtn" @click="onDetailView">
                        상세</button
                      ><button class="btn-cancel">삭제</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <span class="unanswered">미답변</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button class="detailViewBtn" @click="onDetailView">
                        상세</button
                      ><button class="btn-cancel">삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="list_none">
                <p>내역이 없습니다.</p>
              </div>
            </div>
            <paging></paging>
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
import Paging from "@/components/user/Common/Paging/Paging.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";

export default {
  name: "MypageInquireList",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    Paging,
    CommonFooter,
  },
  methods: {
    onDetailView() {
      this.$router.push(`/mypage/inquireDetail`);
    },
  },
};
</script>

<style scoped lang="scss">
section.mypage_wrap {
  background-color: $background-color;
  padding: $section-padding 0;
  .contents {
    display: flex;
    .wrap {
      padding-left: 30px;
      flex: 1;
      h3 {
        font-size: $elg-font;
        display: flex;
        justify-content: space-between;
        a {
          font-size: $md-font;
          background-color: $sub-color;
          color: white;
          border-radius: 30px;
          height: 35px;
          display: block;
          width: 120px;
          text-align: center;
          line-height: 35px;
        }
      }
      .infobox {
        background-color: white;
        border: 1px solid $gray-scale-3;
        padding: 30px 30px 20px;
        margin-top: 20px;
        border-radius: 4px;
        thead {
          tr {
            border-bottom: 1px solid $gray-scale-3;
            th {
              padding: 0 0 15px 0;
              text-align: left;
            }
          }
        }
        tbody {
          tr {
            border-bottom: 1px solid $gray-scale-3;
            td {
              padding: 10px 0 10px;
            }
            &:last-child {
              border-bottom: 0;
            }
          }
          td {
            &.manage {
              display: flex;
              button:nth-child(1) {
                margin-right: 10px;
              }
            }
            span.answerCompleted {
              display: inline-block;
              background-color: $sub-color;
              padding: 7px;
              border-radius: 4px;
              color: white;
            }
            span.unanswered {
              display: inline-block;
              background-color: $background-color;
              padding: 7px;
              border-radius: 4px;
              color: $gray-scale-2;
            }
          }
        }
        .list_none {
          line-height: 58px;
          p {
            text-align: center;
            font-size: $md-font;
            color: $gray-scale-5;
          }
        }
      }
    }
  }
}
</style>
