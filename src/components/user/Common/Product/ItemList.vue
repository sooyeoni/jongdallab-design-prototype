<template>
  <div>
    <ul class="productList">
      <li class="card" v-for="item in 5">
        <div class="img">
          <img
            src="https://bupasastorage.blob.core.windows.net/deepch/product/2020/12/1268e3ff-76c5-4efc-87f5-857b1a3bb22c-600.jpg"
            :alt="item.name"
          />
        </div>
        <div class="information">
          <p class="category">원단 > 우븐직기</p>
          <p class="name">상품명입니다.</p>
          <p>
            <label>MOQ</label>
            <span>1,000/yard</span>
          </p>
          <p>
            <label>Color</label>
            <span>10 colors</span>
          </p>
          <p>
            <label>규격(사이즈)</label>
            <span>90inch * 94inch</span>
          </p>
          <p>
            <label>Price</label>
            <span>가격미정</span>
          </p>
          <div class="buttonWrap">
            <button @click="onProductDetailView">상품 상세</button>
            <!-- <button class="like"><i class="fal fa-heart"></i></button>
            <button @click="onMyplageInquire">문의하기</button>
            <button>견적내기</button> -->
            <a
              class="btn-default"
              href="mailto:webmaster@example.com?subject=[부자마켓B2B]상품문의"
            >
              Email 문의
            </a>
          </div>
        </div>
      </li>
    </ul>
    <item-detail-modal
      v-if="modalProduct"
      @onCloseProductDetailView="onCloseProductDetailView"
    />
  </div>
</template>

<script>
import ItemDetailModal from "@/components/user/Common/Product/ItemDetailModal.vue";

export default {
  name: "ItemList",
  components: {
    ItemDetailModal,
  },
  data: () => ({
    modalProduct: false,
  }),
  methods: {
    onProductDetailView() {
      this.modalProduct = true;
    },
    onCloseProductDetailView() {
      this.modalProduct = false;
    },
    onMyplageInquire() {
      this.$router.push(`/mypage/inquire`);
    },
  },
};
</script>

<style scoped lang="scss">
.productList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
  li.card {
    max-width: 49%;
    min-width: 49%;
    flex: 1;
    display: flex;
    border-radius: 5px;
    border: 1px solid $gray-scale-3;
    overflow: hidden;
    margin-bottom: 20px;
    > div {
      flex: 1;
      overflow: hidden;
      background-color: white;
      img {
        width: 100%;
        transform: scale(1.1);
      }
    }
    .information {
      padding: 16px;
      box-sizing: border-box;

      p {
        margin-bottom: 15px;
        &.category {
          color: $gray-scale-2;
        }
        &.name {
          font-weight: 600;
          font-size: $elg-font;
        }
        label {
          display: inline-block;
          min-width: 120px;
        }
      }
      .buttonWrap {
        display: flex;
        flex-wrap: wrap;
        a {
          display: block;
          flex: 1;
          text-align: center;
          padding: 12px;
          margin-top: 10px;
        }
        button {
          flex: 1;
          margin-top: 5px;
          margin-left: 5px;
          &:first-child {
            min-width: 100%;
            margin-left: 0px;
          }
          &.like {
            margin-left: 0px;
            max-width: 40px;
            min-width: 40px;
          }
        }
      }
    }
  }
}
</style>
