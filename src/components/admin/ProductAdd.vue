<template>
  <section class="admin_wrapper">
    <side-bar></side-bar>
    <section class="main_section">
      <page-header :page-title="pageName" />
      <div class="contents_box">
        <div class="box">
          <div class="boxTitle">
            카테고리
          </div>
          <div class="boxBody">
            <el-cascader-panel :options="options"></el-cascader-panel>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            상품명
          </div>
          <div class="boxBody">
            <input type="text" />
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            가격
          </div>
          <div class="boxBody">
            <el-radio v-model="priceOption" label="priceSet">가격설정</el-radio>
            <el-radio v-model="priceOption" label="request">상담문의</el-radio>
            <div v-if="priceOption === 'priceSet'">
              <p class="labelInput"><input type="text" /> <span>원</span></p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            최소주문 수량
          </div>
          <div class="boxBody">
            <input type="number" />
            <select name="" id="">
              <option value="" hidden> 판매 단위선택</option>
              <option value=""> yard</option>
              <option value=""> 롤</option>
              <option value=""> 개(ea)</option>
            </select>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            소재(혼용률)
          </div>
          <div class="boxBody">
            <input type="text" />
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            사이즈(규격)
          </div>
          <div class="boxBody">
            <input type="text" />
            <select name="" id="">
              <option value="" hidden> 단위선택</option>
              <option value=""> cm</option>
              <option value=""> mm</option>
              <option value=""> inch</option>
            </select>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            제작기간
          </div>
          <div class="boxBody">
            <input type="text" /> ~ <input type="text" /> 일 소요
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            옵션
            <el-radio-group v-model="productOption">
              <el-radio-button label="N">미사용</el-radio-button>
              <el-radio-button label="Y">사용</el-radio-button>
            </el-radio-group>
          </div>
          <div class="boxBody" v-if="productOption === 'Y'">
            <table>
              <tbody>
                <tr>
                  <td>옵션명</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            제작 설정
            <el-radio-group v-model="customOption">
              <el-radio-button label="N">미허용</el-radio-button>
              <el-radio-button label="Y">허용</el-radio-button>
            </el-radio-group>
            <span>제작 미허용시 옵션선택과 수량입력만 가능합니다.</span>
          </div>
          <div class="boxBody" v-if="customOption === 'Y'">
            <p>제작 가능 항목을 선택해주세요.(다중선택 가능)</p>
            <el-checkbox v-model="checked">사이즈</el-checkbox>
            <p>선택항목:</p>
          </div>
        </div>
        <div class="box">
          <div class="boxTitle">
            상품 이미지
          </div>
          <div class="boxBody">
            <ul>
              <li class="imageBox">
                <label for="image1">
                  <el-button>파일 첨부</el-button>
                  <span>d</span>
                </label>
                <input type="file" id="image1" />
                <img
                  src="https://s.pstatic.net/shopping.phinf/20201110_15/3714f294-6485-4a6a-b2ec-1fe4a6872841.jpg?type=f214_292"
                  alt=""
                />
              </li>
              <li class="imageBox">
                <label for="image2">
                  <!-- <el-button>파일 첨부</el-button> -->
                </label>
                <input type="file" id="image2" />
                <img src="#" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import SideBar from "@/components/admin/Common/SideBar.vue";
import PageHeader from "@/components/admin/Common/PageHeader.vue";
export default {
  name: "ProductAdd",
  components: { SideBar, PageHeader },
  data: () => ({
    pageName: "회원 목록",
    priceOption: "priceSet",
    productOption: "N",
    customOption: "N",
    options: [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency",
              },
              {
                value: "feedback",
                label: "Feedback",
              },
              {
                value: "efficiency",
                label: "Efficiency",
              },
              {
                value: "controllability",
                label: "Controllability",
              },
            ],
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation",
              },
              {
                value: "top nav",
                label: "Top Navigation",
              },
            ],
          },
        ],
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout",
              },
              {
                value: "color",
                label: "Color",
              },
              {
                value: "typography",
                label: "Typography",
              },
              {
                value: "icon",
                label: "Icon",
              },
              {
                value: "button",
                label: "Button",
              },
            ],
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio",
              },
              {
                value: "checkbox",
                label: "Checkbox",
              },
              {
                value: "input",
                label: "Input",
              },
              {
                value: "input-number",
                label: "InputNumber",
              },
              {
                value: "select",
                label: "Select",
              },
              {
                value: "cascader",
                label: "Cascader",
              },
              {
                value: "switch",
                label: "Switch",
              },
              {
                value: "slider",
                label: "Slider",
              },
              {
                value: "time-picker",
                label: "TimePicker",
              },
              {
                value: "date-picker",
                label: "DatePicker",
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker",
              },
              {
                value: "upload",
                label: "Upload",
              },
              {
                value: "rate",
                label: "Rate",
              },
              {
                value: "form",
                label: "Form",
              },
            ],
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table",
              },
              {
                value: "tag",
                label: "Tag",
              },
              {
                value: "progress",
                label: "Progress",
              },
              {
                value: "tree",
                label: "Tree",
              },
              {
                value: "pagination",
                label: "Pagination",
              },
              {
                value: "badge",
                label: "Badge",
              },
            ],
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert",
              },
              {
                value: "loading",
                label: "Loading",
              },
              {
                value: "message",
                label: "Message",
              },
              {
                value: "message-box",
                label: "MessageBox",
              },
              {
                value: "notification",
                label: "Notification",
              },
            ],
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "NavMenu",
              },
              {
                value: "tabs",
                label: "Tabs",
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb",
              },
              {
                value: "dropdown",
                label: "Dropdown",
              },
              {
                value: "steps",
                label: "Steps",
              },
            ],
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog",
              },
              {
                value: "tooltip",
                label: "Tooltip",
              },
              {
                value: "popover",
                label: "Popover",
              },
              {
                value: "card",
                label: "Card",
              },
              {
                value: "carousel",
                label: "Carousel",
              },
              {
                value: "collapse",
                label: "Collapse",
              },
            ],
          },
        ],
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components",
          },
          {
            value: "sketch",
            label: "Sketch Templates",
          },
          {
            value: "docs",
            label: "Design Documentation",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.box {
  border: 1px solid $gray-scale-3;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 30px;
  background-color: #fff;
  .boxTitle {
    padding: 16px;
    font-size: $lg-font;
    border-bottom: 1px solid $gray-scale-3;
  }
  .boxBody {
    padding: 16px;
  }
}
.labelInput {
  display: inline-block;
  border: 1px solid $gray-scale-3;
  border-radius: 3px;
  height: 39px;
  margin-top: 15px;
  span {
    float: right;
    display: inline-block;
    width: 39px;
    height: 100%;
    line-height: 39px;
    text-align: center;
    font-size: $md-font;
    background-color: $sub-background-color;
    border-left: 1px solid $gray-scale-3;
  }
  input {
    border: 0;
    float: left;
    border-radius: 0;
  }
}
.contentWrap {
  box-sizing: border-box;
  padding: 50px;
}

ul {
  overflow: hidden;
  width: 100%;
  .imageBox {
    width: 180px;
    height: 180px;
    float: left;
    overflow: hidden;
    position: relative;
    margin-right: 15px;
    border: 1px solid $gray-scale-2;
    label {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 20px;
      vertical-align: middle;
    }
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      &[src="#"] {
        display: none;
      }
    }
    input {
      display: none;
    }
  }
}
</style>
