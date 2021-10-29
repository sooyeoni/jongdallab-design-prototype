<template>
  <div class="paging">
    <ul class="paging_box">
      <li>
        <button><i class="fal fa-angle-double-left"></i></button>
      </li>
      <li>
        <button><i class="fal fa-angle-left"></i></button>
      </li>
      <li>
        <button>1</button>
      </li>
      <li>
        <button>2</button>
      </li>
      <li>
        <button class="on">3</button>
      </li>
      <li>
        <button>4</button>
      </li>
      <li>
        <button>5</button>
      </li>
      <li>
        <button><i class="fal fa-angle-right"></i></button>
      </li>
      <li>
        <button><i class="fal fa-angle-double-right"></i></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Paging",
};
</script>

<style scoped lang="scss">
.paging {
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;
  .paging_box {
    display: flex;
    li {
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
      button {
        border-radius: 4px;
        background-color: #f6f6f6;
        padding: 9px;
        min-width: 35px;
        color: black;
        border: 0;
        &.on {
          background-color: #505050;
          color: white;
        }
      }
    }
  }
}
</style>
