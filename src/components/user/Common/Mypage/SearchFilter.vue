<template>
  <div class="searchFilter">
    <div>
      <div class="date_radio">
        <div>
          <label class="box-radio-input" @click="dateShow = false"
            ><input type="radio" name="btnType" checked="checked" /><span
              >전체</span
            ></label
          >
          <label class="box-radio-input" @click="dateShow = false"
            ><input type="radio" name="btnType" /><span>오늘</span></label
          >
          <label class="box-radio-input" @click="dateShow = false"
            ><input type="radio" name="btnType" /><span>7일</span></label
          >
          <label class="box-radio-input" @click="dateShow = false"
            ><input type="radio" name="btnType" /><span>30일</span></label
          >
          <label class="box-radio-input" @click="dateShow = true"
            ><input type="radio" name="btnType" /><span>기간설정</span></label
          >
        </div>
      </div>
      <div class="dateSetting" v-if="dateShow">
        <input type="date" /> - <input type="date" />
      </div>
    </div>
    <div class="search_input">
      <input type="search" placeholder="의뢰명을 검색할 수 있습니다." />
      <button>검색</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data: () => ({
    dateShow: false,
  }),
};
</script>

<style scoped lang="scss">
.searchFilter {
  background-color: white;
  border: 1px solid $gray-scale-3;
  padding: 18px 20px;
  margin-top: 15px;
  overflow: hidden;
  > div {
    display: flex;
    margin-bottom: 10px;
    .date_radio {
      float: left;
      margin-right: 10px;
      label {
        margin: 0 3px;
        &:first-child {
          margin-left: 0px;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dateSetting {
    input[type="date"] {
      padding: 5px;
    }
  }
  .search_input {
    input[type="search"] {
      width: 300px;
    }
    button {
      width: 80px;
      margin-left: 10px;
      background-color: $gray-scale-1;
      color: white;
    }
  }
}
.box-radio-input input[type="radio"]:checked + span {
  background-color: $gray-scale-1;
}
</style>
