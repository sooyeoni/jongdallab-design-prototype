<template>
  <section>
    <common-header />
    <section class="container">
      <div class="flexWrap">
        <div class="searchWrap">
          <i class="fal fa-search"></i>
          <!-- <div class="keywordSearch">
            <input type="text" />
          </div> -->
          <div class="imageTag">
            <label class="background_close_label"
              ><img
                src="https://bupasastorage.blob.core.windows.net/deepch/product/2020/12/1268e3ff-76c5-4efc-87f5-857b1a3bb22c-600.jpg"/>
              <span data-filetype=".png,.gif,.jpg,.jpeg"
                >이것은 파일명이 정말로 긴 파일입니다만 끝까지 보이지
                않습니다.png</span
              >
              <i class="fal fa-times"></i
            ></label>
          </div>
        </div>

        <button @click="onClickImageSearch">
          <i class="fal fa-camera"></i>
          이미지 검색
        </button>
      </div>
      <div class="imagedSearch" v-if="imageUpload">
        <div class="fileBox">
          <div class="inputFile">
            <p class="mergeIco">
              <i class="fal fa-file-image"></i>
              <i class="fas fa-plus-circle"></i>
            </p>
            <p class="text">
              마우스로 드래그해서 이미지를 추가 하시거나 파일 찾기를 해주세요.
            </p>
            <label for="imageFile" class="btn-default">
              파일 찾기
              <input type="file" id="imageFile" />
            </label>
          </div>
          <!-- 이미지 업로드후 결과페이지로 가기전까지 -->
          <!-- <div class="loading">
              <i class="fas fa-spinner-third fa-6x fa-pulse"></i>
            </div> -->
        </div>
        <p class="imageSearchBtn">
          <button class="cloes" @click="onCloseImageSearch">
            <i class="fal fa-times"></i> 닫기
          </button>
        </p>
      </div>
      <div class="productWrap">
        <h3>상품목록(113건)</h3>
        <item-list />
        <paging />
      </div>
    </section>
    <common-footer />
  </section>
</template>

<script>
import CommonHeader from "@/components/user/Common/Header/CommonHeader.vue";
import Paging from "@/components/user/Common/Paging/Paging.vue";
import ItemList from "@/components/user/Common/Product/ItemList.vue";
import ItemDetailModal from "@/components/user/Common/Product/ItemDetailModal.vue";
import CommonFooter from "@/components/user/Common/Footer/CommonFooter.vue";
export default {
  name: "ProductList",
  components: {
    CommonHeader,
    ItemList,
    Paging,
    CommonFooter,
  },
  data: () => ({
    imageUpload: false,
    modalProduct: false,
  }),
  methods: {
    onClickImageSearch() {
      this.imageUpload = true;
    },
    onCloseImageSearch() {
      this.imageUpload = false;
    },
  },
};
</script>

<style scoped lang="scss">
.flexWrap {
  display: flex;
  margin-top: 30px;
  height: 45px;
  > button {
    width: 180px;
    border-radius: 70px;
    border: 1px solid $gray-scale-3;
    margin-left: 15px;
  }
  .searchWrap {
    flex: 1;
    border: 1px solid $gray-scale-3;
    display: flex;
    overflow: hidden;
    border-radius: 50px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    > i {
      line-height: 43px;
      font-size: $elg-font;
      width: 45px;
    }
    .keywordSearch {
      flex: 1;

      input {
        flex: 1;
        border: none;
        padding-left: 5px;
        border-radius: 0;
      }
      button {
        border: none;
      }
      select {
        max-width: 150px;
        border: 0px;
      }
    }
    .imageTag {
      flex: 1;
      text-align: left;
      padding: 5px 0;
      height: 100%;
      box-sizing: border-box;
      label {
        display: inline-flex;
        margin-right: 10px;
        padding: 3px 10px 3px 3px;
        height: 100%;
        line-height: 27px;
        box-sizing: border-box;
        vertical-align: middle;
        justify-items: middle;
        i {
          line-height: 28px;
          padding-left: 5px;
          cursor: pointer;
        }
        span {
          max-width: 150px;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          position: relative;
        }
        img {
          height: 100%;
          margin-right: 5px;
        }
      }
    }
  }
}

.imageSearchBtn {
  text-align: right;
  button {
    border: 0;
    display: inline;
    width: auto;
    background-color: transparent;
  }
}
.fileBox {
  text-align: center;
  border-radius: 5px;
  border: 1px dashed $gray-scale-3;
  padding: 50px;
  margin-top: 25px;
  background-color: $background-color;
  p {
    margin-bottom: 20px;
    &.text {
      font-size: $lg-font;
      color: $gray-scale-1;
    }
  }

  .mergeIco {
    display: inline-block;
    position: relative;
    i {
      font-size: 55px;
    }
    i.fas {
      position: absolute;
      bottom: 0px;
      right: -10px;
      font-size: $lg-font;
      color: $primary-color;
      background-color: $background-color;
      border-radius: 50%;
    }
  }
  label {
    width: 180px;
    display: inline-block;
    padding: 10px 0;
    input[type="file"] {
      display: none;
    }
  }
}
/*



        */

.productWrap {
  border-top: 1px solid $gray-scale-3;
  padding-top: $section-padding / 2;
  margin-top: $section-padding / 2;
  h3 {
    font-weight: 500;
    font-size: $elg-font;
  }
  > div {
    display: flex;
    .filterWrap {
      width: 280px;
      margin-right: 10px;
      .filterBox {
        padding: 20px;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .onFilter {
        width: 100px;
        margin: 20px auto;
        display: block;
      }
    }
  }
}
</style>
