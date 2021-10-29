<template>
  <section>
    <div class="admin_wrapper">
      <side-bar></side-bar>
      <div class="main_section">
        <page-header :page-title="pageName" />
        <div class="contents_box">
          <div class="basic_info">
            <div class="title">
              <p>기본정보</p>
            </div>
            <div class="basic_contents">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>회원 상태</th>
                  <td>이메일 인증완료</td>
                </tr>
                <tr>
                  <th>가입 일자</th>
                  <td>2021-01-01</td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>woorin1984</td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input
                      type="password"
                      placeholder="새로운 비밀번호를 입력해주세요."
                    />
                  </td>
                </tr>
                <tr>
                  <th>핸드폰 번호</th>
                  <td>0010-5158-3051</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="business_info">
            <div class="title">
              <p>사업자 정보</p>
            </div>
            <div class="business_contents">
              <table>
                <colgroup>
                  <col width="140" />
                </colgroup>
                <tr>
                  <th>사업자 등록증</th>
                  <td>미등록</td>
                </tr>
                <tr>
                  <th>사업자 인증 상태</th>
                  <td class="Businesslicense">
                    <label class="radio_box"
                      >미인증
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmarkradio"></span>
                    </label>
                    <label class="radio_box"
                      >인증
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmarkradio"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>사업자 인증 파일</th>
                  <td>
                    <a href="#" class="btn-border download_btn" download
                      >다운로드</a
                    >
                  </td>
                </tr>
                <tr>
                  <th>사업자명</th>
                  <td>
                    <input type="text" placeholder="사업자명" />
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td><input type="text" placeholder="010-0000-0000" /></td>
                </tr>
                <tr class="post_wrap">
                  <th>주소</th>
                  <td>
                    <span class="post_find"
                      ><input type="text" disabled /><button class="btn-border">
                        우편 찾기
                      </button></span
                    >
                    <span><input type="text" disabled/></span>
                    <span><input type="text"/></span>
                  </td>
                </tr>
                <tr>
                  <th>담당자</th>
                  <td><input type="text" placeholder="담당자" /></td>
                </tr>
                <tr>
                  <th>웹사이트</th>
                  <td>
                    <input type="text" placeholder="email.com" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="button_wrap">
            <button class="btn-round-default">수정</button>
          </div>
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
  name: "AdminMemberDetail",
  components: {
    SideBar,
    PageHeader,
    Paging,
  },
  data: () => ({
    pageName: "회원 상세",
  }),
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
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
.business_info {
  background-color: white;
  max-width: 800px;
  min-width: 800px;
  // border: 1px solid $gray-scale-3;
  border-radius: 3px;
  .title {
    border-bottom: 1px solid $gray-scale-3;
    padding: 16px;
    font-size: $lg-font;
  }
  .business_contents {
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
          &.Businesslicense {
            display: flex;
            label {
              margin-right: 15px;
            }
          }
          input[type="text"] {
            width: 200px;
          }
          .download_btn {
            padding: 5px 10px;
            color: black;
          }
        }
        &:last-child {
          border-bottom: 0;
        }
        &.post_wrap {
          td {
            span {
              display: flex;
              margin-bottom: 10px;
              &.post_find {
                input[type="text"] {
                  width: 200px;
                }
                button {
                  width: 120px;
                  margin-left: 20px;
                }
              }
              input[type="text"] {
                width: 80%;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
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
