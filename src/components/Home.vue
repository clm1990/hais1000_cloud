<template>
  <div>
    <div class="nav">
      <div class="logo">Hais1000 配置平台</div>
      <div class="nav-wrapper">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
        >
          <template v-for="(m, i) in menu">
            <el-menu-item
              v-if="!m.children || (m.children && m.children.length == 0)"
              :key="m.label"
              :index="(i + 1).toString()"
              @click="openMenu(m)"
            >
              <i class="el-icon-location"></i>
              <span slot="title">{{ m.label }}</span>
            </el-menu-item>
            <el-submenu
              v-if="m.children && m.children.length > 0"
              :key="m.label"
              :index="(i + 1).toString()"
            >
              <template slot="title">
                <i :class="m.icon"></i>
                <span>{{ m.label }}</span>
              </template>
              <el-menu-item
                v-for="(n, j) in m.children"
                :key="n.label"
                :index="(i + 1).toString() + '-' + (j + 1).toString()"
                @click="openChildMenu(m, n)"
              >
                <i :class="n.icon"></i>
                <span>{{ n.label }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <div class="top-bar"></div>
      <div class="main-content">
        <!--router-view></router-view-->
        <Info />
      </div>
    </div>
  </div>
</template>

<script>
import requestsMock from "../api/requestMock.js";
import Info from "../components/Info.vue";
export default {
  name: "HelloWorld",
  components: {
    Info,
  },
  data() {
    return {
      menu: {},
    };
  },
  methods: {
    openMenu(m) {
      console.log(m.path);
      this.$router.push(m.path);
    },
    openChildMenu(m, n) {
      console.log(m.path, n.path);
      this.$router.push(m.path + "/" + n.path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    requestsMock.get("/getmenu").then((response) => {
      this.menu = response.data.data;
      console.log(this.menu);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 12%;
  height: 100%;
  min-width: 12rem;
  min-height: 100rem;
  float: left;
  overflow: hidden;
  background-color: #545c64;
}

.logo {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #f5f5f5;
  font-size: 1.5rem;
  font-weight: 500;
}

.el-menu {
  border: none;
}

.el-menu-item.is-active {
  background-color: #409eff !important;
}

.main {
  width: 88%;
  height: 100%;
  min-height: 1000px;
  float: left;
  overflow: hidden;
  background-color: #f0f2f5;
}

.top-bar {
  width: 100%;
  height: 3rem;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: white;
}

.main-content {
  margin: 8px 7px 0px 7px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}
</style>
