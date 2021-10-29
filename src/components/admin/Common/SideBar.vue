<template>
  <div class="nav_wrapper">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <div class="logo_section"><h1>B2B BM ADMIN</h1></div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      background-color="white"
      text-color="black"
      @select="onSelect"
      active-text-color="#fb1d5a"
    >
      <el-submenu index="product">
        <template slot="title">
          <i class="el-icon-shopping-bag-2"></i>
          <span slot="title">상품 관리</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin">상품 목록</el-menu-item>
          <el-menu-item index="1-2">상품 등록</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/admin/dataManage">
        <i class="el-icon-folder"></i>
        <span slot="title">데이터 관리</span>
      </el-menu-item>
      <el-menu-item index="/admin">
        <i class="el-icon-receiving"></i>
        <span slot="title">견적 관리</span>
      </el-menu-item>
      <el-menu-item index="/admin">
        <i class="el-icon-files"></i>
        <span slot="title">발주 관리</span>
      </el-menu-item>
      <el-menu-item index="/admin/inquiryList">
        <i class="el-icon-chat-round"></i>
        <span slot="title">문의 관리</span>
      </el-menu-item>
      <el-menu-item index="/admin/memberList">
        <i class="el-icon-setting"></i>
        <span slot="title">회원 관리</span>
      </el-menu-item>
      <el-menu-item index="logout">
        <i class="el-icon-switch-button"></i>
        <span slot="title">로그아웃</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    active: "",
  }),
  methods: {
    setActive() {
      this.active = "";
      this.$nextTick(() => {
        this.active = this.$route.path;
      });
    },
    onSelect(key) {
      if (key === "logout") {
        this.$store.dispatch("logoutAdmin", { isCall: true });
      } else if (key === "collapse") {
        this.$store.commit("setSidebarCollapse", {
          sidebarCollapse: !this.collapse,
        });
        this.setActive();
      } else if (key) {
        this.$router.push(key);
      }
    },
  },
  created() {
    this.setActive();
  },
};
</script>

<style scoped lang="scss">
.logo_section {
  text-align: center;
  box-sizing: border-box;
  width: 230px;
  height: 60px;
  line-height: 1.4;
  font-size: 15px;
  line-height: 60px;
  background-color: $gray-scale-1;
  h1 {
    font-weight: lighter;
  }
}
.nav_wrapper {
  color: white;
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
  box-sizing: border-box;
  padding: 20px 0;
}
</style>
