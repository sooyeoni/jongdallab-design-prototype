<template>
  <div class="container searchWrap">
    <div class="flexWrap">
      <div class="keywordSearch">
        <select name="" id="">
          <option value="all">all category</option>
          <option value="all">all category</option>
          <option value="all">all category</option>
          <option value="all">all category</option>
          <option value="all">all category</option>
        </select>
        <input type="text" />
        <button class="btn-default"><i class="fal fa-search"></i></button>
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
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data: () => ({
    imageUpload: false,
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
.searchWrap {
  padding: 30px 10px !important;
  .flexWrap {
    display: flex;
    > button {
      width: 180px;
      border-radius: 70px;
      border: 1px solid $gray-scale-3;
      margin-left: 15px;
    }

    .keywordSearch {
      width: 100%;
      border: 1px solid $gray-scale-3;
      display: flex;
      overflow: hidden;
      border-radius: 50px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 0 0 20px;
      height: 55px;

      input {
        flex: 1;
        border: none;
        border-left: 1px solid $gray-scale-3;
        padding-left: 5px;
        border-radius: 0;
      }
      button {
        border: none;
        border-radius: 0;
        width: 60px;
        i {
          font-size: $elg-font;
          width: 45px;
        }
      }
      select {
        max-width: 150px;
        border: 0px;
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
}
</style>
