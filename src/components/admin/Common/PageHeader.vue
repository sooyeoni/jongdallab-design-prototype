<template>
  <div class="page_header_wrap">
    <h2>{{ pageTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["pageTitle"],
};
</script>

<style scoped lang="scss">
.page_header_wrap {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #505050;
  border-left: 1px solid #575757;
  h2 {
    float: left;
    font-size: 20px;
    line-height: 60px;
    color: white;
    padding-left: 20px;
    font-weight: lighter;
  }
}
</style>
