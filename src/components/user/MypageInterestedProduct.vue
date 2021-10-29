<template>
  <section>
    <common-header />
    <section class="mypage_wrap">
      <div class="container">
        <div class="mypage_Dashboard">
          <mypage-dashboard></mypage-dashboard>
        </div>
        <div class="contents">
          <mypage-navi :active="10"></mypage-navi>
          <div class="wrap">
            <h3>관심상품</h3>
            <div class="product_box">
              <item-list @onProductDetailView="showProductModal"></item-list>
              <paging></paging>
            </div>
          </div>
        </div>
      </div>
    </section>
    <item-detail-modal
      v-if="modalProduct"
      @onCloseProductDetailView="onCloseProductDetailView"
    ></item-detail-modal>
    <common-footer></common-footer>
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import MypageNavi from "@/components/user/Common/Mypage/MypageNavi.vue";
import MypageDashboard from "@/components/user/Common/Mypage/MypageDashboard.vue";
import ItemList from "@/components/user/Common/Product/ItemList.vue";
import ItemDetailModal from "@/components/user/Common/Product/ItemDetailModal.vue";
import Paging from "@/components/user/Common/Paging/Paging.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";

export default {
  name: "MypageInterestedProduct",
  components: {
    CommonHeader,
    MypageNavi,
    MypageDashboard,
    ItemList,
    ItemDetailModal,
    Paging,
    CommonFooter,
  },
  data: () => ({
    modalProduct: false,
  }),
  methods: {
    showProductModal() {
      this.modalProduct = true;
    },
    onCloseProductDetailView() {
      this.modalProduct = false;
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
      }
      .product_box {
        margin-top: 20px;
      }
    }
  }
}
</style>
