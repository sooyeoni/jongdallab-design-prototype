<template>
  <section>
    <div class="admin_wrapper">
      <side-bar></side-bar>
      <div class="main_section">
        <page-header :page-title="pageName" />
        <div class="contents_box">
          <div class="table_title">
            <p>회원 목록 <span>(100)</span></p>
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
                <col width="" />
                <col width="" />
                <col width="" />
                <col width="60" />
              </colgroup>
              <thead>
                <tr>
                  <th>No</th>
                  <th>회원 상태</th>
                  <th>사업자 인증 여부</th>
                  <th>사업자명</th>
                  <th>가입일</th>
                  <th>아이디</th>
                  <th>이메일</th>
                  <th>연락처</th>
                  <th>주소</th>
                  <th>웹사이트</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>이메일 미인증</td>
                  <td>사업자 미인증</td>
                  <td>김수린</td>
                  <td>2021-02-21</td>
                  <td>soorin2020</td>
                  <td>soorin2020@jongdali.com</td>
                  <td>010-1818-2020</td>
                  <td>서울시 중구 퇴계로 36길2, 동국대학교 창업지원센터</td>
                  <td>m.bupasa.net</td>
                  <td>
                    <button class="btn-border" @click="onDetailView">
                      상세보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>이메일 미인증</td>
                  <td>사업자 미인증</td>
                  <td>김수린</td>
                  <td>2021-02-21</td>
                  <td>soorin2020</td>
                  <td>soorin2020@jongdali.com</td>
                  <td>010-1818-2020</td>
                  <td>서울시 중구 퇴계로 36길2, 동국대학교 창업지원센터</td>
                  <td>m.bupasa.net</td>
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
  name: "AdminMemberList",
  components: {
    SideBar,
    PageHeader,
    Paging,
  },
  data: () => ({
    pageName: "회원 목록",
  }),
  methods: {
    onDetailView() {
      this.$router.push(`/admin/memberDetail`);
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
