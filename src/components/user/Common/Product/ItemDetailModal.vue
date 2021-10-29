<template>
  <div class="modal background">
    <div class="modalContents">
      <div class="modalHeader">
        <button @click="onCloseProductDetailView">
          <i class="fal fa-times"></i>
        </button>
      </div>
      <div class="modalBody">
        <swiper class="swiper swiper_img_wrap" :options="swiperOption">
          <swiper-slide
            ><img
              src="https://bupasastorage.blob.core.windows.net/deepch/product/2020/08/e404e642-d120-4157-85a6-dc8022555ea5-600.JPEG"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://bupasastorage.blob.core.windows.net/deepch/product/2020/08/0c151e45-4029-406a-8163-2d4e5b7f616c-600.JPEG"
          /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="information">
          <p class="name">상품명입니다.</p>
          <table>
            <tbody>
              <tr>
                <td>카테고리</td>
                <td>원단 > 우븐직기</td>
              </tr>
              <tr>
                <td>소재(혼용률)</td>
                <td>Cotton 90%, Nylon 10%</td>
              </tr>
              <tr>
                <td>규격(사이즈)</td>
                <td>90inch * 94inch</td>
              </tr>
              <tr>
                <td>색상</td>
                <td>10 Color</td>
              </tr>
              <tr>
                <td>제작기간</td>
                <td>3~5일 소요</td>
              </tr>
              <tr>
                <td>MOQ</td>
                <td>1,000/yard</td>
              </tr>
              <tr>
                <td>가격</td>
                <td>
                  견적 의뢰
                  <p>수량에 따라 가격이 변동 됩니다.견적의뢰를 요청하세요</p>
                </td>
              </tr>
              <tr>
                <td>제작 가능 항목</td>
                <td>사이즈변경,</td>
              </tr>
            </tbody>
          </table>
          <div class="buttonWrap">
            <a
              class="btn-default"
              href="mailto:webmaster@example.com?subject=[부자마켓B2B]상품문의"
            >
              Email 문의
            </a>
            <!-- <button class="like"><i class="fal fa-heart"></i></button>
            <button>문의하기</button>
            <button>견적내기</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import ItemList from "@/components/user/Common/Product/ItemList.vue";
export default {
  name: "ProductList",
  components: {
    CommonHeader,
    ItemList,
  },
  data: () => ({
    modalProduct: false,
    swiperOption: {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  }),
  methods: {
    showProductModal() {
      this.modalProduct = true;
    },
    onCloseProductDetailView() {
      this.$emit("onCloseProductDetailView");
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  .modalContents {
    margin: auto;
    max-width: 800px;
    .modalHeader {
      text-align: right;
      margin-bottom: 8px;
      button {
        background-color: transparent;
        color: #fff;
        width: 39px;
        height: 39px;
        padding: 0;
        font-size: $elg-font * 1.2;
        box-sizing: border-box;
      }
    }
    .modalBody {
      display: flex;
      background-color: #fff;
      flex: 1;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 20px;
      .swiper_img_wrap {
        flex: 1;
        width: 350px;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
        }
      }
      .information {
        flex: 1;
        padding: 16px;
        box-sizing: border-box;
        .name {
          margin-bottom: 15px;
          font-weight: 500;
          font-size: $elg-font + 5;
        }
        table {
          width: 100%;
          background-color: $background-color;
          padding: 5px;
          box-sizing: border-box;
          td {
            border-bottom: 1px solid $gray-scale-4;
            padding: 10px 0px 10px 10px;
            &:first-child {
              color: $gray-scale-1;
            }
            p {
              font-size: $xsm-font;
              margin-top: 5px;
              color: $primary-color;
            }
          }
        }
        .buttonWrap {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          a {
            display: block;
            flex: 1;
            text-align: center;
            padding: 15px;
          }
          button {
            flex: 1;
            margin-top: 5px;
            margin-left: 5px;
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
}
</style>
