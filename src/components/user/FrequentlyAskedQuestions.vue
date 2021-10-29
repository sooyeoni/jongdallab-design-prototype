<template>
  <section>
    <common-header />
    <div class="background">
      <div class="img"></div>
    </div>
    <section class="container">
      <div class="pageTitle">
        <h2>FAQ</h2>
        <p>부자마켓 이용에 대한 궁금증을 해결해 드립니다.</p>
      </div>
      <ul class="tab">
        <li :class="{ active: tab === 0 }" @click="onTab(0)">전체</li>
        <li :class="{ active: tab === 1 }" @click="onTab(1)">회원가입</li>
        <li :class="{ active: tab === 2 }" @click="onTab(2)">견적・발주</li>
        <li :class="{ active: tab === 3 }" @click="onTab(3)">결제</li>
        <li :class="{ active: tab === 4 }" @click="onTab(4)">배송</li>
        <li :class="{ active: tab === 5 }" @click="onTab(5)">
          취소・교환・반품
        </li>
        <li :class="{ active: tab === 6 }" @click="onTab(6)">오프라인 매장</li>
      </ul>
      <div class="listContainer">
        <!-- 회원가입 리스트 -->
        <el-collapse accordion>
          <el-collapse-item name="1" v-if="veiw1">
            <template slot="title">
              <div class="questions">
                <span class="label">회원가입</span>
                <div class="title">
                  비밀번호를 분실했는데 어떻게 해야 하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              로그인 페이지에서 아이디/비밀번호 찾기 버튼을 눌러주세요.가입하신
              이메일로 비밀번호 받아 보신 후 로그인을 해주세요.
            </div>
          </el-collapse-item>
          <!-- 견적・발주 리스트 -->
          <el-collapse-item name="2" v-if="veiw2">
            <template slot="title">
              <div class="questions">
                <span class="label">견적・발주</span>
                <div class="title">
                  비회원으로도 견적,발주 가능한가요?
                </div>
              </div>
            </template>
            <div class="asked">
              비회원은 상품의 정보가 제한적으로 제공되며, 견적.발주 서비스를
              이용하실 수 없습니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="3" v-if="veiw2">
            <template slot="title">
              <div class="questions">
                <span class="label">견적・발주</span>
                <div class="title">
                  발주는 어떻게 하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              발주는 <b>견적을 요청하신 후 견적이 완료</b>되면 [발주하기] 버튼을
              통해 발주하실 수 있습니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="4" v-if="veiw2">
            <template slot="title">
              <div class="questions">
                <span class="label">견적・발주</span>
                <div class="title">
                  가지고 있는 컬러칩으로 염색하고 싶을 땐 어떻게 전달하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              발주서 작성 시 컬러칩 전달 유무에 체크해 주시고 서울특별시 중구
              장충단로13길 34 동화상가 2층3동 16호 부자마켓 으로 발송해주세요.
            </div>
          </el-collapse-item>
          <!-- 결제 리스트 -->
          <el-collapse-item name="5" v-if="veiw3">
            <template slot="title">
              <div class="questions">
                <span class="label">결제</span>
                <div class="title">
                  현금영수증 발급은 어떻게 받나요?
                </div>
              </div>
            </template>
            <div class="asked">
              회원가입시 입력한 이메일과 마이페이지에 등록한 사업자 정보 또는
              발주서 작성시 첨부해주신 사업자등록증을 통하여 계산서가
              발행됩니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="6" v-if="veiw3">
            <template slot="title">
              <div class="questions">
                <span class="label">결제</span>
                <div class="title">
                  카드결제 가능한가요?
                </div>
              </div>
            </template>
            <div class="asked">
              아쉽게도 카드결제는 지원하고 있지 않습니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="7" v-if="veiw3">
            <template slot="title">
              <div class="questions">
                <span class="label">결제</span>
                <div class="title">
                  입금 기한은 언제까지인가요?
                </div>
              </div>
            </template>
            <div class="asked">
              일반적으로는 납품 완료 후 2주 이내 입금을 원칙으로 하나 담당자와
              상의 후 변경 가능합니다.
            </div>
          </el-collapse-item>
          <!-- 배송 리스트 -->
          <el-collapse-item name="8" v-if="veiw4">
            <template slot="title">
              <div class="questions">
                <span class="label">배송</span>
                <div class="title">
                  배송기간은 얼마나 걸리나요?
                </div>
              </div>
            </template>
            <div class="asked">
              배송은 제작기간+배송기간(1~3일)이 소요됩니다. 제작기간은 상품마다
              상이하여 상품 상세 정보를 참고해주시면 감사하겠습니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="9" v-if="veiw4">
            <template slot="title">
              <div class="questions">
                <span class="label">배송</span>
                <div class="title">
                  발주 후 퀵으로 받을 수 있나요?
                </div>
              </div>
            </template>
            <div class="asked">
              관리자 요청시 퀵서비스로 상품을 받아보실수있습니다. 다만, 수량과
              거리에따라 비용이 달라지는점 유의해주시기 바랍니다. (선불 퀵은
              지원하고 있지 않습니다.)
            </div>
          </el-collapse-item>
          <!-- 취소・교환・반품 리스트 -->

          <el-collapse-item name="10" v-if="veiw5">
            <template slot="title">
              <div class="questions">
                <span class="label">취소・교환・반품</span>
                <div class="title">
                  제품이 불량이거나 오배송일 경우는 어떻게 하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              불량,오배송의 경우 배송비는 부자마켓에서 부담하며 문의나
              채팅문의에 글을 남겨 주시거나 고객센터로 연락주시면 신속히
              처리해드리겠습니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="11" v-if="veiw5">
            <template slot="title">
              <div class="questions">
                <span class="label">취소・교환・반품</span>
                <div class="title">
                  반품교환 접수는 어떻게 하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              부자마켓은 모든 상품의 반품이나 교환이 어려우나 부득이한 경우
              문의, 채팅문의에 글을 남겨주세요. 제작 상품의 경우 100% 반품이나
              교환이 불가합니다.
            </div>
          </el-collapse-item>
          <el-collapse-item name="12" v-if="veiw5">
            <template slot="title">
              <div class="questions">
                <span class="label">취소・교환・반품</span>
                <div class="title">
                  견적요청취소나 발주요청취소는 어떻게 하나요?
                </div>
              </div>
            </template>
            <div class="asked">
              견적요청 취소는 판매자확인 전 단계인 “견적요청” 상태에서만
              가능하며 발주요청 취소는 문의나 채팅문의에 글을 남겨 주시거나
              고객센터로 연락주세요.
            </div>
          </el-collapse-item>
          <!-- 오프라인 매장 리스트 -->
          <el-collapse-item name="13" v-if="veiw6">
            <template slot="title">
              <div class="questions">
                <span class="label">오프라인매장</span>
                <div class="title">
                  매장에서 상품들을 확인할 수 있나요?
                </div>
              </div>
            </template>
            <div class="asked">
              매장에는 모든 상품이 비치되어 있지 않으므로 확인하고 싶으신 상품을
              문의나 채팅문의에 글을 남겨 주시면 대응해드리겠습니다.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";

