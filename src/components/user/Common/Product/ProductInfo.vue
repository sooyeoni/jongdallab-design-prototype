<template>
  <section>
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
    <div class="product_info">
      <p class="product_name">W0001-11</p>
      <table class="product_option">
        <colgroup>
          <col width="100" />
        </colgroup>
        <tbody>
          <tr>
            <td>카테고리</td>
            <td>원단 > 우븐직기</td>
          </tr>
          <tr>
            <td>소재(혼용률)</td>
            <td>Cotton 90%,Nylon 10%</td>
          </tr>
          <tr>
            <td>규격(사이즈)</td>
            <td>90inch*94inch</td>
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
            <td>1000/Yard</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              견적 의뢰<span
                >수량에 따라 가격이 변동 됩니다.견적 의뢰를 요청하세요.</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductInfo",
  data: () => ({
    swiperOption: {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  }),
};
</script>

<style scoped lang="scss">
section {
  background-color: white;
  .swiper_img_wrap {
    position: relative;
    height: 300px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
  .product_info {
    padding: 15px 0px;
    .product_name {
      margin-bottom: 15px;
      font-weight: 500;
      font-size: $elg-font;
      text-align: center;
    }
    .product_option {
      width: 100%;
      background-color: white;
      box-sizing: border-box;
      tbody {
        border-radius: 4px;
      }
      tbody td {
        padding: 15px 10px 10px 15px;
        &:nth-child(1) {
          font-weight: bold;
        }
        span {
          display: block;
          font-size: $sm-font;
          color: crimson;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
