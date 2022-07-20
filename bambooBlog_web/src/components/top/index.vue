<template>
  <div class="navbar">
    <div class="left">
      <img src="" alt=""/>
      <span>溪竹树洞</span>
    </div>
    <div class="right-content">
      <div class="topBar">
        <el-menu
          :default-active="activeMenu"
          :background-color="bgColor"
          :text-color="textColor"
          :unique-opened="false"
          :active-text-color="activeTextColor"
          :collapse-transition="false"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <template v-for="(route, index) in permissionRoutes">
            <el-menu-item
              v-if="!route.hidden"
              :index="route.path"
              :key="index"
            >
            {{generateTitle(route.meta.title)``}}
              <item
                v-if="route.meta"
                :icon="route.meta && route.meta.icon"
                :title="generateTitle(route.meta.title)"
              />
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { generateTitle } from "@/utils/i18n";
export default {
  data() {
    return{
      bgColor: '#5396ca',
      textColor: '#ffffff'
    }
  },
  computed: {
    ...mapGetters(["routerList"]),
    activeMenu() {
      this.$store.dispatch("router/getRouterList", this.$route.path);
      return "/" + this.$route.path.split("/")[1];
    }
  },
  methods: {
    generateTitle,
  }
}
</script>

<style>
.navbar {
  position: relative;
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 30%);
}
</style>