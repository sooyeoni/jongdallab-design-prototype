<template>
  <section>
    <div class="admin_wrapper">
      <side-bar></side-bar>
      <div class="main_section">
        <page-header :page-title="pageName" />
        <div class="contents_box">
          <div class="table_title">
            <p>문의 목록 <span>(100)</span></p>
          </div>
          <div class="table_wrap">
            <table>
              <colgroup>
                <col width="50" />
                <col width="" />
                <col width="" />
                <col width="" />
                <col width="" />
                <col width="" />
                <col width="" />
                <col width="60" />
              </colgroup>
              <thead>
                <tr>
                  <th>No</th>
                  <th>문의 유형</th>
                  <th>문의명</th>
                  <th>문의 날짜</th>
                  <th>답변상태</th>
                  <th>사용자 아이디</th>
                  <th>사업자명</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>상품 문의</td>
                  <td>라벨 맞춤 문의합니다.</td>
                  <td>2021-01-28</td>
                  <td>답변대기</td>
                  <td>woorin2020</td>
                  <td>김우린</td>
                  <td>
                    <button class="btn-border" @click="onDetailView">
                      상세보기
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <paging></paging>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageHeader from "@/components/admin/Common/PageHeader.vue";
import SideBar from "@/components/admin/Common/SideBar.vue";
import Paging from "@/components/admin/Common/Paging.vue";

export default {
  name: "InquiryList",
  components: {
    SideBar,
    PageHeader,
    Paging,
  },
  data: () => ({
    pageName: "문의 목록",
  }),
  methods: {
    onDetailView() {
      this.$router.push(`/admin/inquiryDetail`);
    },
  },
};
</script>

<style scoped lang="scss">
.table_title {
  font-size: 20px;
  border-bottom: 1px solid $gray-scale-4;
  padding: 20px 0;
  margin-bottom: 15px;
  span {
    color: $sub-color;
  }
}
.table_wrap {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid $gray-scale-4;
  table {
    width: 100%;
    thead {
      border-bottom: 1px solid $gray-scale-4;
      th {
        padding: 0 0 15px 0;
        text-align: center;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid $gray-scale-4;
        td {
          padding: 15px 0 15px 0;
          text-align: center;
          line-height: 1.3;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
