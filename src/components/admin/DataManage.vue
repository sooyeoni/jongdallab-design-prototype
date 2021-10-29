<template>
  <section>
    <div class="admin_wrapper">
      <side-bar></side-bar>
      <div class="main_section">
        <page-header :page-title="pageName" />
        <div class="contents_box">
          <div class="search_two_wrap">
            <div class="basic_info">
              <div class="title">
                <p>상품</p>
                <p><input type="date" /> - <input type="date" /></p>
              </div>
              <div class="basic_contents">
                <table>
                  <colgroup>
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>카테고리</th>
                      <th>누적 검색수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>상품명입니다.</td>
                      <td>밴드</td>
                      <td>15ㄴ</td>
                    </tr>
                    <tr>
                      <td>상품명입니다.</td>
                      <td>밴드</td>
                      <td>15ㄴ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="basic_info">
              <div class="title">
                <p>키워드</p>
                <p><input type="date" /> - <input type="date" /></p>
              </div>
              <div class="basic_contents">
                <table>
                  <colgroup>
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>키워드</th>
                      <th>누적 검색수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>헤링본.</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>헤링본.</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="button_wrap">
              <a href="#">CSV 다운로드</a>
            </div>
            <div class="basic_info">
              <div class="title">
                <p>사업자별 관심 키워드</p>
                <p>
                  <span><input type="date"/> - <input type="date"/></span
                  ><span class="bs_name"
                    ><label>사업자명</label><input type="text"/><button
                      class="search_btn"
                    >
                      <i class="fal fa-search"></i></button
                  ></span>
                </p>
              </div>
              <div class="basic_contents">
                <table>
                  <colgroup>
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>사업자명</th>
                      <th>키워드</th>
                      <th>누적 검색수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>상품명입니다.</td>
                      <td>밴드</td>
                      <td>15ㄴ</td>
                    </tr>
                    <tr>
                      <td>상품명입니다.</td>
                      <td>밴드</td>
                      <td>15ㄴ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="basic_info">
              <div class="title">
                <p>이미지 검색</p>
              </div>
              <div class="basic_contents">
                <table>
                  <colgroup>
                    <col width="250" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>이미지</th>
                      <th>날짜</th>
                      <th>담당자</th>
                      <th>핸드폰번호</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://bupasastorage.blob.core.windows.net/deepch/product/2021/02/c76c2b2c-375b-4bff-a633-ca6d464b72eb-600.jpg"
                        />
                      </td>
                      <td>2021-01-03</td>
                      <td>기미미</td>
                      <td>010-4444-4444</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="https://bupasastorage.blob.core.windows.net/deepch/product/2021/02/c76c2b2c-375b-4bff-a633-ca6d464b72eb-600.jpg"
                        />
                      </td>
                      <td>2021-01-03</td>
                      <td>기미미</td>
                      <td>010-4444-4444</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
  name: "DataManage",
  components: {
    SideBar,
    PageHeader,
    Paging,
  },
  data: () => ({
    pageName: "데이터 관리",
    icon: "fa-chevron-down",
    value2: "",
  }),
  methods: {},
};
</script>

<style scoped lang="scss">
.search_two_wrap {
  display: flex;
  .basic_info {
    max-width: 800px;
    min-width: 800px;
    // border: 1px solid $gray-scale-3;
    border-radius: 3px;
    margin-bottom: 30px;
    margin-right: 20px;
    .title {
      border-bottom: 1px solid $gray-scale-4;
      padding: 16px;
      font-size: $lg-font;
      display: flex;
      justify-content: space-between;
      background-color: white;

      button {
        width: 30px;
        height: 30px;
        font-size: $sm-font;
      }
      &:first-child {
        line-height: 40px;
        padding: 10px 16px;
      }
    }
  }
  .basic_contents {
    background-color: white;
    // padding: 20px;
    border-radius: 5px;
    table {
      background-color: white;
      width: 100%;
      box-sizing: border-box;
      thead {
        background-color: #f4f7fa;
        th {
          padding: 15px 0;
          font-weight: 500;
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid $gray-scale-4;
          td {
            padding: 15px 0;
            text-align: center;
          }
          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
}
.box {
  .basic_info {
    width: 1620px;
    // border: 1px solid $gray-scale-3;
    border-radius: 3px;
    margin-bottom: 30px;
    margin-right: 20px;
    .title {
      border-bottom: 1px solid $gray-scale-4;
      padding: 16px;
      font-size: $lg-font;
      display: flex;
      justify-content: space-between;
      background-color: white;

      button {
        width: 30px;
        height: 30px;
        font-size: $sm-font;
      }
      &:first-child {
        line-height: 40px;
        padding: 10px 16px;
      }
      .bs_name {
        margin-left: 20px;
        display: inline-flex;
        label {
          font-size: 14px;
          margin-right: 10px;
        }
        .search_btn {
          width: 41px;
          height: 40px;
          margin-left: 5px;
          box-sizing: border-box;
        }
      }
    }
  }
  .basic_contents {
    background-color: white;
    // padding: 20px;
    border-radius: 5px;
    table {
      background-color: white;
      width: 100%;
      box-sizing: border-box;
      thead {
        background-color: #f4f7fa;
        th {
          padding: 15px 0;
          font-weight: 500;
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid $gray-scale-4;
          td {
            padding: 15px 0;
            text-align: center;
            img {
              width: 150px;
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
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
    width: 1620px;
    a {
      border: 1px solid $gray-scale-4;
      padding: 10px;
      background-color: white;
      color: black;
      border-radius: 4px;
    }
  }
}
</style>
