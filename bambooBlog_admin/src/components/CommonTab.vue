<template>
  <div class="tags">
    <el-tag
      v-for="tag in dynamicTags"
      size="small"
      :key="tag"
      class="mx-1"
      :closable="tag.meta.title !== '首页'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {},
  setup() {
    let store = useStore()
    let dynamicTags = computed(() => {
      return store.state.tabMenu.tagList
    })
    let handleClose = (tag) => {
      store.commit('tabMenu/closeTag', tag)
    }
    let router = useRouter()
    let route = useRoute()
    function changeMenu(item) {
      router.push({ name: item.name })
      store.commit('tabMenu/selectMenu', item)
    }
    return {
      dynamicTags,
      handleClose,
      changeMenu,
      route,
    }
  },
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
