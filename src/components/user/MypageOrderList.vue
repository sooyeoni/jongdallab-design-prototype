<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <mypage-dashboard></mypage-dashboard>
        </div>
        <div class="contents">
          <mypage-navi :active="4"></mypage-navi>
          <div class="wrap">
            <h3>
              발주 내역
            </h3>
            <search-filter></search-filter>
            <div class="infobox">
              <table>
                <colgroup>
                  <col width="100" />
                  <col width="120" />
                  <col width="200" />
                  <col width="200" />
                  <col width="400" />
                  <col width="180" />
                </colgroup>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>상태</th>
                    <th>의뢰일자</th>
                    <th>
                      <select class="category">
                        <option>카테고리</option>
                        <option>밴드</option>
                        <option>테이프</option>
                        <option>리본</option>
                      </select>
                    </th>
                    <th>의뢰명</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <!-- <tbody>
                  <tr>
                    <td>4</td>
                    <td>
                      <span class="DeliveryCompleted">납품완료</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>라벨>인쇄라벨</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button>
                        발주서 다운
                      </button>
                      <button class="detailViewBtn">
                        상세
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <span class="Unread">미열람</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>라벨>인쇄라벨</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button class="btn-cancel">발주 취소</button>
                      <button class="detailViewBtn" @click="onDetailView">
                        상세
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <span class="Unread">열람</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>라벨>인쇄라벨</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button class="detailViewBtn">
                        상세
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <span class="Unread">미열람</span>
                    </td>
                    <td>2021.01.04</td>
                    <td>라벨>인쇄라벨</td>
                    <td>상품 문의드립니다.</td>
                    <td class="manage">
                      <button class="detailViewBtn">
                        상세
                      </button>
                    </td>
                  </tr>
                </tbody> -->
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
import SearchFilter from "@/components/user/Common/Mypage/SearchFilter.vue";

export default {
  name: "MypageOrderDetail",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    Paging,
    CommonFooter,
    SearchFilter,
  },
  methods: {
    onDetailView() {
      this.$router.push("/orderDetail");
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
      }
      .sb_text {
        color: $primary-color;
        font-size: $md-font;
        margin-top: 10px;
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
              select.category {
                border: 0;
                padding: 0;
                width: auto;
                outline: none !important;
                font-weight: bold;
                font-size: 14px;
              }
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
              justify-content: right;
              button {
                width: 80px;
                &:nth-child(2) {
                  margin-left: 10px;
                }
              }
            }
            span.DeliveryCompleted {
              display: inline-block;
              background-color: $sub-color;
              padding: 7px;
              border-radius: 4px;
              color: white;
            }
            span.Unread {
              display: inline-block;
              background-color: $background-color;
              padding: 7px;
              border-radius: 4px;
              color: $gray-scale-2;
            }
            &.ExpirationPeriodLabel {
              color: $primary-color;
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