export default {
  name: "FrequentlyAskedQuestions",
  components: {
    CommonHeader,
  },
  data: () => ({
    tab: 0,
    veiw1: true,
    veiw2: true,
    veiw3: true,
    veiw4: true,
    veiw5: true,
    veiw6: true,
  }),
  methods: {
    onTab(index) {
      this.tab = index;
      if (this.tab === 0) {
        this.veiw1 = true;
        this.veiw2 = true;
        this.veiw3 = true;
        this.veiw4 = true;
        this.veiw5 = true;
        this.veiw6 = true;
      } else if (this.tab === 1) {
        this.veiw1 = true;
        this.veiw2 = false;
        this.veiw3 = false;
        this.veiw4 = false;
        this.veiw5 = false;
        this.veiw6 = false;
      } else if (this.tab === 2) {
        this.veiw1 = false;
        this.veiw2 = true;
        this.veiw3 = false;
        this.veiw4 = false;
        this.veiw5 = false;
        this.veiw6 = false;
      } else if (this.tab === 3) {
        this.veiw1 = false;
        this.veiw2 = false;
        this.veiw3 = true;
        this.veiw4 = false;
        this.veiw5 = false;
        this.veiw6 = false;
      } else if (this.tab === 4) {
        this.veiw1 = false;
        this.veiw2 = false;
        this.veiw3 = false;
        this.veiw4 = true;
        this.veiw5 = false;
        this.veiw6 = false;
      } else if (this.tab === 5) {
        this.veiw1 = false;
        this.veiw2 = false;
        this.veiw3 = false;
        this.veiw4 = false;
        this.veiw5 = true;
        this.veiw6 = false;
      } else {
        this.veiw1 = false;
        this.veiw2 = false;
        this.veiw3 = false;
        this.veiw4 = false;
        this.veiw5 = false;
        this.veiw6 = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding-bottom: $section-padding;
}
.background {
  height: 300px;
  background-color: #000;
  .img {
    height: 100%;
    background-image: url(../../img/background/faqBackground.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }
}
.pageTitle {
  text-align: center;
  padding: $section-padding;
  h2 {
    font-size: $elg-font * 2;
  }
  p {
    margin-top: 20px;
    font-size: $elg-font;
  }
}
.tab {
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid $gray-scale-3;
  li {
    flex: 1;
    font-size: $elg-font;
    padding: 18px 0;
    text-align: center;
    border-right: 1px solid $gray-scale-3;
    cursor: pointer;
    &:last-child {
      border-right: none;
    }
    &.active {
      background-color: $primary-color;
      color: #fff;
    }
  }
}

.listContainer {
  margin-top: 30px;
  /deep/ .el-collapse-item__header {
    height: auto;
    line-height: 1;
  }
  .questions {
    padding: 16px;
    span {
      display: inline-block;
      padding: 7px 10px;
      background-color: $gray-scale-1;
      border-radius: 3px;
      color: #fff;
    }
    .title {
      font-size: $elg-font;
      margin-top: 16px;
    }
  }
  .asked {
    background-color: $background-color;
    font-size: $lg-font;
    word-break: keep-all;
    padding: 16px;
  }
}
</style>
